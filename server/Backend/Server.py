# import json
# from flask import Flask, jsonify

# app = Flask(__name__)

# @app.route('/charts', methods=['GET'])
# def get_charts():
#     with open("charts_data.json", "r") as json_file:
#         charts_data = json.load(json_file)
#     return jsonify(charts_data)

# @app.route('/population', methods=['GET'])
# def get_demographics():
#     with open("population_data.json", "r") as json_file:
#         demographics_data = json.load(json_file)
#     return jsonify(demographics_data)

# @app.route('/graphs', methods=['GET'])
# def get_graph():
#     with open("radar_graph.json", "r") as json_file:
#         radar_graph = json.load(json_file)
#     return jsonify(radar_graph)

# if __name__ == '__main__':
#     port = 5251
#     print(f"🚀 Server is running on http://localhost:{port}")
#     app.run(debug=True, port=port)


import json
from flask import Flask, jsonify, request
import pandas as pd
import numpy as np
import plotly.graph_objects as go
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# Existing Routes
@app.route('/charts', methods=['GET'])
def get_charts():
    with open("charts_data.json", "r") as json_file:
        charts_data = json.load(json_file)
    return jsonify(charts_data)

@app.route('/population', methods=['GET'])
def get_demographics():
    with open("population_data.json", "r") as json_file:
        demographics_data = json.load(json_file)
    return jsonify(demographics_data)

@app.route('/graphs', methods=['GET'])
def get_graph():
    with open("radar_graph.json", "r") as json_file:
        radar_graph = json.load(json_file)
    return jsonify(radar_graph)

# New Route for Radar Graphs
@app.route('/api/radar-graph', methods=['GET'])
def get_radar_graph():
    selected_region = request.args.get('region')
    if not selected_region:
        return jsonify({"error": "Region is required"}), 400

    # Paths to your CSV files
    actual_file = "mumbai_smart_city_data.csv"
    predictions_file = "mumbai_smart_city_predictions.csv"

    # Feature explanations
    feature_descriptions = {
        "Total Population": "Total number of residents in the region.",
        "Total Males": "Total male residents in the region.",
        "Total Females": "Total female residents in the region.",
        "Air Quality": "Measured using Air Quality Index (AQI). Lower is better.",
        "Traffic Emission": "Amount of pollutants emitted from vehicles (µg/m³).",
        "Green Coverage": "Percentage of area covered by greenery (%).",
        "Congestion in Area": "Percentage of traffic congestion in peak hours (%).",
        "Fuel Consumption": "Total fuel consumption in the region (Liters).",
        "Electricity Usage": "Total electricity consumption in kWh."
    }

    try:
        # Load datasets
        df_actual = pd.read_csv(actual_file)
        df_predictions = pd.read_csv(predictions_file)

        # Standardize column names (strip spaces)
        df_actual.columns = df_actual.columns.str.strip()
        df_predictions.columns = df_predictions.columns.str.strip()

        # Check required columns
        if not {"Region", "Year"}.issubset(df_actual.columns) or not {"Region", "Feature", "Predicted Value"}.issubset(df_predictions.columns):
            return jsonify({"error": "Required columns missing."}), 500

        # Get list of available regions
        available_regions = df_actual["Region"].unique().tolist()
        if selected_region not in available_regions:
            return jsonify({"error": "Invalid region"}), 400

        # Filter only 2023 actual data for the selected region
        df_actual_2023 = df_actual[df_actual["Year"] == 2023].set_index("Region")

        # Compute min-max scaling values using 2023 data
        feature_min = df_actual_2023.drop(columns=["Year"], errors="ignore").min()
        feature_max = df_actual_2023.drop(columns=["Year"], errors="ignore").max()

        df_region_actual = df_actual_2023.loc[selected_region]
        df_region_predicted = df_predictions[df_predictions["Region"] == selected_region]

        if df_region_predicted.empty:
            return jsonify({"error": f"No predicted data for {selected_region}"}), 404

        labels = df_region_predicted["Feature"].values.tolist()

        # Actual raw values
        raw_actual_values = [df_region_actual[feature] if feature in df_region_actual else 0 for feature in labels]
        actual_values = [
            (df_region_actual[feature] - feature_min[feature]) / (feature_max[feature] - feature_min[feature])
            if feature in df_region_actual else 0
            for feature in labels
        ]

        # Predicted raw values
        raw_predicted_values = df_region_predicted["Predicted Value"].values.tolist()
        predicted_values = [
            (val - feature_min[feature]) / (feature_max[feature] - feature_min[feature])
            if feature in feature_min else 0
            for val, feature in zip(raw_predicted_values, labels)
        ]

        # Close the radar chart loop
        labels.append(labels[0])
        actual_values.append(actual_values[0])
        predicted_values.append(predicted_values[0])

        # Construct the JSON response
        graph_data = {
            "labels": labels,
            "actual_values": actual_values,
            "predicted_values": predicted_values
        }

        return jsonify(graph_data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = 5251
    print(f"🚀 Server is running on http://localhost:{port}")
    app.run(debug=True, port=port)


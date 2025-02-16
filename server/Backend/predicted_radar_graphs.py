import pandas as pd
import numpy as np
import plotly.graph_objects as go
import json

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

charts_json = {}
actual_file = "Backend/mumbai_smart_city_data.csv"
predictions_file = "Backend/mumbai_smart_city_predictions.csv"


    # Load datasets
df_actual = pd.read_csv(actual_file)
df_predictions = pd.read_csv(predictions_file)
charts_json["Region"] = df_actual["Region"].unique().tolist()
    # Standardize column names (strip spaces)
df_actual.columns = df_actual.columns.str.strip()
df_predictions.columns = df_predictions.columns.str.strip()

    # Ensure required columns exist
if not {"Region", "Year"}.issubset(df_actual.columns) or not {"Region", "Feature", "Predicted Value"}.issubset(df_predictions.columns):
    print("Error: Required columns missing.")

    # Get list of available regions
available_regions = df_actual["Region"].unique().tolist()

    # Prompt user for a region
selected_region = input(f"Enter a region ({', '.join(available_regions)}): ").strip()

    # Validate the selected region
if selected_region not in available_regions:
    print(f"Error: '{selected_region}' is not a valid region.")

    # Filter only 2023 actual data for the selected region
df_actual_2023 = df_actual[df_actual["Year"] == 2023].set_index("Region")

    # Compute min-max scaling values using 2023 data
feature_min = df_actual_2023.drop(columns=["Year"], errors="ignore").min()
feature_max = df_actual_2023.drop(columns=["Year"], errors="ignore").max()

df_region_actual = df_actual_2023.loc[selected_region]

    # Get predicted data for this region
df_region_predicted = df_predictions[df_predictions["Region"] == selected_region]

if df_region_predicted.empty:
    print(f"No predicted data for {selected_region}, skipping...")

    # Features to compare (from predictions dataset)
labels = df_region_predicted["Feature"].values.tolist()

    # Actual raw values
raw_actual_values = [df_region_actual[feature] if feature in df_region_actual else 0 for feature in labels]
    
    # Normalize actual values for plotting
actual_values = [
    (df_region_actual[feature] - feature_min[feature]) / (feature_max[feature] - feature_min[feature])
    if feature in df_region_actual else 0
    for feature in labels
]

    # Predicted raw values
raw_predicted_values = df_region_predicted["Predicted Value"].values.tolist()

    # Normalize predicted values for plotting
predicted_values = [
    (val - feature_min[feature]) / (feature_max[feature] - feature_min[feature])
    if feature in feature_min else 0
    for val, feature in zip(raw_predicted_values, labels)
]

    # Close the radar chart loop
labels.append(labels[0])
actual_values.append(actual_values[0])
predicted_values.append(predicted_values[0])
raw_actual_values.append(raw_actual_values[0])
raw_predicted_values.append(raw_predicted_values[0])

    # Create radar chart using Plotly
fig = go.Figure()

    # Actual values
fig.add_trace(go.Scatterpolar(
    r=actual_values,
    theta=labels,
    fill='toself',
    name="2023 Actual",
    line=dict(color="blue", width=2),
    hoverinfo="text",
    text=[
        f"{feature}: {value:.2f}<br>{feature_descriptions.get(feature, 'No description')}"
        for feature, value in zip(labels, raw_actual_values)
    ]  # Show actual values with descriptions
))

    # Predicted values
fig.add_trace(go.Scatterpolar(
    r=predicted_values,
    theta=labels,
    fill='toself',
    name="2024 Predicted",
    line=dict(color="red", width=2),
    hoverinfo="text",
    text=[
        f"{feature}: {value:.2f}<br>{feature_descriptions.get(feature, 'No description')}"
        for feature, value in zip(labels, raw_predicted_values)
    ]  # Show predicted values with descriptions
))

    # Layout adjustments
fig.update_layout(
    polar=dict(
        radialaxis=dict(visible=True, range=[0, 1])
    ),
    title=f"Comparison of 2023 vs 2024 (Predicted) for {selected_region} (Normalized)",
    showlegend=True,
    label ={selected_region}
    )

    # Show the plot
fig.show()

charts_json["predicted"] = json.loads(fig.to_json())

with open("radar_graph.json", "w") as json_file:
    json.dump(charts_json, json_file, indent=1)

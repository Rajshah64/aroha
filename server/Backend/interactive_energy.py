import pandas as pd
import plotly.graph_objs as go
import json

# Load the Excel files
state_file = 'Copy-1 State Wise Deep Dive 2022-23.xlsx'
india_file = 'India energy 2022-23.xlsx'

state_data = pd.read_excel(state_file, sheet_name=None)
india_data = pd.read_excel(india_file, sheet_name=None)

# Function to clean and convert data
def clean_and_convert(column):
    column = column.astype(str)
    return pd.to_numeric(column.str.replace(',', '').str.extract(r'(\d+\.?\d*)')[0], errors='coerce')

# Function to generate and display graphs
def generate_chart(fig, sheet_name):
    fig.update_layout(title=sheet_name, xaxis_title='Metric', yaxis_title='Values')
    fig.show()  # Display graph in Python
    return json.loads(fig.to_json())  # Convert to JSON for Flask

# 1. Bar Chart for Allocated Installed Capacity
def bar_chart(sheet_name):
    state_df = state_data[sheet_name].copy()
    india_df = india_data[sheet_name].copy()
    state_df.columns = ['Metric', 'Mumbai']
    india_df.columns = ['Metric', 'India']

    state_df['Mumbai'] = clean_and_convert(state_df['Mumbai'])
    india_df['India'] = clean_and_convert(india_df['India'])

    merged_df = pd.merge(state_df, india_df, on='Metric')
    merged_df.dropna(inplace=True)

    fig = go.Figure()
    fig.add_trace(go.Bar(x=merged_df['Metric'], y=merged_df['Mumbai'], name='Mumbai', marker=dict(color='blue')))
    fig.add_trace(go.Bar(x=merged_df['Metric'], y=merged_df['India'], name='India', marker=dict(color='orange')))

    return generate_chart(fig, f'{sheet_name} - Mumbai vs India')

# 2. Concentric Pie Chart for Electricity
def concentric_pie(sheet_name):
    state_df = state_data[sheet_name].copy()
    india_df = india_data[sheet_name].copy()
    state_df.columns = ['Metric', 'Mumbai']
    india_df.columns = ['Metric', 'India']

    state_df['Mumbai'] = clean_and_convert(state_df['Mumbai'])
    india_df['India'] = clean_and_convert(india_df['India'])

    merged_df = pd.merge(state_df, india_df, on='Metric')
    merged_df.dropna(inplace=True)

    fig = go.Figure()
    fig.add_trace(go.Pie(labels=merged_df['Metric'], values=merged_df['Mumbai'], name='Mumbai', hole=0.5, textinfo='percent'))
    fig.add_trace(go.Pie(labels=merged_df['Metric'], values=merged_df['India'], name='India', hole=0.7, textinfo='percent'))

    return generate_chart(fig, f'{sheet_name} - Mumbai vs India')

# 3. Line Graph for Economy & Demography
def line_graph(sheet_name):
    state_df = state_data[sheet_name].copy()
    india_df = india_data[sheet_name].copy()
    state_df.columns = ['Metric', 'Mumbai']
    india_df.columns = ['Metric', 'India']

    state_df['Mumbai'] = clean_and_convert(state_df['Mumbai'])
    india_df['India'] = clean_and_convert(india_df['India'])

    merged_df = pd.merge(state_df, india_df, on='Metric')
    merged_df.dropna(inplace=True)

    fig = go.Figure()
    fig.add_trace(go.Scatter(x=merged_df['Metric'], y=merged_df['Mumbai'], mode='lines+markers', name='Mumbai'))
    fig.add_trace(go.Scatter(x=merged_df['Metric'], y=merged_df['India'], mode='lines+markers', name='India'))

    return generate_chart(fig, f'Trend Analysis - {sheet_name}')

# 4. Stacked Area Chart for Climate
def stacked_area_chart(sheet_name):
    state_df = state_data[sheet_name].copy()
    india_df = india_data[sheet_name].copy()
    state_df.columns = ['Metric', 'Mumbai']
    india_df.columns = ['Metric', 'India']

    state_df['Mumbai'] = clean_and_convert(state_df['Mumbai'])
    india_df['India'] = clean_and_convert(india_df['India'])

    merged_df = pd.merge(state_df, india_df, on='Metric')
    merged_df.dropna(inplace=True)

    fig = go.Figure()
    fig.add_trace(go.Scatter(x=merged_df['Metric'], y=merged_df['Mumbai'], mode='lines', name='Mumbai', stackgroup='one'))
    fig.add_trace(go.Scatter(x=merged_df['Metric'], y=merged_df['India'], mode='lines', name='India', stackgroup='one'))

    return generate_chart(fig, f'Cumulative View - {sheet_name}')

# Generate and store JSON results
charts_json = {
    "bar_chart": bar_chart('Allocated Installed Capacity'),
    "concentric_pie": concentric_pie('Electricity'),
    "line_graph": line_graph('Economy & Demography'),
    "stacked_area_chart": stacked_area_chart('Climate')
}

# Save JSON data to a file
#with open("charts_data.json", "w") as json_file:
 #   json.dump(charts_json, json_file, indent=4)

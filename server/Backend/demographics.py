import pandas as pd
import plotly.express as px
import json

# Load dataset
file_path = "95e22d97-7f59-4214-b244-2abbf52e6027.csv"
df = pd.read_csv(file_path)

# Merge wards with the same name by summing their populations
df_merged = df.groupby('Ward Name', as_index=False).sum()

# Store chart JSON data
charts_json = {}

# 1️⃣ Population Distribution Bar Chart
fig1 = px.bar(df_merged, x='Ward Name', y='Total Population', title='Total Population by Ward',
              color='Total Population', color_continuous_scale='Blues')
fig1.update_layout(xaxis_tickangle=-45)
charts_json["population_distribution"] = json.loads(fig1.to_json())

# 2️⃣ Pie Chart for Male vs Female Population
fig2 = px.pie(names=['Males', 'Females'], values=[df_merged['Total Males'].sum(), df_merged['Total Females'].sum()],
              title='Male vs Female Population Distribution')
charts_json["gender_distribution"] = json.loads(fig2.to_json())

# 3️⃣ SC/ST Population Stacked Bar Chart
fig3 = px.bar(df_merged, x='Ward Name', y=['SC Population', 'ST Population'],
              title='SC/ST Population by Ward', barmode='stack',
              labels={'value': 'Population', 'variable': 'Category'})
fig3.update_layout(xaxis_tickangle=-45)
charts_json["sc_st_population"] = json.loads(fig3.to_json())

# 4️⃣ Top 10 Most Populous Wards
top_wards = df_merged.nlargest(10, 'Total Population')
fig4 = px.bar(top_wards, x='Ward Name', y='Total Population',
              title='Top 10 Most Populous Wards', color='Total Population',
              color_continuous_scale='Viridis')
fig4.update_layout(xaxis_tickangle=-45)
charts_json["top_10_wards"] = json.loads(fig4.to_json())

# Save JSON data
with open("population_data.json", "w") as json_file:
    json.dump(charts_json, json_file, indent=4)

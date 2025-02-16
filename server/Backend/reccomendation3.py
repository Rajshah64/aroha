from groq import Groq
import requests
import math
import pandas as pd
import re

# Set up the Groq client
client = Groq(api_key="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")  # Replace with your API key

df = pd.read_csv("mumbai_smart_city_data.csv")

# Predefined lat/lon for key Mumbai areas
MUMBAI_LOCATIONS = {
    # North Mumbai and Beyond
    "Dahanu": (19.9907, 72.7448),
    "Palghar": (19.6967, 72.7655),
    "Boisar": (19.8035, 72.7550),
    "Virar": (19.4670, 72.7925),
    "Vasai": (19.3649, 72.8328),
    "Nalasopara": (19.4174, 72.8161),
    "Mira Road": (19.2813, 72.8685),
    "Bhayandar": (19.2819, 72.8577),
    "Dahisar": (19.2616, 72.8741),
    
    # Western Suburbs
    "Borivali East": (19.2290, 72.8760),
    "Borivali West": (19.2350, 72.8424),
    "Kandivali East": (19.2081, 72.8856),
    "Kandivali West": (19.2006, 72.8374),
    "Malad East": (19.1846, 72.8707),
    "Malad West": (19.1861, 72.8223),
    "Goregaon East": (19.1675, 72.8611),
    "Goregaon West": (19.1551, 72.8493),
    "Jogeshwari East": (19.1366, 72.8646),
    "Jogeshwari West": (19.1393, 72.8335),
    "Andheri East": (19.1192, 72.8656),
    "Andheri West": (19.1295, 72.8276),
    "Juhu": (19.0886, 72.8265),
    "Versova": (19.1340, 72.8016),
    "Vile Parle": (19.0988, 72.8516),
    "Santacruz": (19.0804, 72.8415),
    "Bandra East": (19.0598, 72.8475),
    "Bandra West": (19.0600, 72.8284),
    "Mahim": (19.0417, 72.8437),
    
    # Central Mumbai
    "Dadar": (19.0190, 72.8420),
    "Worli": (19.0159, 72.8159),
    "Ghatkopar": (19.0860, 72.9093),
    "Chembur": (19.0610, 72.8967),
    "Sion": (19.0434, 72.8615),
    "Kurla": (19.0626, 72.8799),
    "Chunabhatti": (19.0526, 72.8784),
    "Vidyavihar": (19.0811, 72.8905),
    "Kanjurmarg": (19.1233, 72.9280),
    "Nahur": (19.1531, 72.9515),
    "Bhandup": (19.1481, 72.9369),
    "Mulund": (19.1726, 72.9569),
    "Thane": (19.2183, 72.9781),
    
    # Extended Suburban Areas
    "Kalyan": (19.2437, 73.1355),
    "Dombivli": (19.2183, 73.0860),
    "Ulhasnagar": (19.2215, 73.1645),
    "Badlapur": (19.1556, 73.2656),
    "Ambarnath": (19.1936, 73.2007),
    "Bhiwandi": (19.3006, 73.0664),
    "Shahapur": (19.4500, 73.3307),
    "Karjat": (18.9107, 73.3235),
    "Khopoli": (18.7854, 73.3450),
    
    # Navi Mumbai & Raigad Region
    "Panvel": (18.9870, 73.1095),
    "Uran": (18.8783, 72.9231),
    "Alibaug": (18.6453, 72.8758),
    "Pen": (18.7368, 73.0963),
    "Murud": (18.3284, 72.9653),
    "Matheran": (18.9822, 73.2717),

    # Thane District
    "Kalwa": (19.2045, 73.0134),
    "Mumbra": (19.1736, 73.0305),
    "Ghodbunder": (19.2595, 72.9634),
    "Owale": (19.2495, 72.9548),
    "Manpada": (19.2249, 72.9895),
    "Hiranandani Estate": (19.2295, 72.9863),
    "Balkum": (19.2115, 72.9870),
    "Kolshet": (19.2298, 72.9839),

    # South Mumbai
    "Tardeo": (18.9671, 72.8059),
    "Parel": (18.9932, 72.8373),
    "Sewri": (18.9989, 72.8541),
    "Wadala": (19.0175, 72.8594),
    "Matunga": (19.0254, 72.8596),
    "Colaba": (18.9067, 72.8147),
    "Cuffe Parade": (18.9019, 72.8158),
    "Marine Lines": (18.9434, 72.8235),
    "Girgaon": (18.9545, 72.8182),
    "Charni Road": (18.9540, 72.8175),
    "Grant Road": (18.9635, 72.8197),
    "Mumbai Central": (18.9696, 72.8194),
    "Byculla": (18.9787, 72.8325),
    "Sandhurst Road": (18.9639, 72.8400),
    "Mazgaon": (18.9676, 72.8413),
    "Dockyard Road": (18.9626, 72.8476),
    "Reay Road": (18.9700, 72.8548),
    "Cotton Green": (18.9842, 72.8495),
    "Mahalaxmi": (18.9954, 72.8254),
    "Lower Parel": (18.9949, 72.8304),
    "Prabhadevi": (19.0077, 72.8217),
    "Elphinstone": (19.0031, 72.8309),
    "Dadar East": (19.0197, 72.8448),
    "Dadar West": (19.0182, 72.8385),
    "King Circle": (19.0340, 72.8574),
    "Sion East": (19.0438, 72.8656),
    "Sion West": (19.0425, 72.8607),
}


# OpenWeatherMap API Key (Replace with your actual key)
API_KEY = "4d6eff8951952df6fc55c68195cc3c4f"

def calculate_aqi(pollutants):
    aqi_breakpoints = {
        "pm2_5": [(0, 12, 0, 50), (12.1, 35.4, 51, 100), (35.5, 55.4, 101, 150),
                    (55.5, 150.4, 151, 200), (150.5, 250.4, 201, 300), (250.5, 500.4, 301, 500)],
        "pm10": [(0, 54, 0, 50), (55, 154, 51, 100), (155, 254, 101, 150),
                  (255, 354, 151, 200), (355, 424, 201, 300), (425, 604, 301, 500)],
        "co": [(0, 4.4, 0, 50), (4.5, 9.4, 51, 100), (9.5, 12.4, 101, 150),
                (12.5, 15.4, 151, 200), (15.5, 30.4, 201, 300), (30.5, 40.4, 301, 500)],
        "no2": [(0, 53, 0, 50), (54, 100, 51, 100), (101, 360, 101, 150),
                 (361, 649, 151, 200), (650, 1249, 201, 300), (1250, 2049, 301, 500)],
        "o3": [(0, 54, 0, 50), (55, 70, 51, 100), (71, 85, 101, 150),
                (86, 105, 151, 200), (106, 200, 201, 300)],
        "so2": [(0, 35, 0, 50), (36, 75, 51, 100), (76, 185, 101, 150),
                 (186, 304, 151, 200), (305, 604, 201, 300), (605, 1004, 301, 500)],
    }
    
    def get_aqi_value(concentration, breakpoints):
        for bp in breakpoints:
            if bp[0] <= concentration <= bp[1]:
                return ((bp[3] - bp[2]) / (bp[1] - bp[0])) * (concentration - bp[0]) + bp[2]
        return None
    
    aqi_values = []
    for pollutant, value in pollutants.items():
        if pollutant in aqi_breakpoints:
            aqi = get_aqi_value(value, aqi_breakpoints[pollutant])
            if aqi:
                aqi_values.append(aqi)
    
    return math.ceil(max(aqi_values)) if aqi_values else 0

def get_air_quality(region):
    # Find lat/lon for the given region
    location = next((loc for loc in MUMBAI_LOCATIONS if region.lower() in loc.lower()), None)
    
    if not location:
        return f"Error: No lat/lon data available for '{region}'."

    lat, lon = MUMBAI_LOCATIONS[location]
    api_url = f"http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API_KEY}"

    # Extract pollutants from API response
    # ban
    try:
        response = requests.get(api_url).json()
        if "list" in response and response["list"]:
            pollutants = response["list"][0]["components"]

            # Calculate AQI with if-else logic
            if pollutants:
                aqi_index = calculate_aqi(pollutants)
                return aqi_index
            else:
                print("No pollution data available.")
            # aqi_value = response["list"][0]["main"]["aqi"]  # Fetch AQI directly
            # return f"AQI Index: {aqi_value}"
        return None 
    
    except Exception:
        return "Error fetching air quality data."
    

# Function to fetch weather data (temperature, rainfall) from OpenWeatherMap
def get_weather(region):
    location = next((loc for loc in MUMBAI_LOCATIONS if region.lower() in loc.lower()), None)
    if not location:
        return None

    lat, lon = MUMBAI_LOCATIONS[location]
    api_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
    
    try:
        response = requests.get(api_url).json()
        return {
            "temperature": response["main"]["temp"],
            "humidity": response["main"]["humidity"],
            "rainfall": response.get("rain", {}).get("1h", 0)
        }
    except:
        return None
    
# Function to fetch traffic congestion data from OpenStreetMap Overpass API
def get_traffic_congestion(region):
    query = f"""
    [out:json];
    area[name="{region}"]->.searchArea;
    way[highway](area.searchArea);
    out count;
    """
    osm_url = "https://overpass-api.de/api/interpreter"
    try:
        response = requests.get(osm_url, params={"data": query}).json()
        return response["elements"][0]["tags"]["highway"] if response["elements"] else "Unknown"
    except:
        return "Error fetching traffic data"
    
def get_population_density(region):
    df_filtered = df.iloc[:, :3]
    # Filter out rows where the second column (year) is 2023
    df_filtered = df_filtered[df_filtered.iloc[:, 1] == 2023]
    row = df_filtered[df_filtered['Region'].str.strip() == region]
    population = row['Total Population'].iloc[0] if not row.empty else None
    # if not row.empty:
    #     return row.iloc[0]["Population Density (people/sq. km)"]
    return population

# Function to generate AI insights for the specified Mumbai region
def generate_ai_insights(region):
    pollution_data = get_air_quality(region)
    weather_data = get_weather(region)
    traffic_data = get_traffic_congestion(region)
    population_data = get_population_density(region)

# Function to generate AI insights for the specified Mumbai region
def generate_ai_insights(region):
    pollution_data = get_air_quality(region)
    weather_data = get_weather(region)
    traffic_data = get_traffic_congestion(region)
    population_data = get_population_density(region)

    prompt = f"""
    You are an AI urban planner specializing in Mumbai. 
    Just provide actionable insights with concrete numbers and recommendations.

    Based on the data provided for the {region}, here are the urban planning insights:

    Traffic & Transportation:
    - Average Speed (km/h): {traffic_data}
    - Peak Congestion Time: Provide {region} specific time based on traffic trends
    - Major Congestion Points: Identify key locations in {region}
    - Solutions: Recommend solutions specific to {region} to improve traffic flow

    Energy Consumption & Sustainability:
    - Per Capita Energy (kWh): Provide {region} specific number according to you
    - Renewable Energy (%): Provide {region} specific percentage according to you
    - Solar Feasibility: Analyze solar energy potential for {region} according to you
    - Energy Wastage Reduction: Provide strategies to reduce wastage in {region} according to you

    Environmental Impact:
    - Air Pollution (AQI): {pollution_data}
    - Noise Pollution (dB): Provide {region} specific noise pollution level according to you
    - Temperature: {weather_data}°C
    - Green Cover (%): Provide the percentage of green cover in {region} according to you
    - Sustainability Strategies: Suggest actionable sustainability strategies for {region} according to you

    Demographics & Infrastructure Needs:
    - Population Density (people/sq. km): {population_data}
    - Hospitals Needed: Estimate the number of hospitals required for {region} (0-5) according to you
    - Schools Needed: Estimate the number of schools required for {region} (0-5) according to you
    - Infrastructure Improvements: Suggest infrastructure improvements for {region} based on population and traffic density according to you

    Provide **direct and actionable** recommendations based on the above data.
    """


    messages = [
        {'role': 'system', 'content': "Provide structured, data-driven urban planning insights for Mumbai with concrete."},
        {'role': 'user', 'content': prompt},
    ]

    completion = client.chat.completions.create(
        model="deepseek-r1-distill-llama-70b",
        messages=messages,
        temperature=0.1,
        max_tokens=2000,
        top_p=1,
        stream=False,
    )

    return completion.choices[0].message.content.strip()

# Accepts user input for any Mumbai region
def process_region():
    region = input("Enter a region in Mumbai: ").strip()  # Takes input from the user
    if not region:
        print("Error: Region cannot be empty.")
        return
    
    insights = generate_ai_insights(region)
    
    print(f"\nUrban Planning Insights for {region}:")
    clean_response = re.sub(r"<think>.*?</think>", "", insights, flags=re.DOTALL).strip()
    print(clean_response)



# Run the function to take user input
process_region()

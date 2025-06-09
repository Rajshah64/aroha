# अroha - Smart City Analytics Platform

## Overview

**अroha** (Finding your Horizon) is a comprehensive smart city analytics platform designed to provide data-driven insights for urban planning and management in Mumbai and surrounding areas. The platform combines real-time data analysis, predictive modeling, and AI-powered recommendations to help city planners, government officials, and citizens make informed decisions about urban development.

## Features

### Demographic Analysis

- Population distribution and density mapping
- Age, gender, and socioeconomic demographic insights
- Regional population trends and projections

### Traffic Optimization

- Real-time traffic congestion monitoring
- Traffic emission tracking and analysis
- Route optimization recommendations
- Peak hour traffic pattern analysis

### Energy Consumption Monitoring

- Electricity usage tracking by region
- Fuel consumption analysis
- Energy efficiency recommendations
- Renewable energy potential assessment

### Environmental Impact Assessment

- Air Quality Index (AQI) monitoring using real-time API data
- Green coverage percentage analysis
- Pollution source identification
- Environmental sustainability metrics

### AI-Powered Insights

- Intelligent recommendations using Groq AI
- Predictive analytics for urban planning
- Smart data interpretation and visualization
- Automated report generation

### News & Information Hub

- Latest updates on city development
- Policy changes and announcements
- Community feedback integration

## Tech Stack

### Frontend

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS + Tailwind Animate
- **UI Components**: Radix UI + Custom Components
- **Charts & Visualization**: Recharts, React Google Charts
- **Authentication**: Clerk
- **Animations**: Framer Motion
- **State Management**: React Hooks

### Backend

- **Runtime**: Python Flask
- **AI/ML**: Groq AI API
- **Data Processing**: Pandas, NumPy
- **Visualization**: Plotly
- **APIs**: OpenWeatherMap API
- **CORS**: Flask-CORS

### Data & APIs

- **Weather Data**: OpenWeatherMap API
- **AI Processing**: Groq API
- **Maps**: Leaflet with React-Leaflet
- **Data Storage**: JSON files, CSV datasets

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.8+
- npm or yarn
- Git

### Environment Variables

Create the following environment files:

#### Client (.env.local)

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

#### Server

Update API keys in `server/Backend/Server2.py` and `server/Backend/reccomendation3.py`:

```python
# Groq AI API Key
client = Groq(api_key="your_groq_api_key")

# OpenWeatherMap API Key
API_KEY = "your_openweathermap_api_key"
```

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd landing-page
```

2. **Install Client Dependencies**

```bash
cd client
npm install
```

3. **Install Server Dependencies**

```bash
cd ../server/Backend
pip install flask flask-cors groq requests pandas numpy plotly
```

### Running the Application

1. **Start the Backend Server**

```bash
cd server/Backend
python Server.py
```

The server will run on `http://localhost:5251`

2. **Start the Frontend (in a new terminal)**

```bash
cd client
npm run dev
```

The client will run on `http://localhost:3000`

## API Endpoints

### Data Endpoints

- `GET /charts` - Retrieve chart data
- `GET /population` - Get demographic data
- `GET /graphs` - Fetch radar graph data
- `GET /api/radar-graph?region={region}` - Get region-specific radar data

### AI & Insights

- `POST /api/generate-insights` - Generate AI-powered insights for regions

## Project Structure

```
landing-page/
├── client/                     # Next.js Frontend
│   ├── app/                   # App Router pages
│   │   ├── dashboard/         # Dashboard pages
│   │   └── page.tsx          # Landing page
│   ├── components/           # Reusable UI components
│   ├── lib/                  # Utility functions
│   ├── hooks/                # Custom React hooks
│   ├── styles/               # Global styles
│   └── public/               # Static assets
├── server/                    # Python Backend
│   └── Backend/              # Flask API server
│       ├── Server.py         # Main API server
│       ├── Server2.py        # AI insights server
│       ├── reccomendation3.py # Recommendation engine
│       ├── *.json           # Data files
│       └── *.csv            # Datasets
└── README.md                 # Project documentation
```

## Supported Regions

The platform supports 70+ Mumbai regions including:

- **North Mumbai**: Dahanu, Palghar, Virar, Vasai, Nalasopara
- **Western Suburbs**: Borivali, Kandivali, Malad, Andheri, Bandra
- **Central Mumbai**: Dadar, Worli, Sion, Kurla, Mulund, Thane
- **South Mumbai**: Colaba, Marine Lines, Lower Parel, Worli
- **Extended Areas**: Kalyan, Dombivli, Panvel, Navi Mumbai

## Data Sources

- **Real-time Weather**: OpenWeatherMap API
- **Traffic Data**: Custom algorithms and pattern analysis
- **Demographics**: Census data and regional statistics
- **Energy Data**: Government energy consumption reports
- **Environmental Data**: Air quality monitoring stations

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [Live Demo](#) <!-- Add your deployed URL here -->
- [API Documentation](#) <!-- Add API docs link -->
- [Project Presentation](#) <!-- Add presentation link -->

## Team

Built for smart city planning and urban development initiatives.

---

**अroha** - Finding your Horizon

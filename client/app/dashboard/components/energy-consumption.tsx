"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const MUMBAI_COLOR = "#4c1d95";
const INDIA_COLOR = "#FFBB28";

// Hardcoded Data for Charts

// Comparative Bar Chart Data (Installed Capacity - Mumbai vs India)
const comparativeBarChartData = [
  { name: "Coal", Mumbai: 150, India: 3000 },
  { name: "Gas", Mumbai: 100, India: 2500 },
  { name: "Renewable", Mumbai: 50, India: 1500 },
  { name: "Nuclear", Mumbai: 30, India: 700 },
];

// Concentric Pie Chart Data (Energy Distribution - Mumbai vs India)
const pieChartDataMumbai = [
  { name: "Residential", value: 400 },
  { name: "Commercial", value: 300 },
  { name: "Industrial", value: 200 },
  { name: "Others", value: 100 },
];

const pieChartDataIndia = [
  { name: "Residential", value: 600 },
  { name: "Commercial", value: 500 },
  { name: "Industrial", value: 300 },
  { name: "Others", value: 150 },
];

// Line Chart Data (AQI Comparison - Mumbai vs India)
const aqiLineChartData = [
  { name: "Jan", Mumbai: 160, India: 210 },
  { name: "Feb", Mumbai: 215, India: 175 },
  { name: "Mar", Mumbai: 190, India: 180 },
  { name: "Apr", Mumbai: 175, India: 185 },
  { name: "May", Mumbai: 120, India: 170 },
];

// Stacked Area Chart Data (Economic Trends - Mumbai vs India)
const economicStackedData = [
  { name: "2018", Mumbai: 100, India: 120 },
  { name: "2019", Mumbai: 110, India: 130 },
  { name: "2020", Mumbai: 90, India: 125 },
  { name: "2021", Mumbai: 95, India: 140 },
  { name: "2022", Mumbai: 105, India: 150 },
];

export function EnergyConsumption() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Energy Consumption Analysis</h2>

      {/* Comparative Bar Chart (Mumbai vs India) */}
      <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white">
        <CardHeader>
          <CardTitle>Installed Capacity - Mumbai vs India</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparativeBarChartData}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Mumbai" fill={MUMBAI_COLOR} name="Mumbai" />
              <Bar dataKey="India" fill={INDIA_COLOR} name="India" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Concentric Pie Chart */}
      <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white">
        <CardHeader>
          <CardTitle>Energy Consumption - Mumbai vs India</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip formatter={(value) => `${value}`} />
              <Pie
                data={pieChartDataMumbai}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                fill={MUMBAI_COLOR}
              >
                {pieChartDataMumbai.map((entry, index) => (
                  <Cell key={`cell-mumbai-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Pie
                data={pieChartDataIndia}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={85}
                outerRadius={120}
                fill={INDIA_COLOR}
              >
                {pieChartDataIndia.map((entry, index) => (
                  <Cell key={`cell-india-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Line Chart (AQI Comparison) */}
      <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white">
        <CardHeader>
          <CardTitle>Air Quality Index (AQI) - Mumbai vs India</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={aqiLineChartData}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Mumbai" stroke={MUMBAI_COLOR} name="Mumbai" />
              <Line type="monotone" dataKey="India" stroke={INDIA_COLOR} name="India" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Stacked Area Chart (Economic Trends) */}
      <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white">
        <CardHeader>
          <CardTitle>Economic Trends - Mumbai vs India</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={economicStackedData} stackOffset="expand">
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="Mumbai" stackId="1" stroke={MUMBAI_COLOR} fill={MUMBAI_COLOR} />
              <Area type="monotone" dataKey="India" stackId="1" stroke={INDIA_COLOR} fill={INDIA_COLOR} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

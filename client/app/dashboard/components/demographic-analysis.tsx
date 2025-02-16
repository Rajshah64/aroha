"use client";

import { useEffect, useState } from "react";
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
} from "recharts";

interface PopulationData {
  name: string;
  value: number;
}

interface GenderDistribution {
  labels: string[];
  values: number[];
}

interface DemographicData {
  population_distribution: {
    data: Array<{
      x: string[];
      y: number[];
    }>;
  };
  gender_distribution: {
    data: Array<GenderDistribution>;
  };
}

export default function DemographicAnalysis({
  demographicData,
}: {
  demographicData: DemographicData;
}) {
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);
  const [genderData, setGenderData] = useState<
    { name: string; value: number }[]
  >([]);

  useEffect(() => {
    // Load population data
    const data = demographicData.population_distribution.data[0];
    const transformedData = data.x.map((name, index) => ({
      name,
      value: data.y[index],
    }));
    setPopulationData(transformedData);

    // Load gender distribution data
    const gender = demographicData.gender_distribution.data[0];
    const transformedGenderData = gender.labels.map((label, index) => ({
      name: label,
      value: gender.values[index],
    }));
    setGenderData(transformedGenderData);
  }, [demographicData]);

  const COLORS = ["#4c1d95", "#2563eb"];

  // Custom Tooltip to fix white box issue
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 text-white p-2 rounded shadow-md">
          <p className="font-semibold">{label}</p>
          <p>{`Population: ${payload[0].value.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-2">Demographic Analysis</h2>

      <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white">
        <CardHeader>
          <CardTitle>Population Distribution by Ward</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={populationData}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
              />
              <Bar dataKey="value" fill="url(#colorGradient)" />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4c1d95" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white">
        <CardHeader>
          <CardTitle>Gender Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {genderData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export async function getStaticProps() {
  const data = await import("../../../../server/Backend/population_data.json");
  return {
    props: {
      demographicData: data.default,
    },
  };
}

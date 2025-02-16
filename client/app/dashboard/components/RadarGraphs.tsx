"use client";

import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

interface RadarData {
  theta: string;
  actual: number;
  predicted: number;
}

const regions = [
  "Alibaug", "Ambarnath", "Andheri East", "Andheri West", "Badlapur", "Balkum", "Bandra East", "Bandra West",
  "Bhandup", "Bhayandar", "Bhiwandi", "Boisar", "Borivali East", "Borivali West", "Byculla", "Charni Road",
  "Chembur", "Chunabhatti", "Colaba", "Cotton Green", "Cuffe Parade", "Dadar", "Dadar East", "Dadar West",
  "Dahanu", "Dahisar", "Dockyard Road", "Dombivli", "Elphinstone", "Ghodbunder", "Girgaon", "Ghatkopar",
  "Grant Road", "Goregaon East", "Goregaon West", "Hiranandani Estate", "Jogeshwari East", "Jogeshwari West",
  "Juhu", "Kalwa", "Kalyan", "Kandivali East", "Kandivali West", "Kanjurmarg", "Karjat", "King Circle",
  "Khopoli", "Kolshet", "Kurla", "Lower Parel", "Mahim", "Mahalaxmi", "Malad East", "Malad West", "Manpada",
  "Marine Lines", "Matunga", "Matheran", "Mazgaon", "Mulund", "Mumbai Central", "Mumbra", "Murud", "Nahur",
  "Nalasopara", "Owale", "Panvel", "Parel", "Pen", "Powai", "Prabhadevi", "Reay Road", "Sandhurst Road",
  "Santacruz", "Sewri", "Shahapur", "Sion", "Sion East", "Sion West", "Tardeo", "Thane", "Ulhasnagar",
  "Vasai", "Versova", "Vidyavihar", "Vikhroli", "Vile Parle", "Virar", "Wadala", "Worli"
].sort();

const RadarGraphs = () => {
  const [graphData, setGraphData] = useState<RadarData[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loadingRegion, setLoadingRegion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRegions, setFilteredRegions] = useState<string[]>(regions);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchGraphData = async (region: string) => {
    try {
      setLoadingRegion(region);
      const response = await fetch(`http://localhost:5251/api/radar-graph?region=${region}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const transformedData = data.labels.map((name: string, index: number) => ({
        theta: name,
        actual: data.actual_values[index],
        predicted: data.predicted_values[index]
      }));
      setGraphData(transformedData);
    } catch (error) {
      console.error("Error fetching radar graph data:", error);
    } finally {
      setLoadingRegion("");
    }
  };

  const handleViewGraph = (region: string) => {
    if (selectedRegion === region) {
      setSelectedRegion("");
      setGraphData([]);
    } else {
      setSelectedRegion(region);
      fetchGraphData(region);
      setIsModalOpen(true);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = regions.filter((region) =>
      region.toLowerCase().includes(query)
    );
    setFilteredRegions(filtered);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRegion("");
    setGraphData([]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Comparison Graphs by Region
      </h2>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Region..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-3 rounded-md w-80 text-black"
        />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRegions.map((region, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{region}</span>
              <button
                onClick={() => handleViewGraph(region)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md"
              >
                {selectedRegion === region ? "Hide Graph" : "View Graph"}
              </button>
            </div>

            {loadingRegion === region && (
              <p className="text-blue-300 mt-2">Loading...</p>
            )}
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative w-11/12 lg:w-8/12">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            >
              Close
            </button>
            <h2 className="text-2xl mb-4 text-center">{selectedRegion} - Comparison Graph</h2>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="theta" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip wrapperStyle={{ color: "#000" }} />
                <Legend />
                <Bar dataKey="actual" fill="#4CAF50" />
                <Bar dataKey="predicted" fill="#2196F3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default RadarGraphs;

// "use client";

// import { useState, useEffect } from "react";
// import {
//   ResponsiveContainer,
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   Tooltip,
//   Legend
// } from "recharts";

// interface RadarData {
//   theta: string;
//   actual: number;
//   predicted: number;
// }

// const regions = [
//   "Alibaug", "Ambarnath", "Andheri East", "Andheri West", "Badlapur", "Balkum", "Bandra East", "Bandra West",
//   "Bhandup", "Bhayandar", "Bhiwandi", "Boisar", "Borivali East", "Borivali West", "Byculla", "Charni Road",
//   "Chembur", "Chunabhatti", "Colaba", "Cotton Green", "Cuffe Parade", "Dadar", "Dadar East", "Dadar West",
//   "Dahanu", "Dahisar", "Dockyard Road", "Dombivli", "Elphinstone", "Ghodbunder", "Girgaon", "Ghatkopar",
//   "Grant Road", "Goregaon East", "Goregaon West", "Hiranandani Estate", "Jogeshwari East", "Jogeshwari West",
//   "Juhu", "Kalwa", "Kalyan", "Kandivali East", "Kandivali West", "Kanjurmarg", "Karjat", "King Circle",
//   "Khopoli", "Kolshet", "Kurla", "Lower Parel", "Mahim", "Mahalaxmi", "Malad East", "Malad West", "Manpada",
//   "Marine Lines", "Matunga", "Matheran", "Mazgaon", "Mulund", "Mumbai Central", "Mumbra", "Murud", "Nahur",
//   "Nalasopara", "Owale", "Panvel", "Parel", "Pen", "Powai", "Prabhadevi", "Reay Road", "Sandhurst Road",
//   "Santacruz", "Sewri", "Shahapur", "Sion", "Sion East", "Sion West", "Tardeo", "Thane", "Ulhasnagar",
//   "Vasai", "Versova", "Vidyavihar", "Vikhroli", "Vile Parle", "Virar", "Wadala", "Worli"
// ].sort(); 

// const RadarGraphs = () => {
//   const [graphData, setGraphData] = useState<RadarData[]>([]);
//   const [selectedRegion, setSelectedRegion] = useState("");
//   const [loadingRegion, setLoadingRegion] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredRegions, setFilteredRegions] = useState<string[]>(regions);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const fetchGraphData = async (region: string) => {
//     try {
//       setLoadingRegion(region);
//       const response = await fetch(`http://localhost:5251/api/radar-graph?region=${region}`);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       const transformedData = data.labels.map((name: string, index: number) => ({
//         theta: name,
//         actual: data.actual_values[index],
//         predicted: data.predicted_values[index]
//       }));
//       setGraphData(transformedData);
//     } catch (error) {
//       console.error("Error fetching radar graph data:", error);
//     } finally {
//       setLoadingRegion("");
//     }
//   };

//   const handleViewGraph = (region: string) => {
//     if (selectedRegion === region) {
//       setSelectedRegion("");
//       setGraphData([]);
//     } else {
//       setSelectedRegion(region);
//       fetchGraphData(region);
//       setIsModalOpen(true);
//     }
//   };

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = regions.filter((region) =>
//       region.toLowerCase().includes(query)
//     );
//     setFilteredRegions(filtered);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedRegion("");
//     setGraphData([]);
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//         Radar Graphs by Region
//       </h2>

//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search Region..."
//           value={searchQuery}
//           onChange={handleSearch}
//           className="p-3 rounded-md w-80 text-black"
//         />
//       </div>

//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredRegions.map((region, index) => (
//           <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
//             <div className="flex justify-between items-center">
//               <span className="text-lg font-semibold">{region}</span>
//               <button
//                 onClick={() => handleViewGraph(region)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md"
//               >
//                 {selectedRegion === region ? "Hide Graph" : "View Graph"}
//               </button>
//             </div>

//             {loadingRegion === region && (
//               <p className="text-blue-300 mt-2">Loading...</p>
//             )}
//           </li>
//         ))}
//       </ul>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative w-11/12 lg:w-8/12">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
//             >
//               Close
//             </button>
//             <h2 className="text-2xl mb-4 text-center">{selectedRegion} - Radar Graph</h2>
//             <ResponsiveContainer width="100%" height={500}>
//               <RadarChart data={graphData}>
//                 <PolarGrid stroke="#ccc" />
//                 <PolarAngleAxis dataKey="theta" stroke="#fff" />
//                 <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} stroke="#fff" />
//                 <Radar 
//                   name="Actual" 
//                   dataKey="actual" 
//                   stroke="rgba(0, 255, 0, 1)" 
//                   fill="rgba(0, 255, 0, 0.4)" 
//                   fillOpacity={0.4} 
//                   animationBegin={300} 
//                   animationDuration={800}
//                 />
//                 <Radar 
//                   name="Predicted" 
//                   dataKey="predicted" 
//                   stroke="rgba(0, 0, 255, 1)" 
//                   fill="rgba(0, 0, 255, 0.4)" 
//                   fillOpacity={0.4} 
//                   animationBegin={500} 
//                   animationDuration={800}
//                 />
//                 <Tooltip wrapperStyle={{ color: "#000" }} />
//                 <Legend />
//               </RadarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RadarGraphs;


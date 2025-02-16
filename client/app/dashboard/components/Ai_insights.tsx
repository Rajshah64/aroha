// "use client";

// import { useState } from 'react';

// const Insights = () => {
//   const [city, setCity] = useState('');
//   const [insights, setInsights] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Function to Fetch Insights from Flask API
//   const fetchInsights = async () => {
//     if (!city) {
//       setError('Please enter a city name.');
//       return;
//     }
  
//     setLoading(true);
//     setError('');
//     setInsights('');
  
//     try {
//       const response = await fetch('http://localhost:5000/api/generate-insights', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ query: city })
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to get insights.");
//       }
  
//       if (!data.insights) {
//         throw new Error("No insights found in response.");
//       }
  
//       setInsights(data.insights); // Don't stringify, just store raw text

//     } catch (err) {
//       console.error("Fetch Error:", err);
//       setError(err.message || "An unknown error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4">
//       <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
//         AI-Powered City Insights
//       </h1>

//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter City Name"
//         className="p-3 rounded-md w-80 text-black mb-4"
//       />

//       <button
//         onClick={fetchInsights}
//         className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-300"
//         disabled={loading}
//       >
//         {loading ? 'Loading...' : 'Get Insights'}
//       </button>

//       {loading && (
//         <div className="flex justify-center items-center mt-4">
//           {/* Spinner */}
//           <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-green-400"></div>
//         </div>
//       )}

//       {error && <p className="text-red-400 mt-4">{error}</p>}

//       {insights && (
//         <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-6 w-11/12 lg:w-8/12 overflow-auto">
//           <pre className="whitespace-pre-line text-green-400">{insights}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Insights;
// "use client";

// import { useState } from 'react';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// const Insights = () => {
//   const [city, setCity] = useState('');
//   const [insights, setInsights] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Function to Fetch Insights from Flask API
//   const fetchInsights = async () => {
//     if (!city) {
//       setError('Please enter a city name.');
//       return;
//     }
  
//     setLoading(true);
//     setError('');
//     setInsights('');
  
//     try {
//       const response = await fetch('http://localhost:5000/api/generate-insights', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ query: city })
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to get insights.");
//       }
  
//       if (!data.insights) {
//         throw new Error("No insights found in response.");
//       }
  
//       setInsights(data.insights);

//     } catch (err) {
//       console.error("Fetch Error:", err);
//       setError(err.message || "An unknown error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white p-4">
//       <h1 className="text-4xl font-bold mb-6 text-white">
//         AI-Powered City Insights
//       </h1>

//       <div className="flex gap-2 w-full max-w-md">
//         <Input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name (e.g., Andheri)"
//           className="p-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-blue-500 w-full"
//         />
//         <Button
//           onClick={fetchInsights}
//           className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-md transition duration-300"
//           disabled={loading}
//         >
//           {loading ? 'Loading...' : 'Search'}
//         </Button>
//       </div>

//       {loading && (
//         <div className="flex justify-center items-center mt-4">
//           <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-400"></div>
//         </div>
//       )}

//       {error && <p className="text-red-400 mt-4">{error}</p>}

//       {insights && (
//         <Card className="bg-gray-800 p-4 rounded-lg shadow-md mt-6 w-11/12 lg:w-8/12 overflow-auto">
//           <CardContent>
//             <pre className="whitespace-pre-line text-blue-400">{insights}</pre>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default Insights;

"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Insights = () => {
  const [city, setCity] = useState("");
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to Fetch Insights from Flask API
  const fetchInsights = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setInsights("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/generate-insights",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: city }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get insights.");
      }

      if (!data.insights) {
        throw new Error("No insights found in response.");
      }

      setInsights(data.insights);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-white items-center p-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mt-8 text-center text-blue-400">
        AI - Powered Insights
      </h1>

      {/* Search Bar */}
      <div className="flex gap-2 w-full max-w-md mt-6">
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name (e.g., Andheri)"
          className="p-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-blue-500 w-full"
        />
        <Button
          onClick={fetchInsights}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-md transition duration-300"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </Button>
      </div>

      {/* Display Insights and Loading/Error States */}
      <div className="flex flex-col items-center justify-center flex-grow w-full mt-6">
        {loading && (
          <div className="flex justify-center items-center mt-4">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-400"></div>
          </div>
        )}

        {error && <p className="text-red-400 mt-4">{error}</p>}

        {insights && (
          <Card className="bg-gray-800 p-4 rounded-lg shadow-md mt-6 w-11/12 lg:w-8/12 overflow-auto">
            <CardContent>
              <pre className="whitespace-pre-line text-blue-400">{insights}</pre>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Insights;

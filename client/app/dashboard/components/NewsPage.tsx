// import { useState, FormEvent, ChangeEvent } from 'react';
// import axios from 'axios';

// const NEWS_API_KEY = 'pub_697250a7137392bf26a984041e3cd4dda70fd'; // Replace with your NewsData.io API key

// // Define the type for a single news item
// interface NewsItem {
//   title: string;
//   description: string;
//   link: string;
// }

// const NewsPage = () => {
//   const [newsData, setNewsData] = useState<NewsItem[]>([]);
//   const [region, setRegion] = useState<string>('');

//   // Fetch news data based on the region query
//   const fetchNews = async (query: string) => {
//     try {
//       const response = await axios.get(
//         `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q=${query}`
//       );
//       if (response.data.status === 'success') {
//         setNewsData(response.data.results);
//       } else {
//         setNewsData([]);
//         console.error('No news found for this region.');
//       }
//     } catch (error) {
//       console.error('Error fetching news:', error);
//     }
//   };

//   // Handle the form submission
//   const handleSearch = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     fetchNews(region);
//   };

//   // Handle input change
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setRegion(e.target.value);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="container mx-auto py-10">
//         <h1 className="text-4xl font-bold text-center mb-6">Real-Time News Updates</h1>

//         <form onSubmit={handleSearch} className="flex justify-center mb-10">
//           <input
//             type="text"
//             placeholder="Enter region (e.g., Andheri)"
//             value={region}
//             onChange={handleInputChange}
//             className="p-3 rounded-l-md w-80 text-black"
//             required
//           />
//           <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-r-md">
//             Search
//           </button>
//         </form>

//         {newsData.length === 0 ? (
//           <p className="text-center">No news available for this region.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {newsData.map((news, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
//                 <p className="text-gray-400">{news.description}</p>
//                 <button
//                   onClick={() => window.open(news.link, '_blank')}
//                   className="mt-4 text-blue-400 hover:text-blue-600"
//                 >
//                   Read More
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsPage;

import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

const NEWS_API_KEY = "pub_697250a7137392bf26a984041e3cd4dda70fd"; // Replace with your NewsData.io API key

// Define the type for a single news item
interface NewsItem {
  title: string;
  description: string;
  link: string;
}

const NewsPage = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [region, setRegion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Fetch news data based on the region query
  const fetchNews = async (query: string) => {
    setLoading(true);
    setError("");
    setNewsData([]);

    try {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q=${query}`
      );

      if (response.data.status === "success" && response.data.results.length > 0) {
        setNewsData(response.data.results);
      } else {
        setError("No news found for this region.");
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to fetch news. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle the form submission
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (region.trim() === "") {
      setError("Please enter a valid region.");
      return;
    }
    fetchNews(region);
  };

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-white items-center p-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mt-8 text-center text-blue-400">
        Real-Time News Updates
      </h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-3 w-full max-w-lg mt-6">
        <input
          type="text"
          placeholder="Enter region (e.g., Andheri)"
          value={region}
          onChange={handleInputChange}
          className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Loading / Error Message */}
      <div className="flex flex-col items-center justify-center flex-grow w-full mt-6">
        {loading && (
          <div className="flex justify-center items-center mt-4">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-400"></div>
          </div>
        )}

        {error && <p className="text-red-400 mt-4">{error}</p>}

        {/* News Display */}
        {newsData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-6xl">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                  {news.title}
                </h3>
                <p className="text-gray-400">{news.description}</p>
                <button
                  onClick={() => window.open(news.link, "_blank")}
                  className="mt-4 text-blue-400 hover:text-blue-500 transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;


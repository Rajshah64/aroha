import { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';

const NEWS_API_KEY = 'pub_697250a7137392bf26a984041e3cd4dda70fd'; // Replace with your NewsData.io API key

// Define the type for a single news item
interface NewsItem {
  title: string;
  description: string;
  link: string;
}

const NewsPage = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [region, setRegion] = useState<string>('');

  // Fetch news data based on the region query
  const fetchNews = async (query: string) => {
    try {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q=${query}`
      );
      if (response.data.status === 'success') {
        setNewsData(response.data.results);
      } else {
        setNewsData([]);
        console.error('No news found for this region.');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  // Handle the form submission
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchNews(region);
  };

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Real-Time News Updates</h1>

        <form onSubmit={handleSearch} className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Enter region (e.g., Andheri)"
            value={region}
            onChange={handleInputChange}
            className="p-3 rounded-l-md w-80 text-black"
            required
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-r-md">
            Search
          </button>
        </form>

        {newsData.length === 0 ? (
          <p className="text-center">No news available for this region.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-400">{news.description}</p>
                <button
                  onClick={() => window.open(news.link, '_blank')}
                  className="mt-4 text-blue-400 hover:text-blue-600"
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

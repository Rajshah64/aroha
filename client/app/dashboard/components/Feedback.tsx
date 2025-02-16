import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import reviews from "../../../../server/Backend/review.json"; // Ensure the JSON is in the public folder or adjust the path accordingly

// Define the TypeScript type for a review
interface Review {
  region: string;
  comment: string;
}

const Feedback = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredReviews([]);
    } else {
      const filtered = reviews.filter((review: Review) =>
        review.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredReviews(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#1f2937] p-4 text-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-100">City Feedbacks</h1>

      <input
        type="text"
        placeholder="Enter City Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 p-2 rounded-lg shadow-md mb-6 bg-[#374151] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />

      <div className="w-full md:w-2/3 space-y-4">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827] p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-700"
            >
              <h2 className="text-xl font-semibold text-gray-100">
                {review.region}
              </h2>
              <p className="text-gray-400">{review.comment}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500">No feedbacks found for this city.</p>
        )}
      </div>
    </div>
  );
};

export default Feedback;

import React, { useEffect, useRef, useState } from 'react'
import ResCard from '../ResponseCard/ResCard'
import axios from 'axios';

const ResHistory = () => {
  const [allResponses, setAllResponses] = useState([]);
  const [visibleResponses, setVisibleResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(20);

  const loaderRef = useRef(null);

  // Fetch all responses initially
  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/ai-res/responseHistory");
        setAllResponses(data);
        setVisibleResponses(data.slice(0, itemsToShow));
      } catch (error) {
        console.error("Error fetching responses:", error);
      }
    };

    fetchResponses();
  }, []);

  // Load more responses when `itemsToShow` changes
  useEffect(() => {
    setVisibleResponses(allResponses.slice(0, itemsToShow));
  }, [itemsToShow, allResponses]);

  // Load more items
  const loadMoreItems = () => {
    if (loading) return; 

    setLoading(true);
    setTimeout(() => {
      setItemsToShow((prev) => prev + 20); 
      setLoading(false);
    }, 1000); 
  };

  return (
    <div className="res-history mt-5 flex flex-col gap-5 overflow-y-scroll items-center justify-center max-h-[100vh] w-full">
      <h1>Response History</h1>
      <ul className='h-[80vh] mt-5 overflow-scroll flex flex-col '>
        {visibleResponses.length === 0 ? (
          <p className="text-center text-gray-500">No response yet</p>
        ) : (
          visibleResponses.map((response, index) => (
            <li key={response._id || index} className="mb-4 border p-4 rounded-lg shadow">
              {/* <p><strong>Prompt:</strong> {response.prompt}</p>
      <p><strong>Response:</strong> {response.response}</p> */}
              <ResCard response={response.response} prompt={response.prompt} />
            </li>
          ))
        )}
        {itemsToShow < allResponses.length && (
          <button
            onClick={loadMoreItems}
            className="bg-black w-fit text-white px-6 py-2 rounded shadow mt-4 transition-all duration-300 hover:bg-gray-900"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </ul>
    </div>
  );
};


export default ResHistory






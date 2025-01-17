import React, { useState } from 'react'

const ResCard = ({ response, prompt }) => {
  const [maxheight, setMaxheight] = useState(false);
  console.log(maxheight)
  return (
    <>
      <div
        className={`res-card flex flex-col response-text transition-all duration-300 w-[60vw] overflow-hidden ${maxheight ? "max-h-[600px] overflow-scroll" : "max-h-[10vh]"}`}
        onClick={() => setMaxheight(!maxheight)}
      >
        <p className='prompt font-semibold'> Your Thought : {prompt}</p>
        <p className='border p-4 rounded-lg mt-3 '>
        <strong className='font-semibold'>Our Idea</strong> : {response}
        </p>
      </div>
    </>
  )
}

export default ResCard

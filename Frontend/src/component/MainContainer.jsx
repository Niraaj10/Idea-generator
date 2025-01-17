import React from 'react'
import ResGenerator from './ResponseGenerator/ResGenerator'
import ResHistory from './ResponseHistory/ResHistory'

const MainContainer = () => {
  return (
    <div className='main-container w-full h-screen flex flex-col items-center justify-center '> 
      {/* Main-Container */}
      <h1 className='text-5xl font-extrabold m-10'>Ignite Your Creativity with AI Ideas</h1>
      <ResGenerator />
      {/* <ResHistory /> */}
    </div>
  )
}

export default MainContainer

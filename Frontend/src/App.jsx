import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div id='main-Cont' className={`w-full h-screen flex flex-col justify-center  items-center ${
        isLoaded ? "blur-effect" : ""
      } transition-all duration-200`}>
        {/* <h1 >Idea-Generator</h1> */}
        
        <Outlet />
        {/* <MainContainer /> */}
      </div>
    </>
  )
}

export default App




import React, { useEffect, useState } from 'react'

const LandingPage = () => {
    const [slideUp, setSlideUp] = useState(false); 
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideUp(true);
        }, 3000); 

        return () => clearTimeout(timer); 
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 1000);

        return () => clearTimeout(timer); 
    }, []);

  return (
    <div className={`landing-page bg-white w-[100vw] h-[100vh] flex justify-center items-center shadow-xl border-black absolute top-0 left-0 transition-transform duration-1000 ease-in-out ${slideUp ? "translate-y-[-100%]" : ""}`}>
      <h1  className={`text-[10vw] font-extrabold text-black transition-opacity duration-1000 ease-in-out ${fadeIn ? "opacity-100" : "opacity-0"}`} >Idea-Generator </h1>
    </div>
  )
}

export default LandingPage



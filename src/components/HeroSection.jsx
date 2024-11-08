import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

import React from 'react'


const HeroSection = () => {
  return (
    <>
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center tracking-wide">VirtualR build tools 
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">{" "}for developer</span></h1>
            <p className="mt-10 text-center text-lg text-neutral-500 max-w-4x">Empower your creativity and bring your VR app ideas to life with our intuitive developement tools.Get started today and turn your imagination with immersive reality  </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-pink-600 py-3 px-4 mx-4 rounded-md">Start for free</a>
                <a href="#" className="py-3 px-4 mx-4 rounded-md border">Documentation</a>
            </div>
            <div className="mt-10 justify-center flex">
                <video autoPlay muted loop className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay muted loop className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    </>
  )
}

export default HeroSection
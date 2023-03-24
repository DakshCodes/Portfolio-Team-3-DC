import React from "react";




function Contect(){
    return(
    <section classNameName="relative w-full min-h-screen ">
            <h1 className="text-4xl p-4 font-bold tracking-wide">
                Query
            </h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffff] h-32 w-full"></div>
            
            
            <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
            
                
                <div className="w-full md:w-1/2 p-5 md:px-0 mx-5 ">
                <div className="bg-[#ccc]  border-2  w-full lg:w-1/2 h-full p-5 pt-8">
                    <h3 className="text-2xl font-semibold mb-5">
                    My Social Media
                    </h3>
                    
                    <div className="flex flex-col gap-2">
                    <a id="git" href="#" className="flex items-center  hover:text-white hover:bg-[#453C67] p-2">
                        <svg fill="currentColor" className="w-7 h-6 m-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Github
                    </a>
                    <a id="link" href="#" className="flex items-center hover:text-white hover:bg-[#453C67] p-2">
                        <svg fill="currentColor" className="w-6 h-6 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"/>
                        </svg>
                        Linkedin
                    </a>
                    <a id="you" href="#" className="flex items-center hover:text-white hover:bg-[#453C67] p-2">
                        <svg fill="currentColor" className="w-6 h-6 m-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                        Youtube
                    </a>
                    <a id="insta" href="#" className="flex items-center hover:text-white hover:bg-[#453C67] p-2">
                        <svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="40px" height="40px"><path d="M 31.820312 12 C 13.438312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.438313 52 31.820312 52 L 32.179688 52 C 50.561688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 43.994141 18 C 45.099141 17.997 45.997 18.889141 46 19.994141 C 46.003 21.099141 45.110859 21.997 44.005859 22 C 42.900859 22.003 42.003 21.110859 42 20.005859 C 41.997 18.900859 42.889141 18.003 43.994141 18 z M 31.976562 22 C 37.498562 21.987 41.987 26.454563 42 31.976562 C 42.013 37.498562 37.545437 41.987 32.023438 42 C 26.501437 42.013 22.013 37.545437 22 32.023438 C 21.987 26.501437 26.454563 22.013 31.976562 22 z M 31.986328 26 C 28.672328 26.008 25.992 28.701625 26 32.015625 C 26.008 35.328625 28.700672 38.008 32.013672 38 C 35.327672 37.992 38.008 35.299328 38 31.986328 C 37.992 28.672328 35.299328 25.992 31.986328 26 z"/></svg>
                        Instagram
                    </a>
                    </div>
                </div>
                </div>
            
                
                <form action="#" className="w-full md:w border-2  p-6 ">
                <h2 className="text-2xl pb-3 font-semibold">
                    Send Message
                </h2>
                <div >
                    <div className="flex flex-col mb-3">
                    <label for="name">Name</label>
                    <input 
                        type="text" id="name" 
                        className="px-3 py-2 bg-[#ccc] border border-gray-900 focus:border-[#FB2576] focus:outline-none focus:bg-gray-800 focus:text-white"
                        autocomplete="off"
                    />
                    </div>
                    <div className="flex flex-col mb-3">
                    <label for="email">Email</label>
                    <input 
                        type="text" id="email" 
                        className="px-3 py-2 bg-[#ccc] border border-gray-900 focus:border-[#FB2576] focus:outline-none focus:bg-gray-800 focus:text-white"
                        autocomplete="off"
                    />
                    </div>
                    <div className="flex flex-col mb-3">
                    <label for="message">Message</label>
                    <textarea 
                        rows="4" id="message" 
                        className="px-3 py-2 bg-[#ccc] border border-gray-900 focus:border-[#FB2576] focus:outline-none focus:bg-gray-800 focus:text-white"
                    ></textarea>
                    </div>
                </div>
                <div className="w-full pt-3">
                    <button type="submit" className="w-full bg-[#ccc] border border-[rgb(15,14,14)] px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-[#453C67] hover:text-white text-xl cursor-pointer">
                    Send
                    </button>
                </div>
                </form>
            </div>
            </section> 
    );
}

export default Contect;

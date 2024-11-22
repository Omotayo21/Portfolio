import React from 'react';
import img1 from '../../public/floxx.jpg'
import { FaGithub } from 'react-icons/fa6';

const MobileApp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-4 gap-y-6">
        <h2 className="text-4xl text-green-700 font-bold uppercase">
          {" "}
          Mobile Apps
        </h2>
        <div className="h-[31rem] rounded-md border border-black w-[22rem] flex flex-col">
            <img src={img1} className="w-96 h-40" />
            <div className="flex flex-col gap-y-4 ml-2">
              {" "}
              <h2 className="font-bold text-black text-xl uppercase">
                News App Mobile App
              </h2>
              <p>
              A mobile app built with react-native that displays news from various categories which you can select. Users can also select news from various regions/countries, view details on the news then get easily redirected to the full article if they choose to see it.
                
              </p>
              <p>
                <span className="text-black font-semibold">Tech stack:</span>
                React-native, expo CLI.
               
              </p>
              <div className="flex flex-row justify-between">
               
                <a
                  href="https://github.com/Omotayo21/News-Mobile-App"
                  className="flex flex-row gap-1 hover:underline hover:text-blue-900 cursor-pointer "
                >
                  <FaGithub size={18} className="mt-[0.15rem]" />
                  View Code
                </a>
              </div>
              
        </div>
        </div>
      </div>
    </>
  );
}

export default MobileApp

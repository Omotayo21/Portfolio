import React from 'react';
import img1 from '../../public/api.jpg'
import img2 from '../../public/context.png.jpg'
import img3 from '../../public/jsx vs tsx.jpeg'
import img4 from '../../public/nextjs.png'

const Articles = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-4 gap-y-6">
        <h2 className="text-4xl text-green-700 font-bold uppercase">
          {" "}
          Articles
        </h2>
        <div className="lg:w-[60rem] sm:w-[20rem] lg:h-40 rounded-md border border-gray-400 flex sm:flex-col lg:flex-row gap-x-2 shadow-xl">
          <img src={img1} className="w-80 border border-gray-500" />
          <div className="flex flex-col gap-y-2 sm:ml-2">
            <h2 className="text-green-700 font-bold text-2xl">
              How to consume RESTful APi using Fetch API and axios into React
              app
            </h2>
            <p>
              {" "}
              This article entails how to consume restful Api using react fetch
              methods and external library axios
            </p>
            <p>
              Link:{" "}
              <a
                href="https://tayo.hashnode.dev/how-to-consume-restful-api-using-fetch-api-and-axios-into-react-app"
                className="hover:text-blue-700 hover:underline text-blue-500"
              >Click here to read article</a>{" "}
            </p>
          </div>
        </div>
        <div className="lg:w-[60rem] sm:w-[20rem] lg:h-40 rounded-md border border-gray-400 flex sm:flex-col lg:flex-row gap-x-2 shadow-xl">
          <img src={img2} className="w-80 border border-gray-500" />
          <div className="flex flex-col gap-y-2 sm:ml-2">
            <h2 className="text-green-700 font-bold text-2xl">
              Mastering React's Context API
            </h2>
            <p>
              {" "}
              Want to know more about handling states more efficiently in React,
              this article will teach you everything you need to know about
              React's Context API
            </p>
            <p>
              Link:{" "}
              <a
                href="https://tayo.hashnode.dev/mastering-reacts-context-api"
                className="hover:text-blue-700 hover:underline text-blue-500"
              >
                Click here to read article
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="lg:w-[60rem] lg:h-40 sm:w-[20rem] rounded-md border border-gray-400 flex sm:flex-col lg:flex-row gap-x-2 shadow-lg">
          <img src={img3} className="w-80 border border-gray-500" />
          <div className="flex flex-col gap-y-2 sm:ml-2">
            <h2 className="text-green-700 font-bold text-2xl">
              JSX VS TSX : The battle for React supremacy
            </h2>
            <p>
              {" "}
              Are you struggling to decide whether to learn Typescript with
              react or just use plain Javascript, well this article gives you a
              deep knowledge of tsx and jsx, compares both of them and will help
              you make a decision on what to learn
            </p>
            <p>
              Link:{" "}
              <a
                href="https://tayo.hashnode.dev/jsx-vs-tsx-the-battle-for-react-supremacy"
                className="hover:text-blue-700 hover:underline text-blue-500"
              >
                {" "}
                Click here to read article
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="lg:w-[60rem] lg:h-40 sm:w-[20rem] rounded-md border border-gray-400 flex sm:flex-col lg:flex-row gap-x-2 shadow-lg">
          <img src={img4} className="w-80 border border-gray-500" />
          <div className="flex flex-col gap-y-2 sm:ml-2">
            <h2 className="text-green-700 font-bold text-2xl ">
              Next.js : Level up your React skills with Nextjs
            </h2>
            <p>
              {" "}
              This article entails the benefits of using Next.js and full
              details of the beautiful features of Next.js
            </p>
            <p>
              Link:{" "}
              <a
                href="https://dev.to/omotayo21/nextjs-my-new-profound-love-2ik8"
                className="hover:text-blue-700 hover:underline text-blue-500"
              >
                {" "}
                Click here to read article
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles
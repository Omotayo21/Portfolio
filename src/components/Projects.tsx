import React, {forwardRef} from 'react'
import Articles from './Articles'
import img4 from '../../public/expensehub-bg.png'
import img5 from '../../public/shopping.png'
import img6 from '../../public/quiz.png';
import img7 from '../../public/feedback.png'
import { BiGlobe } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa6';

const Projects = forwardRef<HTMLDivElement> ((props, ref) => {
  return (
    <div ref={ref}>
      <div className="flex flex-col items-center justify-center gap-y-8 mt-8">
        <h2 className="text-4xl text-black font-bold uppercase">Projects</h2>
        <div className="flex lg:flex-row sm:flex-col gap-x-6 sm:gap-y-2 sm:px-4">
          <div className="h-[31rem] rounded-md border border-black w-[22rem] flex flex-col">
            <img src={img4} className="w-96 h-40" />
            <div className="flex flex-col gap-y-4 ml-2">
              {" "}
              <h2 className="font-bold text-black text-xl uppercase">
                expense hub
              </h2>
              <p>
                A full stack web application built with Next.js, where users can
                sign up, verify their email, change password if forgotten,
                create expenses and revenues, view their expenses on bar charts
                and piecharts and always retrieve their records from the
                database{" "}
              </p>
              <p>
                <span className="text-black font-semibold">Tech stack:</span>
                Next.js, Redux, Tailwind, Mongoose, MongoDb, Jwttoken,
                react-chart-js, nodemailer
              </p>
              <div className="flex flex-row justify-between">
                <a
                  href="https://expense-hub-2.onrender.com"
                  className="flex flex-row hover:underline hover:text-blue-900 cursor-pointer"
                >
                  <BiGlobe size={20} />
                  View Live
                </a>
                <a
                  href="https://github.com/Omotayo21/expense-hub"
                  className="flex flex-row hover:underline hover:text-blue-900 cursor-pointer"
                >
                  <FaGithub size={20} />
                  View Code
                </a>
              </div>
              <p className="text-[0.65rem]">
                *Site may load slowly at first due to Render's deployment
                policy, but just relax
              </p>
            </div>
          </div>
          <div className="h-[31rem] rounded-md border border-black w-[22rem] flex flex-col">
            <img src={img7} className="w-96 h-40" />
            <div className="flex flex-col gap-y-4 ml-2">
              {" "}
              <h2 className="font-bold text-black text-xl uppercase">
                product feedback app
              </h2>
              <p>
                Another full stack web application built with Next.js, that allows users to create, edit, delete and also engage with the community by commenting on feedback entries and also responding to existing comments and replies.
                User must sign up to be able to access these features 
                
              </p>
              <p>
                <span className="text-black font-semibold">Tech stack:</span>
                Next.js, Tailwind, Mongoose, MongoDb, Jwttoken,
               
              </p>
              <div className="flex flex-row justify-between">
                <a
                  href=""
                  className="flex flex-row hover:underline hover:text-blue-900 cursor-pointer text-red-600 line-through"
                >
                  <BiGlobe size={20} />
                  View Live
                </a>
                <a
                  href=""
                  className="flex flex-row hover:underline hover:text-blue-900 cursor-pointer text-red-600 line-through"
                >
                  <FaGithub size={20} />
                  View Code
                </a>
              </div>
              <p className="text-[0.8rem]">
                *Project still in progress, will be deployed soon
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row sm:flex-col gap-x-6 sm:gap-y-2">
          <div className="h-[26rem] rounded-md border border-black w-[22rem]">
            <img src={img5} className="w-96 h-40" />
            <div className="flex flex-col gap-y-4 ml-2">
              {" "}
              <h2 className="font-bold text-black text-xl uppercase">
                E-commerce App
              </h2>
              <p>
                {" "}
                An E-commerce app where users can sign up and be authenticated
                with firebase, select products, remove or add products, see
                total and checkout.
              </p>
              <p>
                <span className="text-black font-semibold">Tech stack:</span>
                React, Redux, Framer-motion, tailwind css, Firebase
              </p>
              <div className="flex flex-row justify-between">
                <a
                  href="https://e-commerce-app-omotayo21.vercel.app"
                  className="flex flex-row hover:underline hover:text-blue-900 cursor-pointer"
                >
                  <BiGlobe size={20} />
                  View Live
                </a>
                <a
                  href="https://github.com/Omotayo21/E-commerce-app/tree/main"
                  className="flex flex-row hover:underline hover:text-blue-900 cursor-pointer"
                >
                  <FaGithub size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="h-[26em] rounded-md border border-black w-[22rem]">
            <img src={img6} className="w-96 h-40" />
            <div className="ml-2 gap-y-3 flex flex-col">
              {" "}
              <h2 className="font-bold text-black text-xl uppercase">
                Quiz app
              </h2>
              <p>
                The quiz application is a web appplication for selecting and
                taking various frontend related quizzes. It contains multiple
                choice questions and can let you track your scores, and view
                your records on tests you've taken on a leaderboard.{" "}
              </p>
              <p>
                <span className="text-black font-semibold">Tech stack:</span>
                React, Redux, Typescript, tailwind css
              </p>
              <div className="flex flex-row justify-between">
                <a
                  href="https://quiz-app-fc4v.vercel.app/"
                  className="flex flex-row hover:underline hover:text-blue-900 cursor-pointer"
                >
                  <BiGlobe size={20} />
                  View Live
                </a>
                <a
                  href="https://github.com/Omotayo21/Quiz-app"
                  className="flex flex-row hover:underline hover:text-blue-900 cursor-pointer"
                >
                  <FaGithub size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <Articles />
      </div>
    </div>
  );
})

export default Projects
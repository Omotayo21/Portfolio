import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../store';
import { setQuizzes} from "../store/HomeSlice";
import Topics from '../Components/Topics';
import { getQuizData } from '../QuizData';
import { useLoaderData } from 'react-router-dom';

type Quiz = {
  title : string;
  icon : string;
}
const HomePage = () => {

  const { darkMode } = useAppSelector ((state) => state.home);
  const dispatch = useAppDispatch();
  const [data, setData] = useState<Quiz[]>([]);
  //const data = useLoaderData();
 
useEffect(()=> {
   getQuizData()
      .then((fetchedData) => {
        setData(fetchedData)
  dispatch(setQuizzes(fetchedData))})
.catch((error) => {
        // Handle any errors during data fetching
        console.error("Error fetching data:", error);
        // You might want to display an error message to the user
      });
}, [])
  return (
    <div>
     
       <div className="lg:grid-cols-1 lg:gap-24 sm:gap-16 flex sm:flex-col lg:flex-row sm:grid-cols-2  ">
      <div className='lg:ml-24 sm:ml-8'>
        <h1
          className={`sm:text-[4.0rem] sm:pb-8 pb-20 text-[6.4rem] font-light leading-[100%] transition-all duration-300 ${
            darkMode ? "text-white" : "text-blue-900"
          }`}
        >
          Welcome to the <br />
          <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p
          className={`sm:text-[1.6rem] lg:text-[2rem] italic leading-[150%] transition-all duration-300 ${
            darkMode ? "text-red-500" : "text-gray-600"
          }`}
        >
          Pick a subject to get started.
        </p>
      </div>
     <div>
        <ul className="sm:space-y-5 lg:space-y-8">
          {data &&
            data.map((item) => (
              <Topics key={item.title} img={item.icon} text={item.title} />
            ))}
            </ul>
            </div>
            </div> 
    </div>
  )
}

export default HomePage

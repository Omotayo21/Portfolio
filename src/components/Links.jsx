import React from 'react'

import { FaLinkedin,FaGithub, FaHashnode,FaWhatsapp  } from 'react-icons/fa6'
import {IoMail} from 'react-icons/io5'


const Links = () => {
  return (
    <div className=" flex flex-row gap-x-4 text-white cursor-pointer mt-4">
      <a href="https://ng.linkedin.com/in/abdulrahman-rufai-202136280">
        <FaLinkedin size={20} />
      </a>
      <a href=" https://github.com/Omotayo21">
        <FaGithub size={20} />
      </a>
      <a href="https://wa.me/2349076930901">
        <FaWhatsapp size={20} />
      </a>
      <IoMail size={20} />
      <a href="https://tayo.hashnode.dev/">
        <FaHashnode size={20} />
      </a>
    </div>
  );
}

export default Links
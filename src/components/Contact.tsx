import React, { useRef, useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { Envelope, DeviceMobile, MapPin } from "phosphor-react";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";
import Links from "./Links";

const Contact = forwardRef<HTMLDivElement> (( props, ref) => {
  const [ formInViewRef, formInView ] = useInView({ threshold: 0.5 });
  const formRef = useRef<HTMLFormElement>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

 
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    setLoading(true)

    // Validate form inputs
    if (!form) return;

    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();

    if (name.length < 3) {
      setNameError("Name must be at least 3 words.");
      return;
    } else {
      setNameError(null);
    }

    if (!email.includes("@gmail.com") && !email.includes("@yahoo.com")) {
      setEmailError("Please provide a valid Gmail or Yahoo email address.");
      return;
    } else {
      setEmailError(null);
    }

    if (!message) {
      setMessageError("Message cannot be empty.");
      return;
    } else {
      setMessageError(null);
    }

    // Send email using emailjs
    emailjs
      .sendForm("service_svyylhi", "template_fega6tr", form, "TglTXBBjJ-XHZP7OP")
      .then(
        (result) => {
          toast.success("Your message has been sent");
          form.reset();
          console.log("SUCCESS!", result.text);
          setLoading(false)
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("There was an error sending your message.");
       setLoading(false)
        }
      );
  };

  return (
    <div ref={ref}>
      <motion.div
        ref={formInViewRef}
        initial={{ opacity: 0, y: 50 }}
        animate={formInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="lg:w-full bg-green-700 py-4 "
      >
        <div className="flex lg:flex-row lg:ml-36 sm:ml-2 sm:flex-col  gap-x-40">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-y-6"
          >
            <h1 className="text-white font-bold text-2xl ">Contact </h1>
            <input
              type="text"
              name="user_name"
              className="bg-transparent rounded-md border border-white lg:w-96 h-12 text-white text-sm p-2 outline-none"
              placeholder="Your Name"
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
            <input
              type="email"
              name="user_email"
              className="bg-transparent rounded-md border border-white lg:w-96 h-12 text-white text-sm p-2 outline-none"
              placeholder="Email Address"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            <textarea
              name="message"
              className="lg:w-96 text-white  bg-transparent rounded-md border border-white h-20 text-sm p-2 outline-none"
              placeholder="Message"
            ></textarea>
            {messageError && (
              <p className="text-red-500 text-sm">{messageError}</p>
            )}
            <button className="bg-white lg:w-96 sm:w-80 sm:ml-6 text-green-700 font-semibold p-2 text-sm h-10">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="flex flex-col p-4 ">
            <h1 className="text-white font-bold ">Get In Touch</h1>
            <p className=" text-white mb-4">
              I am a web developer who is dedicated to providing high-quality,
              user-friendly websites and web applications. I am committed to
              ensuring that you are completely satisfied with your project.
              <br /> I will personally review your message within 24 hours and
              provide you with a tailored solution that meets your specific
              requirements. Thank you for your trust!
            </p>
            <p className="text-white flex flex-row gap-x-2">
              <MapPin size={20} className="mt-1" /> Lagos, Nigeria
            </p>
            <p className="text-white flex flex-row gap-x-2">
              {" "}
              <DeviceMobile size={20} className="mt-1" /> (+234) 9076930901
            </p>
            <p className="text-white flex flex-row gap-x-2">
              <Envelope size={20} className="mt-1" />{" "}
              rufaiabdulrahman21@gmail.com
            </p>
            <Links />
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default Contact;

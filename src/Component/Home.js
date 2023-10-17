import React, { useEffect, useState } from "react";
import { Fentend, Main, CEO, COE, Business, Service } from "../Assets";
import { FaLaptop, FaMobileAlt, FaInternetExplorer } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import raphaelProfile from "../Assets/1694583209215.jpg";
import Skeleton from "react-loading-skeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTitle("Take your business to the next level");
    }, 8000);

    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="text-center md:mt-8 md:pt-10">
      {/* YOUR BUSINESS SECTION */}

      <div className="flex md:flex-row flex-col p-5">
        <div className="md:w-1/2" data-aos="fade-right">
          <h1 className="font-semibold text-indigo-500 md:text-4xl text-3xl text-left pt-3 md:font-semibold md:my-5">
            {title || <Skeleton className="h-14 md:h-10"/>}
          </h1>
          {loading ? (
            <Skeleton className="h-24 md:h-44 mt-4 mb-8"  />
          ) : (
            <p className="font-title md:text-xl text-sm my-5 md:mx-3 text-left">
              we provide innovative IT solutions to clients from various
              industries including banking, finance, insurance etc. We strive to
              deliver cost-effective and adaptive technology solutions that
              enable our clients to meet their business objectives and goals,
              and gain a greater return on their investment.
            </p>
          )}
        </div>
        <div className="md:w-1/2 md:mx-5" data-aos="fade-left">
          {loading ? (
            <Skeleton className="h-96" />
          ) : (
            <img src={Main} alt="" className="w-full h-full rounded-md" />
          )}
        </div>
      </div>

      {/* YOUR PROMOTION SECTION */}

      <div
        className="flex md:flex-row flex-col md:p-10 md:my-20 p-5 "
        data-aos="fade-up"
      >
        <div className="hidden md:block md:w-1/2 md:mx-5">
          <img src={Service} alt="" className="md:w-full md:h-full " />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-indigo-500 md:text-3xl text-2xl text-left font-semibold">
            We help you to promote your business
          </h1>
          <p className="md:text-xl font-title text-left text-sm mt-5 md:mx-3">
            Managing your business IT department and staying up to date with the
            latest technologies can be a hassle. Outsource your technology to us
            and we’ll take care of your infrastructure, so you can say goodbye
            to prohibitively expensive IT and downtime for good.
          </p>
        </div>
      </div>

      {/* WHAT WE DO SECTION */}
      <h1
        className="text-2xl font-black capitalize underline font-title text-indigo-500"
        data-aos="slide-right"
      >
        What we do
      </h1>
      <div className=" group flex md:flex-row flex-col gap-10 w-full py-10 px-3">
        <div
          className="max-w-sm w-full lg:max-w-full lg:flex mx-auto text-sm"
          data-aos="flip-left"
        >
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-indigo-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <FaLaptop className="mx-auto mt-10 text-center text-3xl text-indigo-500" />
            <h2 className="md:text-3xl text-xl font-title font-semibold text-white my-4">
              Web Development
            </h2>
            <p className="pb-5 flex items-center justify-center text-indigo-100 font-title md:text-lg mx-2">
              We develop web app and desktop app for companies and Individuals
              across the globe to manage their businesses Fentend market tech
              strive to breathe life into your ideas by developing software
              solutions that can bring value to your business. Whether it's an
              interactive mobile app, desktop app, web application or a
              customized software solution, we got you covered.
            </p>
          </div>
        </div>

        <div
          className="max-w-sm w-full lg:max-w-full lg:flex mx-auto text-sm"
          data-aos="flip-up"
        >
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-indigo-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <FaMobileAlt className="mx-auto mt-10 text-center text-3xl text-indigo-500" />
            <h2 className="md:text-3xl text-xl font-title font-semibold text-white my-4">
              App Development
            </h2>
            <p className="pb-5 flex items-center justify-center text-indigo-100 font-title md:text-lg mx-2">
              We develop Mobile Application for company to manage and run their
              business across the globe. Mobile App that can run on different
              platform such as Android & IOS and can be used by businesses of
              any sizes, from small businesses to large enterprises. Mobile
              application can help improve efficiency and also automate tasks
            </p>
          </div>
        </div>

        <div
          className="max-w-sm w-full lg:max-w-full lg:flex mx-auto text-sm"
          data-aos="flip-left"
        >
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-indigo-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <FaInternetExplorer className="mx-auto mt-10 text-center text-3xl text-indigo-500" />
            <h2 className="md:text-3xl text-xl font-title font-semibold text-white my-4">
              Social Media Development
            </h2>
            <p className="pb-5 flex items-center justify-center text-indigo-100 font-title md:text-lg mx-2">
              We analyze social media audiences and develope a strategy that
              tailored to them, creating and distributing content for social
              media profiles, monitoring online conversations, collaborating
              with influencers, providing and monitoring, measuring, and
              reporting on social media performance.
            </p>
          </div>
        </div>
      </div>

      {/* OUR SERVICE SECTION */}
      <div className="flex md:flex-row flex-col p-3" data-aos="zoom-out-up">
        <div className="md:w-1/2 md:mx-5">
          <img src={Business} alt="" className="w-full h-full rounded-md " />
        </div>
        <div className="md:w-1/2">
          <h2 className="md:text-3xl text-2xl text-indigo-500 font-black pt-4 font-title underline mt-5">
            Our Services
          </h2>
          <p className="md:text-xl text-sm font-title text-left my-5 mx-3">
            Our highly skilled development teams specialized in Java, PHP,
            React, Angular and AWS help you accelarate your business via modern
            custom software solutions.
          </p>
        </div>
      </div>

      {/* OUR TEAM SECTION */}
      <div className="bg-indigo-100 pb-20 ">
        <h2
          className="text-3xl text-indigo-500 pt-6 pb-12 font-semibold"
          data-aos="slide-right"
        >
          Our team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:gap-24 mx-10 md:mx-0">
          <div className="max-w-sm w-full lg:max-w-full lg:flex lg:items-end lg:justify-end">
            <div
              className="h-72 lg:w-64 bg-bottom flex-none bg-cover bg-no-repeat rounded-md lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${raphaelProfile})` }}
            >
              <h3 className="font-semibold font-title capitalize text-indigo-500 text-md relative top-60 right-[3rem]">
                Raphael Ogumba
              </h3>
              <h3 className="text-white capitalize text-sm relative top-[15rem] right-6">
                UX/UI Designer & Frontend Dev
              </h3>
            </div>
          </div>

          <div className="max-w-sm w-full lg:max-w-full lg:flex ">
            <div
              className="h-72 lg:w-64 flex-none bg-bottom bg-no-repeat font-title font-semibold bg-cover rounded-md lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${CEO})` }}
            >
              <h3 className="font-semibold font-title capitalize text-indigo-500 text-md relative top-60 right-[4.2rem]">
                Mr. Obafemi
              </h3>
              <h3 className="text-[#ffffff] capitalize text-sm relative top-[15rem] right-3">
                CEO Fentend & Business strategist
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;

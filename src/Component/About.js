import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-10">
      <div className="text-center bg-indigo-500 p-32">
        <p className="text-white text-3xl font-bold">About Us</p>
      </div>
      <div className="text-center md:w-full px-3">
          <p className="font-title md:text-left text-left md:pt-16 pt-10 md:pb-5 md:px-64 m-1">
          Welcome to Fentend Web Solutions, where innovation meets security! We
          are a cutting-edge tech company dedicated to providing comprehensive
          website development services while ensuring the utmost protection of
          your valuable data. Our mission is to empower businesses with robust
          online platforms, driving growth and success, while safeguarding their
          digital assets from ever-evolving cyber threats. At Fentend, we
          understand that building a website is not just about aesthetics; it's
          about creating a digital ecosystem that fosters engagement, drives
          conversions, and enhances brand presence. Simultaneously, we recognize
          the critical need to shield this digital infrastructure from malicious
          actors seeking to exploit vulnerabilities. With our holistic approach
          to web development and data protection, you can rest assured that your
          online presence is in safe hands.
        </p>
        <p className="font-title md:text-left md:pb-16 md:px-64 text-left py-5 m-2">
          Fentend Web Solutions is your go-to partner for seamless website
          development and uncompromising data protection. Our team of skilled
          designers, developers, and cybersecurity experts collaborates to build
          visually captivating, user-friendly websites that align with your
          business objectives. We leverage the latest technologies, responsive
          designs, and intuitive user interfaces to create an unforgettable
          online experience for your customers. While we prioritize aesthetics
          and functionality, security is at the core of everything we do. We
          understand the value of your data and the potential risks it faces in
          today's digital landscape. Our state-of-the-art security measures
          ensure that your website is fortified against cyber threats, including
          malware, hacking attempts, and data breaches. We implement robust
          encryption, continuous monitoring, and proactive measures to identify
          and address vulnerabilities before they become issues. With Fentend,
          you don't need to compromise between a stunning website and data
          protection. Our holistic approach ensures that your website not only
          looks great but is also a fortress against cyber threats. Partner with
          us to elevate your online presence while keeping your data safe,
          enabling you to focus on what you do best – growing your business with
          confidence.
        </p>
      </div>

      {/* VISION & MISSION */}

      <div className="flex md:flex-row px-3 flex-col w-full bg-gray-100 pb-5 gap-4 md:py-28 md:mt-0 ">
        <div className="mx-3">
          <h1 className="text-center text-2xl font-semibold">Our Vision</h1>
          <hr
            className="bg-indigo-500 h-1 md:mb-5 mb-5 mx-32"
            data-aos="slide-right"
          />
          <p className="font-title">
            At Fentend Web Solutions, our vision is to be the industry leader in
            web development and data protection, driving digital innovation
            while setting the gold standard for safeguarding our clients'
            valuable information in an ever-evolving online landscape.
          </p>
        </div>

        <div className="mx-3">
          <h1 className="text-center text-2xl font-semibold">Our Mission</h1>
          <hr
            className="bg-indigo-500 h-1 md:mb-5 mb-5 mx-32"
            data-aos="slide-right"
          />
          <p className="font-title">
            Our mission is to empower businesses of all sizes with dynamic,
            secure, and innovative websites that amplify their online presence.
            We are committed to providing cutting-edge technology, unparalleled
            design, and robust cybersecurity measures, ensuring our clients'
            websites are not only visually stunning but also impenetrable
            fortresses against cyber threats.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:p-28 px-2 md:mt-0 mt-10">
        <div>
          <h1 className="text-center text-3xl pb-5 font-semibold">Goals</h1>

          <div className="font-title flex flex-col gap-4">
            <div className="flex items-center justify-center gap-4">
              <p className="text-indigo-500">
                <AiFillCheckCircle />
              </p>
              <h3>
                Excellence in Web Development: Strive to consistently deliver
                exceptional websites that exceed client expectations, reflecting
                our commitment to quality, innovation, and user experience.
              </h3>
            </div>
            <div className="flex  items-center justify-center gap-4">
              <p className="text-indigo-500">
                <AiFillCheckCircle />
              </p>
              <h3>
                Data Security Leadership: Be at the forefront of data
                protection, continuously enhancing our security protocols,
                staying ahead of emerging threats, and setting industry
                benchmarks for data integrity.
              </h3>
            </div>
            <div className="flex  items-center justify-center gap-4">
              <p className="text-indigo-500">
                <AiFillCheckCircle />
              </p>
              <h3>
                Client-Centric Approach: Foster strong client relationships by
                actively listening, understanding unique needs, and providing
                personalized solutions that drive business growth and customer
                satisfaction.
              </h3>
            </div>
            <div className="flex  items-center justify-center gap-4 pb-5">
              <p className="text-indigo-500">
                <AiFillCheckCircle />
              </p>
              <h3>
                Innovation and Technology: Embrace emerging technologies, stay
                current with industry trends, and continuously improve our
                skills to bring the latest advancements to our clients, making
                them stand out in the digital world.
              </h3>
            </div>
            <div className="flex  items-center justify-center gap-4 pb-5">
              <p className="text-indigo-500">
                <AiFillCheckCircle />
              </p>
              <h3>
                Education and Advocacy: Empower clients with knowledge about
                online security best practices and industry insights, advocating
                for a safer digital environment and ensuring our clients are
                well-informed partners in their online journey.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;

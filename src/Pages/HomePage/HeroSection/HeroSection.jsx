import React from "react";
import "./HeroSection.css";
import rafsan_cover from "../../../assets/img/CoverImg/rafsan_cover.jpg";
import green_gradient from "../../../assets/img/CoverImg/green-gradient-rafsan.jpg";
import NavBar from "../../../sharedComponant/NavBar/NavBar";
import { Carousel } from "flowbite-react";

const HeroSection = () => {
  return (
    <div className="main">
      <div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <div className="flex h-full items-center justify-center bg-gray-400 rounded-none dark:bg-gray-700 dark:text-white">
              <div className="flex h-ful items-center justify-center ">
                <div className="w-50 items-left justify-left">
                  <img src={green_gradient} alt="" />
                </div>
                <div className="bg-green-400"></div>
              </div>
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 2
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 3
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import CarouselImage1 from "assets/Images/CarouselImage1.jpg";
import CarouselImage2 from "assets/Images/CarouselImage2.jpg";
import CarouselImage3 from "assets/Images/CarouselImage3.jpg";
import { ReactComponent as RightIcon } from "assets/Svgs/CarouselRight.svg";
import { ReactComponent as LeftIcon } from "assets/Svgs/CarouselLeft.svg";

import "./Landing.css";
import {  useState } from "react";

export const CarouselImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((currentImageIndex + 2) % 3);
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % 3);
  };
  console.log("Current image index is", currentImageIndex);
  return (
    <div className="grid grid-cols-5 gap-10 mt-[10%]">
      <div
        className={`col-span-1 flex items-center justify-center mt-[40%] ${
          currentImageIndex === 1 && "opacity-0"
        }`}
      >
        <div className="w-full h-full overflow-hidden">
          <div className="relative w-full h-[28rem]">
            <img
              src={currentImageIndex === 0 ? CarouselImage2 : CarouselImage1}
              className={`absolute inset-0 h-full object-cover object-${
                currentImageIndex === 0 ? "left" : "right"
              }`}
              alt="Image1"
            />
            <div className="w-full h-full flex items-center justify-center">
              <LeftIcon
                className="h-8 w-8 lg:h-20 lg:w-20 absolute z-10 cursor-pointer"
                onClick={handleLeftArrowClick}
              />
            </div>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50" />
          </div>
        </div>
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <div className="img-container">
          <img
            src={
              currentImageIndex === 1
                ? CarouselImage1
                : currentImageIndex === 2
                ? CarouselImage2
                : CarouselImage3
            }
            className="shadow-xl w-11/12 h-[32rem]"
            alt="Image2"
          />
        </div>
      </div>
      <div
        className={`col-span-1 flex items-center justify-center mt-[40%] ${
          currentImageIndex === 0 && "hidden"
        }`}
      >
        <div className="w-full h-full overflow-hidden">
          <div className="relative w-full h-[28rem]">
            <img
              src={currentImageIndex === 1 ? CarouselImage2 : CarouselImage3}
              className={`absolute inset-0 h-full object-cover object-${
                currentImageIndex === 1 ? "left" : "right"
              }`}
              alt="Image3"
            />
            <div className="w-full h-full flex items-center justify-center">
              <RightIcon
                className="h-8 w-8 lg:h-20 lg:w-20 absolute z-10 cursor-pointer"
                onClick={handleRightArrowClick}
              />
            </div>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

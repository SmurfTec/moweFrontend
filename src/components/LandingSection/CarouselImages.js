import CarouselImage1 from "assets/CarouselImage1.jpg";
import { ReactComponent as RightIcon } from "assets/CarouselRight.svg";
import { ReactComponent as LeftIcon } from "assets/CarouselLeft.svg";

import "./Landing.css";
export const CarouselImages = () => {
  return (
    <div className="grid grid-cols-5 gap-10  mt-[10%] snap-x snap-center">
      <div className="col-span-1 w-full md:w-[24rem] overflow-hidden">
        <div className="relative w-full h-full md:h-[32rem] ">
          <img
            src="https://picsum.photos/id/1018/1000/600"
            className="absolute inset-0 h-full object-cover object-right"
            alt="Image1"
          />
          <div className="w-full h-full flex items-center justify-center">
            <LeftIcon className="h-8 w-8 lg:h-20 lg:w-20 absolute z-10 " />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50" />
        </div>
      </div>
      <div className="col-span-3 flex justify-center">
        <div className="img-container lg:px-20">
          <img  src="https://picsum.photos/id/1015/500/300" className="shadow-xl" alt="Image1" />
        </div>
      </div>
      <div className="col-span-1 overflow-hidden">
        <div className="relative w-full h-[32rem]">
          <img
           src="https://picsum.photos/id/1019/500/300"
            className="absolute inset-0 h-full object-cover object-left"
            alt="Image1"
          />
          <div className="w-full h-full flex items-center justify-center">
            <RightIcon className="h-8 w-8 lg:h-20 lg:w-20 absolute z-10 " />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50" />
        </div>
      </div>
    </div>
  );
};


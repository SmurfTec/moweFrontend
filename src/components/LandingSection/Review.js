/* eslint-disable jsx-a11y/alt-text */
import LS1 from "assets/Images/LS1.png";
import L2 from "assets/Images/LS2.png";
import L3 from "assets/Images/LS3.png";
import L4 from "assets/Images/LS4.png";

export const Review = () => {
  return (
    <div className="flex flex-col gap-20 mt-48">
    <div className="text-c2xl font-semibold pl-8">Google Reviews</div>

    <div className="bg-blue-glacier md:h-[50rem] mt-[1%] mb-[8%] w-full flex justify-around items-center overflow-auto">
      {/* <LandingSectionReview1 className="md:h-11/12 object-cover" />
      <LandingSectionReview2 className="md:h-11/12 object-cover" /> */}
      {/* <LandingSectionReview3 className="h-11/12 object-cover" /> */}
      {/* <LandingSectionReview4 className="h-11/12 object-cover" /> */}
      <img src={LS1} className="md:h-11/12 object-cover" />
      <img src={L2} className="md:h-11/12 object-cover" />
      <img src={L3} className="md:h-11/12 object-cover" />
      <img src={L4} className="md:h-11/12 object-cover" />
    </div>
    </div>
  );
};

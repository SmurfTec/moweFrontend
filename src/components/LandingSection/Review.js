/* eslint-disable jsx-a11y/alt-text */
import LS1 from "assets/Images/LS1.png";
import L2 from "assets/Images/LS2.png";
export const Review = () => {
  return (
    <div className="bg-blue-glacier md:h-[40rem] mt-[10%] w-full flex justify-around items-center overflow-auto">
      {/* <LandingSectionReview1 className="md:h-11/12 object-cover" />
      <LandingSectionReview2 className="md:h-11/12 object-cover" /> */}
      {/* <LandingSectionReview3 className="h-11/12 object-cover" /> */}
      {/* <LandingSectionReview4 className="h-11/12 object-cover" /> */}
      <img src={LS1} className="md:h-11/12 object-cover" />
      <img src={L2} className="md:h-11/12 object-cover" />
      <img src={L2} className="md:h-11/12 object-cover" />
      <img src={L2} className="md:h-11/12 object-cover" />
    </div>
  );
};

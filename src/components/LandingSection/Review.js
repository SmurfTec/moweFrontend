import { ReactComponent as LandingSectionReview1 } from "assets/LSR1.svg";
import { ReactComponent as LandingSectionReview2 } from "assets/LSR.2.svg";
import { ReactComponent as LandingSectionReview3 } from "assets/LSR3.svg";
import { ReactComponent as LandingSectionReview4 } from "assets/LSR4.svg";
import LS1 from "assets/LS1.png";
import L2 from "assets/LS2.png";
export const Review = () => {
  return (
    <div className="bg-blue-glacier h-[40rem] mt-[10%] flex justify-around items-center">
      <LandingSectionReview1 className="h-11/12 object-cover" />
      <LandingSectionReview2 className="h-11/12 object-cover" />
      {/* <LandingSectionReview3 className="h-11/12 object-cover" /> */}
      {/* <LandingSectionReview4 className="h-11/12 object-cover" /> */}
      <img src={LS1} className="h-11/12 object-cover"/>
      <img src={L2} className="h-11/12 object-cover"/>

    </div>
  )
}

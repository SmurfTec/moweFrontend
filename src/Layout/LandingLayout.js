import { CarouselImages } from "components/LandingSection/CarouselImages";
import { Footer } from "components/LandingSection/Footer";
import { Navbar } from "components/LandingSection/Navbar";
import { Review } from "components/LandingSection/Review";

export const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <Review />;
      <Footer />
    </>
  );
};

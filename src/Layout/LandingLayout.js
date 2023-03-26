import { Carousel } from "components/LandingSection/Carousel";
import { CarouselImages } from "components/LandingSection/CarouselImages";
import { Footer } from "components/LandingSection/Footer";
import { Navbar } from "components/LandingSection/Navbar";
import { Review } from "components/LandingSection/Review";
import { Login } from "components/Login/Login";

export const LandingLayout = () => {
  return (
    <>
    <Login/>
      <Navbar />
      <Carousel/>
      <CarouselImages/>
      <Review />;
      <Footer />
    </>
  );
};

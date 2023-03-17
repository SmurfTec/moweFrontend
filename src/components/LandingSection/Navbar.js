import LandinImage from "assets/LandingImage.jpg";
import LandinImage1 from "assets/CarouselImage2.jpg";

import { useState, useEffect } from "react";

import { ReactComponent as AppLogo } from "assets/AppLogo.svg";
import { Button } from "components/Common/Button/Button";
import { Login } from "components/Login/Login";
import { FirstStep } from "components/EventCreation/FirstStep";
export const Navbar = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "url(/background-image-1.jpg)",
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);

  useEffect(() => {
    const images = [`url(${LandinImage})`, `url(${LandinImage1})`];

    const intervalId = setInterval(() => {
      const index = Math.floor(Math.random() * images.length);
      setBackgroundImage(images[index]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className="transition-all duration-1000 ease-in-out h-screen flex flex-col justify-between px-10 pb-20"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-row items-center justify-between -mt-10">
          <AppLogo className="h-80" />
          <div className="flex gap-10">
            <Button
              btnText="Log In"
              className="w-40 !bg-green-teal shadow-lg"
              onClick={() => {
                setModalOpen(true);
              }}
            />
            <Button
              btnText="Tu Invitación"
              className="w-60 bg-white shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-4xl text-white">
          <div>Crea una experiencia</div>
          <div>ÚNICA</div>
          <div>para tu gran día!</div>
        </div>
        <div className="flex w-full items-center justify-center gap-10 underline text-xl text-white">
          <div
            onClick={() => {
              setFormModalOpen(true);
            }}
          >
            Home
          </div>
          <div>QUÉ HACEMOS</div>
          <div>GALERÍA</div>
          <div>FAQ</div>
        </div>
      </div>
      <Login modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <FirstStep modalOpen={formModalOpen} setModalOpen={setFormModalOpen} />
    </>
  );
};

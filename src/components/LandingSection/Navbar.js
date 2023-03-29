import { useState, useEffect } from "react";
import { Login } from "components/Login/Login";
import { useNavigate } from "react-router-dom";
import { Button } from "components/Common/Button/Button";
import LandinImage from "assets/Images/LandingImage.jpg";
import LandinImage1 from "assets/Images/CarouselImage2.jpg";
import { ReactComponent as AppLogo } from "assets/Svgs/AppLogo.svg";
import { EventCreation } from "components/EventCreation/EventCreation";
import { EventSelection } from "components/EventCreation/EventSelection";
import { VideoPhotoEditing } from "components/EventCreation/VideoPhotoEditing";

export const Navbar = () => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(
    "url(/background-image-1.jpg)",
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [eventFormModal, setEventFormModalOpen] = useState(false);
  const [VideoPhotoEditingModalOpen, setVideoPhotoEditingModalOpen] =
    useState(false);
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
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-4xl text-white">
          <div
            onClick={() => {
              navigate("/adminTable");
            }}
          >
            Crea una experiencia
          </div>
          <div
            onClick={() => {
              navigate("/menu");
            }}
          >
            ÚNICA
          </div>
          <div
            onClick={() => {
              navigate("/success");
            }}
          >
            para tu gran día!
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-10 underline text-xl text-white">
          <div
            onClick={() => {
              setFormModalOpen(true);
            }}
          >
            Home
          </div>
          <div
            onClick={() => {
              setEventFormModalOpen(true);
            }}
          >
            QUÉ HACEMOS
          </div>
          <div
            onClick={() => {
              setVideoPhotoEditingModalOpen(true);
            }}
          >
            GALERÍA
          </div>
          <div
            onClick={() => {
              navigate("/payment");
            }}
          >
            FAQ
          </div>
        </div>
      </div>
      <Login modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <EventCreation
        modalOpen={formModalOpen}
        setModalOpen={setFormModalOpen}
      />
      <EventSelection
        modalOpen={eventFormModal}
        setModalOpen={setEventFormModalOpen}
      />
      <VideoPhotoEditing
        modalOpen={VideoPhotoEditingModalOpen}
        setModalOpen={setVideoPhotoEditingModalOpen}
      />
    </>
  );
};

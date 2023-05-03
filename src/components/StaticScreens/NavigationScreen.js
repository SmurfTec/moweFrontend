import BackgroundImage from "assets/Images/wed.jpg";
import DressImage from "assets/Images/Dress.png";
import { ReactComponent as AppLogo } from "assets/Svgs/AppLogo.svg";
import { ReactComponent as LocationIcon } from "assets/Svgs/location.svg";
import { ReactComponent as ShareIcon } from "assets/Svgs/share.svg";
import { ReactComponent as GiftIcon } from "assets/Svgs/gift.svg";
import { ReactComponent as ClockIcon } from "assets/Svgs/clock.svg";
import { ReactComponent as ChatIcon } from "assets/Svgs/chat.svg";
import { ReactComponent as MenuIcon } from "assets/Svgs/menu.svg";
import { ReactComponent as PauseIcon } from "assets/Svgs/pause.svg";
import { ReactComponent as MuteIcon } from "assets/Svgs/mute.svg";
import { ReactComponent as PlayIcon } from "assets/Svgs/play.svg";
import { EventCreation } from "components/EventCreation/EventCreation";
import { useState } from "react";
import { VideoPhotoEditing } from "components/EventCreation/VideoPhotoEditing";
import { EventSelection } from "components/EventCreation/EventSelection";
import { useNavigate } from "react-router-dom";
import ClassNames from "Helpers/Common";

export const MainMenu = () => {
  const navigate = useNavigate();

  const [formModalOpen, setFormModalOpen] = useState(false);
  const [eventFormModal, setEventFormModalOpen] = useState(false);

  const [VideoPhotoEditingModalOpen, setVideoPhotoEditingModalOpen] =
    useState(false);
  return (
    <div
      
      className={ClassNames(
          "h-screen flex flex-col px-10 text-white font-extrabold",
          (formModalOpen||eventFormModal) && "filter blur-[12px]",
        )}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex h-44 justify-between">
        <AppLogo className="-mt-12" />
        <div className="flex gap-4 mt-12">
          <PlayIcon className="h-14 w-14" />
          <PauseIcon className="h-14 w-14" />
          <MuteIcon className="h-14 w-14" />
          <MenuIcon className="h-28 w-28 -mt-[6%] -ml-[3%]" />
        </div>
      </div>
      <div className="flex items-center justify-between h-[44rem]">
        <div className="flex flex-col align-baseline gap-32">
          <div
            className="flex flex-col gap-2 items-center justify-center cursor-pointer"
            onClick={() => {
              setFormModalOpen(true);
            }}
          >
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <LocationIcon className="h-10 w-10" />
            </div>
            <div className="text-cmd bg-black-pitch bg-opacity-40 px-4 rounded-full py-2">
              Ubicación
            </div>
          </div>

          <div
            className="flex flex-col gap-2 items-center justify-center cursor-pointer"
            onClick={() => {
              setEventFormModalOpen(true);
            }}
          >
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <ClockIcon className="h-10 w-10" />
            </div>
            <div className="text-cmd bg-black-pitch bg-opacity-40 px-4 rounded-full py-2">
              Countdown
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center cursor-pointer">
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <img src={DressImage} className="h-10 w-10" alt="" />
            </div>
            <div className="text-cmd bg-black-pitch bg-opacity-40 px-4 rounded-full py-2">
              Dresscode
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-black-pitch bg-opacity-50 items-center justify-center w-[30rem] h-[15rem] px-10 rounded-3xl">
          <div className="text-c3xl">Ésta es tu invitación</div>
          <div className="text-cmd">
            Ahora añade los datos reales que aparecerán en tu invitación!
          </div>
        </div>
        <div className="flex flex-col align-baseline gap-32">
          <div className="flex flex-col gap-2 items-center justify-center cursor-pointer">
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <GiftIcon className="h-10 w-10" />
            </div>
            <div className="text-cmd bg-black-pitch bg-opacity-40 px-4 rounded-full py-2">
              Regalo
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center cursor-pointer">
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <ShareIcon className="h-10 w-10" />
            </div>
            <div className="text-cmd bg-black-pitch bg-opacity-40 px-4 rounded-full py-2">
              RRSS
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center cursor-pointer">
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <ChatIcon className="h-10 w-10" />
            </div>
            <div className="text-cmd bg-black-pitch bg-opacity-40 px-4 rounded-full py-2">
              Feedback
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <div className="py-2 px-4 bg-black-pitch bg-opacity-75 rounded-3xl border border-white">
          Modificar Diseño
        </div>
        <div className="py-2 px-4 bg-black-pitch bg-opacity-75 rounded-3xl border border-white">
          Editar Datos
        </div>
        <div
          className="py-2 px-4 bg-green-teal bg-opacity-75 rounded-3xl border-2 border-green-pale"
          onClick={() => {
            navigate("/payment");
          }}
        >
          Modificar Diseño
        </div>
        <div
          className="py-2 px-8 bg-black-pitch bg-opacity-60 rounded-3xl border border-white"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          La quiero
        </div>
      </div>
      <EventCreation
        modalOpen={formModalOpen}
        setModalOpen={setFormModalOpen}
      />
      <EventSelection
        modalOpen={eventFormModal}
        setModalOpen={setEventFormModalOpen}
      />
    </div>
  );
};

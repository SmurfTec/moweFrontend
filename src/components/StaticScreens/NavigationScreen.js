import BackgroundImage from "assets/wed.jpg";
import DressImage from "assets/Dress.png"
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
import { ReactComponent as DressIcon } from "assets/Svgs/Dress.svg";

export const MainMenu = () => {
  return (
    <div
      className=" h-screen flex flex-col px-10 text-white font-extrabold"
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
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <LocationIcon className="h-10 w-10" />
            </div>
            <div className="text-cmd bg-black-pitch bg-opacity-40 px-4 rounded-full py-2">
              Ubicación
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <ClockIcon className="h-10 w-10" />
            </div>
            <div className="text-cmd bg-black-pitch bg-opacity-40 px-4 rounded-full py-2">
              Countdown
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <img src={DressImage} className="h-10 w-10" alt=""/>
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
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <GiftIcon className="h-10 w-10" />
            </div>
            <div className="text-cmd bg-black-pitch bg-opacity-40 px-4 rounded-full py-2">
              Regalo
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-black-charcol flex items-center justify-center bg-opacity-60">
              <ShareIcon className="h-10 w-10" />
            </div>
            <div className="text-cmd bg-black-pitch bg-opacity-40 px-4 rounded-full py-2">
              RRSS
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
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
        <div className="py-2 px-4 bg-green-teal bg-opacity-75 rounded-3xl border-2 border-green-pale">
          Modificar Diseño
        </div>
        <div className="py-2 px-8 bg-black-pitch bg-opacity-60 rounded-3xl border border-white">
          La quiero
        </div>
      </div>
    </div>
  );
};
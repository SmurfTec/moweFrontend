import { useState } from "react";
import { Login } from "components/Login/Login";
import { useNavigate } from "react-router-dom";
import { Button } from "components/Common/Button/Button";
import { ReactComponent as AppLogo } from "assets/Svgs/AppLogo.svg";
import videoBackground from "assets/Videos/LandingVideo.mp4";
import ClassNames from "Helpers/Common";

const TAB1 = "Home";
const TAB2 = "QUÉ HACEMOS";
const TAB3 = "GALERÍA";
const TAB4 = "FAQ";

const VideoPlayer = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
      </video>
    </div>
  );
};
export const Navbar = () => {
  const navigate = useNavigate();
  const currUser = JSON.parse(localStorage.getItem("USER_CREDENTIALS"));

  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(TAB1);

  const logoutNow = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div
        className={ClassNames(
          "transition-all duration-1000 ease-in-out h-screen flex flex-col justify-between px-10 pb-20",
          modalOpen && "filter blur-md"
        )}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <VideoPlayer />
        <div className="home_logo_wraper flex flex-row items-center justify-between -mt-10 z-10">
          <AppLogo className="h-80" />
          <div className="flex gap-10">
            {currUser ? (
              <Button
                btnText="Log Out"
                className="w-40 !bg-green-teal !shadow-6xl text-white"
                onClick={logoutNow}
              />
            ) : (
              <Button
                btnText="Log In"
                className="w-40 !bg-green-teal !shadow-6xl text-white"
                onClick={() => {
                  setModalOpen(true);
                }}
              />
            )}
            <Button
              btnText="Tu Invitación"
              className="w-60 bg-white !shadow-6xl"
              onClick={() =>
                window.open(
                  "https://mowe-tau.vercel.app/event/design/start",
                  "_self"
                )
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-4xl text-white z-10">
          <div>Crea una experiencia</div>
          <div className="font-semibold">ÚNICA</div>
          <div>para tu gran día!</div>
        </div>
        <div className="flex w-full items-start justify-center gap-10  text-xl text-white z-10">
          <div
            onClick={() => {
              setActiveTab(TAB1);
              navigate("/menu");
            }}
            className={ClassNames(
              "flex justify-center flex-col items-center",
              activeTab === TAB1 && "font-semibold"
            )}
          >
            Home
            {activeTab === TAB1 && (
              <div className="border border-t-white w-20 rounded-none mt-3" />
            )}
          </div>
          <div
            onClick={() => {
              setActiveTab(TAB2);
            }}
            className={ClassNames(
              "flex justify-center flex-col items-center",
              activeTab === TAB2 && "font-semibold"
            )}
          >
            QUÉ HACEMOS
            {activeTab === TAB2 && (
              <div className="border border-t-white w-40 rounded-none mt-3" />
            )}
          </div>
          <div
            onClick={() => {
              setActiveTab(TAB3);
            }}
            className={ClassNames(
              "flex justify-center flex-col items-center",
              activeTab === TAB3 && "font-semibold"
            )}
          >
            GALERÍA
            {activeTab === TAB3 && (
              <div className="border border-t-white w-32 rounded-none mt-3" />
            )}
          </div>
          <div
            onClick={() => {
              setActiveTab(TAB4);
            }}
            className={ClassNames(
              "flex justify-center flex-col items-center",
              activeTab === TAB4 && "font-semibold"
            )}
          >
            FAQ
            {activeTab === TAB4 && (
              <div className="border border-t-white w-20 rounded-none mt-3" />
            )}
          </div>
        </div>
      </div>
      <Login modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

import ModalBasic, { Modal } from "components/Modal/BasicModal";
import { ReactComponent as UserIcon } from "assets/Svgs/User.svg";
import { InputField } from "components/Common/InputField/InputField";
import { useState, useEffect } from "react";
import { Button } from "components/Common/Button/Button";
import { TextArea } from "components/Common/TextArea/TextArea";
import "react-datepicker/dist/react-datepicker.css";
import ClassNames from "Helpers/Common";
import { ReactComponent as AppLogo } from "assets/Svgs/AppLogo.svg";
import { ReactComponent as EditIcon } from "assets/Svgs/Edit.svg";
import VideoIcon1 from "assets/Images/Video.png";
import VideoIcon2 from "assets/Images/Video1.png";
import VideoIcon3 from "assets/Images/Video2.png";

import { ReactComponent as ExclaminationIcon } from "assets/Svgs/Exclamination.svg";
import GalleryImage1 from "assets/Images/Upload1.png";
import GalleryImage2 from "assets/Images/Upload2.png";
import GalleryImage3 from "assets/Images/Upload3.png";
import GalleryImage4 from "assets/Images/Upload4.png";
import CarouselImage1 from "assets/Images/VideoCarousel1.png";
import CarouselImage2 from "assets/Images/VideoCarousel2.png";

import { ReactComponent as RightIcon } from "assets/Svgs/LeftColorIcon.svg";
import { ReactComponent as LeftIcon } from "assets/Svgs/RightColorIcon.svg";

import "./date.css";
import { DragDropFile } from "components/Common/UploadFile/DragDropUploadFile";
import { Spinner } from "components/Common/LoadingSpinner/Spinner";
export const EMAIL_INVALID = "Email is Invalid";

export const VideoPhotoEditing = ({ modalOpen = false, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ModalBasic open={modalOpen} onClose={() => setModalOpen(false)}>
      {currentStep < 3 && (
        <div className="text-c2xl text-green-none mb-2 mt-[10%]">
          ¡Vamos a diseñar tu invitación!
        </div>
      )}
      <div className="bg-smoke-white w-[87rem] min-h-[47rem] flex flex-col gap-3 p-4 justify-between rounded-2xl">
        <div className="flex flex-col gap-8 py-6 px-10 min-h-[40rem] rounded-2xl">
          {currentStep !== 3 && (
            <div className="flex w-full justify-end">
              <ExclaminationIcon className="h-8 w-8" />
            </div>
          )}
          {/* <Header setModalOpen={setModalOpen} currentStep={currentStep} /> */}
          <EventSelecionForms
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
        <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </ModalBasic>
  );
};

const Footer = ({ currentStep, setCurrentStep }) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 7;

  return (
    <div
      className={ClassNames(
        "flex gap-3",
        currentStep === 4 ? "justify-end" : "justify-between",
      )}
    >
      {currentStep !== 4 && (
        <Button
          btnText={"Atrás"}
          className={ClassNames("w-40 text-gray-dark bg-white")}
          onClick={() => {
            if (currentStep > 1 && currentStep <= 7) {
              setCurrentStep((prevState) => prevState - 1);
            } else setCurrentStep(1);
          }}
        />
      )}
      <Button
        btnText={"Siguiente"}
        lassName={ClassNames(
          "w-40 shadow-lg",
          currentStep === 4
            ? "bg-gray-whitish text-black"
            : "!bg-green-teal text-white",
        )}
        onClick={() => {
          if (currentStep < 7) {
            setCurrentStep((prevState) => prevState + 1);
          } else setCurrentStep(7);
        }}
      />
    </div>
  );
};
const EventSelecionForms = ({ currentStep, setCurrentStep }) => {
  switch (currentStep) {
    case 1:
      return <Content1 setCurrentStep={setCurrentStep} />;
    case 2:
      return <Content2 setCurrentStep={setCurrentStep} />;
    case 3:
      return <Content3 setCurrentStep={setCurrentStep} />;
    case 4:
      return <Content4 setCurrentStep={setCurrentStep} />;
    case 5:
      return <Content5 setCurrentStep={setCurrentStep} />;
    default:
      return "No case found";
  }
};
const Content1 = ({ setCurrentStep }) => {
  return (
    <div className="min-h-full flex flex-col gap-4">
      <div className="text-c2lg">Carga tu fotos</div>
      <div className="text-csm text-green-none">
        Para empezar, vamos a subir 2 vídeos o fotos. El principal se mostrará
        en la portada de la invitación y el secundario en el apartado “cuenta
        atrás”.
        <div className="text-csm text-black-semi">
          Si no encuentras la foto perfecta, no te preocupes, vas a poder
          modificarla después.
        </div>
      </div>
      <div className="flex gap-10 justify-between items-center bg-white opacity-100 h-[35rem] rounded-2xl px-5">
        <div className="flex flex-col gap-3">
          <div className="text-c2lg font-normal flex w-full justify-center">
            Foto/Video Principal
          </div>
          <DragDropFile />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-c2lg font-normal flex w-full justify-center">
            Foto/Video Secundario
          </div>
          <DragDropFile />
        </div>
      </div>
    </div>
  );
};
const Content2 = ({ setCurrentStep }) => {
  return (
    <div className="min-h-full flex flex-col gap-4">
      <div className="text-c2lg">Carga tu fotos</div>
      <div className="text-csm text-green-none">
        Para empezar, vamos a subir 2 vídeos o fotos. El principal se mostrará
        en la portada de la invitación y el secundario en el apartado “cuenta
        atrás”.
        <div className="text-csm text-black-semi">
          Si no encuentras la foto perfecta, no te preocupes, vas a poder
          modificarla después.
        </div>
      </div>
      <div className="flex gap-10 justify-between items-center bg-white opacity-100 h-[35rem] rounded-2xl px-5">
        <div className="flex flex-col gap-3">
          <div className="text-c2lg font-normal flex w-full justify-center">
            Foto/Video Principal 2
          </div>
          <DragDropFile srcFile={GalleryImage1} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-c2lg font-normal flex w-full justify-center">
            Foto/Video Secundario
          </div>
          <DragDropFile />
        </div>
      </div>
    </div>
  );
};
const Content3 = ({ setCurrentStep }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="h-[19rem] w-[27rem] object-cover object-center rounded-2xl">
        <img src={GalleryImage1} className="h-full w-full rounded-2xl" alt="" />
      </div>
      <div className="h-[19rem] w-[27rem] object-cover object-center rounded-2xl">
        <img src={GalleryImage4} className="h-full w-full rounded-2xl" alt="" />
      </div>
      <div className="h-[19rem] w-[27rem] object-cover object-center rounded-2xl">
        <img src={GalleryImage3} className="h-full w-full rounded-2xl" alt="" />
      </div>
      <div className="h-[19rem] w-[27rem] object-cover object-center rounded-2xl">
        <img src={GalleryImage2} className="h-full w-full rounded-2xl" alt="" />
      </div>
      <div className="h-[19rem] w-[27rem] object-cover object-center rounded-2xl">
        <img src={GalleryImage1} className="h-full w-full rounded-2xl" alt="" />
      </div>
      <div className="h-[19rem] w-[27rem] object-cover object-center rounded-2xl">
        <img src={GalleryImage4} className="h-full w-full rounded-2xl" alt="" />
      </div>
    </div>
  );
};
const Content4 = () => {
  const [selectedVideo, setSelectedVideo] = useState(VideoIcon1);
  return (
    <div className="min-h-full flex flex-col gap-4">
      <div className="text-c2lg"> ¡Vamos a sorprender a los invitados!</div>

      <div className="text-csm text-black-semi">
        Esta animación dará paso a tu invitación
      </div>
      <div className="flex gap-10 justify-between items-center bg-white opacity-100 h-[35rem] rounded-2xl px-5">
        <div className="flex gap-10 h-full">
          <div className="w-[25rem] overflow-y-auto p-4">
            <img
              src={VideoIcon1}
              alt=""
              className="w-[30rem] object-cover object-center"
              onClick={() => setSelectedVideo(VideoIcon1)}
            />
            <img
              src={VideoIcon2}
              alt=""
              className="w-[30rem] object-cover object-center"
              onClick={() => setSelectedVideo(VideoIcon2)}
            />
            <img
              src={VideoIcon3}
              alt=""
              className="w-[30rem] object-cover object-center"
              onClick={() => setSelectedVideo(VideoIcon3)}
            />
          </div>
          <div className="flex justify-center items-center w-[50rem]">
            <img
              src={selectedVideo}
              alt=""
              className="w-[80rem] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Content5 = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [prevSlide, setPrevSlide] = useState(null);
  const [isLeftIconClicked, setIsLeftIconClicked] = useState(false);
  useEffect(() => {
    setPrevSlide(currentSlide);
  }, [currentSlide]);
  return (
    <div className="min-h-full flex flex-col gap-4">
      <div className="text-c2lg">
        {" "}
        Elige un diseño que te guste, después lo podrás personalizar
      </div>

      <div className="flex gap-10 justify-between items-center bg-white opacity-100 h-[35rem] rounded-2xl">
        <div className="flex h-full">
          <div className="flex justify-center items-center w-[10rem]">
            <LeftIcon
              className="h-8 w-8 lg:h-20 lg:w-20 cursor-pointer"
              onClick={() => {
                if (currentSlide === 1) {
                  setCurrentSlide(4);
                } else setCurrentSlide((prevState) => prevState - 1);
                setIsLeftIconClicked(true);
              }}
            />
          </div>
          <div
            className={ClassNames(
              "flex justify-between items-center w-[60rem]",
              currentSlide === prevSlide &&
                !isLeftIconClicked &&
                "animate-slide",
              currentSlide === prevSlide &&
                isLeftIconClicked &&
                "animate-slidel",
            )}
          >
            <img src={CarouselImage1} alt="" />
            <img src={CarouselImage2} alt="" />
          </div>
          <div className="flex justify-center items-center w-[10rem]">
            <RightIcon
              className="h-8 w-8 lg:h-20 lg:w-20 cursor-pointer"
              onClick={() => {
                if (currentSlide === 4) {
                  setCurrentSlide(1);
                } else setCurrentSlide((prevState) => prevState + 1);
                setIsLeftIconClicked(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const CustomUploadFile = ({
  id = "upload-file",
  label = "Imagen:",
  value = "",
  onResponse,
  mode = "View",
}) => {
  const [fieldError, setFieldError] = useState("");
  const [upLoading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");

  return (
    <div className="flex items-center gap-4">
      <div
        className={ClassNames(
          "flex text-sm justify-center items-center mt-4",
          // fieldError ? "bg-red-500" : "bg-blue-500",
        )}
      >
        <label
          htmlFor={id}
          className="text-blue-light relative cursor-pointer bg-white rounded-md focus:outline-none"
        >
          <span className="bg-gray-snow border border-gray-400 px-6 py-2 rounded-md">
            {upLoading ? <Spinner width="4" height="4" /> : "Cargar"}
          </span>
          {!upLoading ? (
            <input
              id={id}
              name="file-upload"
              type={"file"}
              onChange={({ target }) => {
                console.log("Target file is", target);
                // FileUploadToServer(target);
              }}
              className="sr-only"
            />
          ) : (
            ""
          )}
        </label>
      </div>
      <div className="flex flex-col w-11/12">
        <label className="block text-sm font-semibold sapphire">{label}</label>

        <div
          className={ClassNames(
            "mt-1 border-2 border-gray-300 rounded-md py-10 px-4 flex justify-between items-center w-full",
            fieldError
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500",
          )}
        >
          <div
            className={ClassNames(
              "relative",
              fieldError ? "bg-red-500" : "light_grayish_navy",
            )}
          >
            {fileName && (
              <span className="text-sm pl-6 sapphire">{fileName}</span>
            )}
          </div>
        </div>
      </div>
      {fieldError && (
        <div
          className="pt-2 text-sm text-red-600 font-poppins"
          id={`${label}-error`}
        >
          {fieldError}
        </div>
      )}
    </div>
  );
};

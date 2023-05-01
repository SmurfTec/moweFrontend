import ModalBasic, { Modal } from "components/Modal/BasicModal";
import { ReactComponent as ArrowDown } from "assets/Svgs/ArrowDown.svg";
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
import CarouselImage from "assets/Images/CarouselImage.png";

import { ReactComponent as RightIcon } from "assets/Svgs/LeftColorIcon.svg";
import { ReactComponent as LeftIcon } from "assets/Svgs/RightColorIcon.svg";
import { ReactComponent as RightArrow } from "assets/Svgs/rightArrow.svg";
import { ReactComponent as BackArrow } from "assets/Svgs/BackArrow.svg";
import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
import { ChromePicker } from "react-color";
import BackgroundImage from "assets/Images/EventCreation.jpg";
import GalleryIcon from "assets/Images/GalleryIcon.jpg";
 

import "./date.css";
import { DragDropFile } from "components/Common/UploadFile/DragDropUploadFile";
import { Spinner } from "components/Common/LoadingSpinner/Spinner";
export const EMAIL_INVALID = "Email is Invalid";

export const VideoPhotoEditing = ({ modalOpen = false, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState(5);
  const [ExclaminationIconClicked, setExclaminationIconClicked] =
    useState(false);
    const [openGalleryModal,setOpenGalleryModal] = useState(false);
  return (
    <div
      className="h-screen flex flex-col justify-between items-center text-white font-extrabold py-[1%]"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-96 w-full px-20 -mt-24">
        {" "}
        <AppLogo className="2xl:h-96 " />
      </div>

      <div className="text-c2xl text-green-none mb-[.5%] w-full px-[4.5%] -mt-28">
        ¡Vamos a diseñar tu invitación!
      </div>
      <div className="bg-smoke-white w-[110rem]  flex flex-col gap-3 py-4 justify-between rounded-2xl h-[55rem] overflow-y-auto px-20">
        {currentStep !== 4 && (
          <div className="flex w-full justify-end ">
            <ExclaminationIcon
              className="h-8 w-8 cursor-pointer"
              onClick={() => {
                setExclaminationIconClicked(!ExclaminationIconClicked);
              }}
            />
          </div>
        )}
        {ExclaminationIconClicked && currentStep===1&&(
          <div 
          className={ClassNames("flex w-full justify-end",
          openGalleryModal?"hidden":"z-20 -ml-[19%] mt-1 absolute"
          )}
          >
            <div className="bg-gray-extraDark  rounded-lg w-80 flex flex-col gap-2 items-center justify-center py-4">
              <div className="text-white font-bold mb-2 text-csm flex flex-col items-center justify-center">
                <div className="flex w-[18rem] justify-end">
                  {" "}
                  <CrossIcon
                    className="h-5 w-5 text-white cursor-pointer"
                    onClick={() => {
                      setOpenGalleryModal(false)
                      setExclaminationIconClicked(!ExclaminationIconClicked);
                    }}
                  />
                </div>
                <div> ¿No sabes que foto subir?</div>
                <div> Mira algunos ejemplos</div>
              </div>
              <div>
                <Button
                  btnText={"Aquí"}
                  rightAlignTex={true}
                  className={ClassNames(
                    "w-24 shadow-lg  !bg-gray-whitish border border-gray-light text-gray-dark12 h-10",
                  )}
                  onClick={() => {setOpenGalleryModal(true)}}
                />
              </div>
            </div>
          </div>
        )}
        {/* <Header setModalOpen={setModalOpen} currentStep={currentStep} /> */}
        <EventSelecionForms
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} setExclaminationIconClicked={setExclaminationIconClicked}/>
      </div>
     {openGalleryModal&&
      <ModalBasic open={openGalleryModal} onClose={() => setOpenGalleryModal(false)} bgClassName="bg-black-pitch bg-opacity-75 backdrop-filter backdrop-blur-lg">
      <div className="bg-white py-14 px-16  overflow-hidden z-50 flex flex-col gap-10 rounded-2xl">
      <div className="text-c2lg text-black-deep font-medium flex gap-10 items-center ">
      <BackArrow className="h-5 w-5 cursor-pointer" onClick={() => setOpenGalleryModal(false)}/>
      Galería de ejemplos</div>
        <Content3/>
      </div>
    </ModalBasic>
     }
    </div>
  );
};

const Footer = ({ currentStep, setCurrentStep,setExclaminationIconClicked }) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 7;

  return (
    <div className={ClassNames("flex gap-3 justify-between")}>
      <Button
        btnText={"Atrás"}
        className={ClassNames("w-40 text-gray-dark bg-white")}
        onClick={() => {
          if (currentStep > 1 && currentStep <= 7) {
            setCurrentStep((prevState) => prevState - 1);
          } else setCurrentStep(1);
        }}
      />
      <Button
        btnText={"Siguiente"}
        className={ClassNames("w-40 shadow-lg !bg-green-teal text-white")}
        onClick={() => {
          if (currentStep < 7) {
            setCurrentStep((prevState) => prevState + 1);
          } else setCurrentStep(7);
          setExclaminationIconClicked(false)
        }}
      />
    </div>
  );
};
const EventSelecionForms = ({ currentStep, setCurrentStep }) => {
  switch (currentStep) {
    case 1:
      return (
        <Content1 setCurrentStep={setCurrentStep} currentStep={currentStep} />
      );
    case 2:
      return (
        <Content2 setCurrentStep={setCurrentStep} currentStep={currentStep} />
      );
    case 3:
      return (
        <Content4 setCurrentStep={setCurrentStep} currentStep={currentStep} />
      );
    case 4:
      return (
        <Content5 setCurrentStep={setCurrentStep} currentStep={currentStep} />
      );
    case 5:
      return (
        <Content6 setCurrentStep={setCurrentStep} currentStep={currentStep} />
      );

    default:
      return "No case found";
  }
};
const Content1 = ({ currentStep }) => {
  return (
    <div className=" flex flex-col gap-2">
      <div className="text-c2lg text-black-gray pl-2">Carga tu fotos</div>
      <div className="text-csm text-green-none pl-2">
        Para empezar, vamos a subir 2 vídeos o fotos. El principal se mostrará
        en la portada de la invitación y el secundario en el apartado “cuenta
        atrás”.
        <div className="text-csm text-black-semi">
          Si no encuentras la foto perfecta, no te preocupes, vas a poder
          modificarla después.
        </div>
        <div className="flex w-full justify-end pr-2 text-cmd text-black-deep">
          Paso {currentStep} de 4
        </div>
      </div>
      <div className="flex gap-10 justify-between items-center bg-white opacity-100 h-[28rem] rounded-2xl px-5">
        <div className="flex flex-col gap-3">
          <div className="text-c2lg font-normal flex w-full justify-center text-black-pitch">
            Foto/Video Principal
          </div>
          <DragDropFile />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-c2lg font-normal flex w-full justify-center text-black-pitch">
            Foto/Video Secundario
          </div>
          <DragDropFile />
        </div>
      </div>
    </div>
  );
};
const Content2 = ({ currentStep }) => {
  return (
    <div className="flex flex-col gap-3 -mt-4">
      <div className="text-c2lg text-black-gray pl-2">Carga tu fotos</div>
      <div className="text-csm text-green-none pl-2">
        Para empezar, vamos a subir 2 vídeos o fotos. El principal se mostrará
        en la portada de la invitación y el secundario en el apartado “cuenta
        atrás”.
        <div className="text-csm text-black-semi">
          Si no encuentras la foto perfecta, no te preocupes, vas a poder
          modificarla después.
        </div>
        <div className="flex w-full justify-end pr-2 text-cmd text-black-deep">
          Paso {currentStep} de 4
        </div>
      </div>
      <div className="flex gap-10 justify-between items-center bg-white opacity-100 h-[28rem] rounded-2xl px-5">
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
const Content4 = ({ currentStep }) => {
  const [selectedVideo, setSelectedVideo] = useState(VideoIcon1);
  return (
    <div className=" flex flex-col gap-2">
      <div className="text-c2lg text-black-gray pl-2 -mt-5">
        {" "}
        ¡Vamos a sorprender a los invitados!
      </div>

      <div className="text-csm text-black-semi pl-3 ">
        Esta animación dará paso a tu invitación
      </div>
      <div className="flex w-full justify-end pr-2 text-cmd text-black-deep -mt-3">
        Paso {currentStep} de 4
      </div>
      <div className="flex gap-10 justify-between items-center bg-white opacity-100 h-[31rem] rounded-2xl px-5">
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
          <div className="flex justify-center items-center w-[50rem] ml-40">
            <img
              src={selectedVideo}
              alt=""
              className="w-full object-cover object-center"
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
    <div className="flex flex-col gap-8">
      <div className="w-full flex justify-between items-center mt-6">
        <div className="text-c2lg text-black-gray pl-2 flex gap-3 items-center">
          {" "}
          <BackArrow className="h-4 w-4" />
          Elige un diseño que te guste, después lo podrás personalizar
        </div>
        <Button
          btnText={"Mas diseños"}
          rightAlignTex={true}
          className={ClassNames(
            "w-60 shadow-lg !text-c2lg !bg-white border border-gray-light text-gray-500",
          )}
          onClick={() => {}}
        >
          <RightArrow className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-10 justify-between items-center bg-white opacity-100 h-[32rem] rounded-2xl">
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
              "flex justify-between items-center w-[80rem]",
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

const Content6 = ({ setCurrentStep }) => {

  return (
    <>
      <div className="text-c2lg text-black-deep"> make it unique</div>
      <div className="grid grid-cols-2 gap-10">
        <img src={CarouselImage} alt="" className="" />
        <div className="flex justify-between">
          <div className="w-1/2 ">
            <ColorPicker />
          </div>
          <div className="w-1/2 ">fds</div>
          <div>
               
                <p className="apply-font">The font will be applied to this text.</p>
            </div>
        </div>
        {/* <FontPicker/> */}
      </div>
    </>
  );
};

const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (colorObject) => {
    setColor(colorObject.hex);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative border border-silver-light py-2 w-[50%] px-2">
      <div className="flex items-center">
        <div className="mr-2 text-black-pitch">Color:</div>
        <div
          className="w-6 h-6 rounded-md border border-gray-400 ml-1"
          style={{ backgroundColor: color }}
        />
        <div className="ml-2 cursor-pointer" onClick={toggleDropdown}>
          <ArrowDown className="h-4 w-4 ml-1" />
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 z-10">
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};





export default ColorPicker;

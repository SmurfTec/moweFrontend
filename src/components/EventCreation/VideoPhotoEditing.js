import ModalBasic from "components/Modal/BasicModal";
import { ReactComponent as ArrowDown } from "assets/Svgs/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "assets/Svgs/ArrowUp.svg";

import { useState, useEffect } from "react";
import { Button } from "components/Common/Button/Button";
import "react-datepicker/dist/react-datepicker.css";
import ClassNames from "Helpers/Common";
import { ReactComponent as AppLogo } from "assets/Svgs/AppLogo.svg";
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
import welcomImg from "assets/Svgs/Hand.svg"

import { ReactComponent as RightIcon } from "assets/Svgs/LeftColorIcon.svg";
import { ReactComponent as LeftIcon } from "assets/Svgs/RightColorIcon.svg";
import { ReactComponent as RightArrow } from "assets/Svgs/rightArrow.svg";
import { ReactComponent as BackArrow } from "assets/Svgs/BackArrow.svg";
import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
import { ChromePicker } from "react-color";
import BackgroundImage from "assets/Images/EventCreation.jpg";
import "./date.css";
import { DragDropFile } from "components/Common/UploadFile/DragDropUploadFile";
import { useMediaCreationContext } from "Context/EventEditing";

export const EMAIL_INVALID = "Email is Invalid";

export const VideoPhotoEditing = ({ modalOpen = false, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [ExclaminationIconClicked, setExclaminationIconClicked] =
    useState(false);
  const [openGalleryModal, setOpenGalleryModal] = useState(false);
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

      {/* <div className="text-c2xl text-green-none mb-[.5%] w-full px-[4.5%] -mt-28">
        ¡Vamos a diseñar tu invitación!
      </div> */}
      <div
        className={ClassNames(
          "bg-smoke-white w-100 flex flex-col gap-3 py-4 justify-between rounded-2xl overflow-y-auto px-18",
          // currentStep===5?"bg-white":""
        )}
      >
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

        {ExclaminationIconClicked && currentStep === 1 && (
          <div
            className={ClassNames(
              "flex w-full justify-end",
              openGalleryModal ? "hidden" : "z-20 -ml-[19%] mt-1 absolute",
            )}
          >
            <div className="bg-gray-extraDark  rounded-lg w-80 flex flex-col gap-2 items-center justify-center py-4">
              <div className="text-white font-bold mb-2 text-csm flex flex-col items-center justify-center">
                <div className="flex w-[18rem] justify-end">
                  {" "}
                  <CrossIcon
                    className="h-5 w-5 text-white cursor-pointer"
                    onClick={() => {
                      setOpenGalleryModal(false);
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
                  onClick={() => {
                    setOpenGalleryModal(true);
                  }}
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
        <Footer
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setExclaminationIconClicked={setExclaminationIconClicked}
        />
      </div>
      {openGalleryModal && (
        <ModalBasic
          open={openGalleryModal}
          onClose={() => setOpenGalleryModal(false)}
          bgClassName="bg-black-pitch bg-opacity-75 backdrop-filter backdrop-blur-lg"
        >
          <div className="bg-white py-14 px-16  overflow-hidden z-50 flex flex-col gap-10 rounded-2xl">
            <div className="text-c2lg text-black-deep font-medium flex gap-10 items-center ">
              <BackArrow
                className="h-5 w-5 cursor-pointer"
                onClick={() => setOpenGalleryModal(false)}
              />
              Galería de ejemplos
            </div>
            <Content3 />
          </div>
        </ModalBasic>
      )}
    </div>
  );
};

const Footer = ({
  currentStep,
  setCurrentStep,
  setExclaminationIconClicked,
}) => {
  return (
    <div style={currentStep===1 && {display: 'none'}} className={ClassNames("flex gap-3 justify-between")}>
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
          setExclaminationIconClicked(false);
        }}
      />
    </div>
  );
};

const EventSelecionForms = ({ currentStep, setCurrentStep }) => {
  switch (currentStep) {
    case 1:
      return (
        <Content2 setCurrentStep={setCurrentStep} currentStep={currentStep} />
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

const Content1 = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="step_1 bg-white">
      <div className="flex items-center pt-9 px-2">
      <img src={welcomImg} className="m-auto" alt="" />
      </div>
      <div className="welcome_auto">
        <h2 className="text-3xl text-black-gray text-center my-9 pl-2">Welcome to your wedding invitation designer!</h2>
        <p className="text-3xl text-black-gray text-center my-8 pl-2">if you’re ready, let’s design the perfect invitation for the Big Day! </p>
      </div>  
      <div className="btn_Wraper">
        <Button
          btnText={"Start"}
          className={ClassNames("w-40 shadow-lg !bg-green-teal text-white")}
          onClick={() => {
            setCurrentStep(3)
          }}
        />
      </div>
    </div>
  );
};

const Content2 = ({ currentStep }) => {
  const { media, setMediaState } = useMediaCreationContext();

  const handleImageUpload1 = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMediaState({
          ...media,
          media1: { url: reader.result, type: file.type },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload2 = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMediaState({
          ...media,
          media2: { url: reader.result, type: file.type },
        });
      };
      reader.readAsDataURL(file);
    }
  };
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
          <DragDropFile
            key={media?.media2 || "no-file"}
            id="file-upload2"
            srcFile={media?.media2}
            handleFileUpload={handleImageUpload1}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-c2lg font-normal flex w-full justify-center">
            Foto/Video Secundario
          </div>
          <DragDropFile
            key={media?.media2 || "no-file"}
            id="file-upload2"
            srcFile={media?.media2}
            handleFileUpload={handleImageUpload2}
          />
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

const Content6 = ({ setCurrentStep }) => {
  const [color, setColor] = useState("#F2C8DC");
  const [color2, setColor2] = useState("#C4EBD8");
  const [color3, setColor3] = useState("#000000");
  const [color4, setColor4] = useState("#FFFFFF");
  const [titleFont, setSelectedTitle] = useState("");
  const [nameFont, setNameFont] = useState("");
  const [textBoxFont, setTextBoxFont] = useState("");
  const [textFont, setTextFont] = useState("");

  return (
    <div className="bg-white">
      <div className="text-c2lg text-black-deep"> make it unique</div>
      <div className="grid grid-cols-2 gap-10">
        <img src={CarouselImage} alt="" className="" />
        <div className="grid grid-cols-2">
          <div className="">
            <div>
              <div>
                <p style={{ color: `${color}`, fontFamily: `${titleFont}` }}>
                  The font will be applied to this text.
                </p>
              </div>
            </div>
          </div>

          <div className="h-full p-0">
            <div className="flex flex-col gap-10 items-center h-full p-0">
              <div className="h-20 flex items-center justify-between gap-6">
                <FontPicker
                  selectedFont={titleFont}
                  setSelectedFont={setSelectedTitle}
                  heading="Titles:"
                />
                <div className=" mt-7 ">
                  <ColorPicker color={color} setColor={setColor} />
                </div>
              </div>
              <div className="h-20 flex items-center justify-between gap-6">
                <FontPicker
                  selectedFont={nameFont}
                  setSelectedFont={setNameFont}
                  heading="Your names:"
                />
                <div className=" mt-7 ">
                  <ColorPicker color={color2} setColor={setColor2} />
                </div>
              </div>
              <div className="h-20 flex items-center justify-between gap-6">
                <FontPicker
                  selectedFont={textBoxFont}
                  setSelectedFont={setTextBoxFont}
                  heading="customized text boxes:"
                />
                <div className=" mt-7 ">
                  <ColorPicker color={color3} setColor={setColor3} />
                </div>
              </div>
              <div className="h-20 flex items-center justify-between gap-6">
                <FontPicker
                  selectedFont={textFont}
                  setSelectedFont={setTextFont}
                  heading="main plain text:"
                />
                <div className=" mt-7 ">
                  <ColorPicker color={color4} setColor={setColor4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ColorPicker = ({ color, setColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleColorChange = (colorObject) => {
    setColor(colorObject.hex);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative border border-silver-light h-[2.5rem]  px-2 flex items-center rounded-md"
      onClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
    >
      <div className="flex items-center">
        <div className="mr-2 text-black-pitch">Color:</div>
        <div
          className="w-6 h-6 rounded-md border border-gray-400 ml-1"
          style={{ backgroundColor: color }}
        />
        <div className="ml-2 cursor-pointer" onClick={toggleDropdown}>
          {isOpen ? (
            <ArrowUp className="h-4 w-4 ml-1" />
          ) : (
            <ArrowDown className="h-4 w-4 ml-1" />
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

const fontList = [
  "Arial",
  "Times New Roman",
  "Helvetica",
  "Georgia",
  "Verdana",
  "Comic Sans MS",
  "Trebuchet MS",
  "Calibri",
  "Courier New",
  "Palatino",
];

const FontPicker = ({ heading = "ds", selectedFont, setSelectedFont }) => {
  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  return (
    <div>
      <label htmlFor="font-picker" style={{ color: "black" }}>
        {heading}
      </label>
      <select
        id="font-picker"
        value={selectedFont}
        onChange={handleFontChange}
        className="block w-full mt-1 rounded-md border border-gray-400 focus:outline-none bg-transparent text-black-deep py-2"
      >
        {fontList.map((font) => (
          <option key={font} value={font} className="bg-white text-black-pitch">
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

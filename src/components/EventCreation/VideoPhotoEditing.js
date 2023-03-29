import ModalBasic, { Modal } from "components/Modal/BasicModal";
import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
import { ReactComponent as UserIcon } from "assets/Svgs/User.svg";
import { InputField } from "components/Common/InputField/InputField";
import { useState } from "react";
import { Button } from "components/Common/Button/Button";
import { TextArea } from "components/Common/TextArea/TextArea";
import DatePicker from "react-datepicker";
import { addDays, subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { UploadFile } from "components/Common/UploadFile/UploadFile";
import ClassNames from "Helpers/Common";
import { CheckBox } from "components/Common/CheckBox/CheckBox";
import { ReactComponent as AppLogo } from "assets/Svgs/AppLogo.svg";
import { ReactComponent as EditIcon } from "assets/Svgs/Edit.svg";
import { ReactComponent as ExclaminationIcon } from "assets/Svgs/Exclamination.svg";

import "./date.css";
import { DragDropFile } from "components/Common/UploadFile/DragDropUploadFile";
import { Spinner } from "components/Common/LoadingSpinner/Spinner";
export const EMAIL_INVALID = "Email is Invalid";

export const VideoPhotoEditing = ({ modalOpen = false, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ModalBasic open={modalOpen} onClose={() => setModalOpen(false)}>
      {currentStep !== 3 && (
        <div className="text-c2xl text-green-none mb-2 mt-[10%]">
          ¡Vamos a diseñar tu invitación!
        </div>
      )}
      <div className="bg-smoke-white w-[87rem] max-h-[47rem] flex flex-col justify-between rounded-2xl">
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
          <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
      </div>
    </ModalBasic>
  );
};

const Footer = ({ currentStep, setCurrentStep }) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 7;

  return (
    <div className="flex gap-3 justify-between">
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
        className="w-40 !bg-green-teal shadow-lg text-white"
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
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col  items-center justify-center min-h-[35rem]">
      <div className="flex w-full justify-end items-start -mt-[10%]">
        <AppLogo className="h-80" />
      </div>
      <div className="flex gap-20 w-full items-center -mt-[15%] z-10">
        <div className="w-32 h-32 rounded-full bg-white  border border-gray-medium flex items-center justify-center relative">
          <UserIcon className="h-16 w-16" />
          <EditIcon className="h-16 w-16 -mt-[80%] ml-[70%] absolute" />
        </div>
        <div className="text-black text-c3xl  font-medium">Usurario1</div>
      </div>
      <div className="h-[28rem] bg-green-gray w-11/12 flex flex-col gap-10 justify-center px-20 rounded-2xl -mt-[3%]">
        <div className="flex flex-col gap-10 h-full items-center justify-center">
          <InputField
            id="contraseña anterior"
            type="password"
            label="contraseña anterior"
            placeholder="contraseña anterior"
            className="shadow-md bg-gray-snow border-gray-platinum w-[30rem]"
            className1="bg-gray-snow py-[.3rem]"
            isRequired={false}
            onChange={(fieldValue) => setPassword(fieldValue.trim())}
          />
          <InputField
            id="Contraseña nueva"
            type="password"
            label="Contraseña nueva"
            placeholder="Contraseña nueva"
            className="shadow-md bg-gray-snow border-gray-platinum w-[30rem]"
            className1="bg-gray-snow py-[.3rem]"
            isRequired={false}
            onChange={(fieldValue) => setPassword(fieldValue.trim())}
          />{" "}
          <InputField
            id="Confirmar contraseña nueva"
            type="password"
            label="Confirmar contraseña nueva"
            placeholder="Confirmar contraseña nueva"
            className="shadow-md bg-gray-snow border-gray-platinum w-[30rem]"
            className1="bg-gray-snow py-[.3rem]"
            isRequired={false}
            onChange={(fieldValue) => setPassword(fieldValue.trim())}
          />
        </div>
      </div>
      <div className="flex w-[85%] justify-end">
        <Button
          btnText="Guardar cambios"
          className="w-60 !bg-silver-dull shadow-lg py-3 ml-32 mt-10"
          onClick={() => {
            setCurrentStep((prevState) => prevState + 1);
          }}
        />
      </div>
    </div>
  );
};
const Content3 = ({ setCurrentStep }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col gap-10 justify-between min-h-[20rem] pl-12">
      <div className="text-c2lg text-black-gray">
        ¿No encuentras el diseño perfecto para tu boda?
      </div>

      <div className="flex flex-col gap-3">
        <div className="text-xl">Descripción::</div>
        <div className="w-11/12">
          <TextArea
            placeHolder="Describe como te gustaría que fuese..."
            isOptional={false}
            rows={4}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xl text-green-none">
          ¿Tienes una imagen de refencia?
        </div>
        <div className="w-11/12">
          <CustomUploadFile placeHolder="Describe como te gustaría que fuese..." />
        </div>
      </div>
      <div className="flex w-[92%] justify-end">
        <Button
          btnText="Enviar"
          className="w-48 !bg-green-teal shadow-lg text-white py-3"
          onClick={() => {
            setCurrentStep((prevState) => prevState - 2);
          }}
        />
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

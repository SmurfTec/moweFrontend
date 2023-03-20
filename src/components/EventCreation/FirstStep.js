import ModalBasic, { Modal } from "components/Modal/BasicModal";

import { ReactComponent as CrossIcon } from "assets/Cross.svg";
import { ReactComponent as BackIcon } from "assets/BackArrow.svg";

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
export const EMAIL_INVALID = "Email is Invalid";

export const FirstStep = ({ modalOpen = false, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ModalBasic open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className="bg-white  w-[74rem] min-h-[44rem] rounded-lg  flex flex-col justify-between pt-12 pb-12 pr-8 pl-8 ">
        <div className="flex flex-col gap-10 pb-8 min-h-[40rem]">
          <Header setModalOpen={setModalOpen} currentStep={currentStep} />
          <EventCreationForms currentStep={currentStep} />
        </div>
        <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </ModalBasic>
  );
};
const EventCreationForms = ({ currentStep }) => {
  switch (currentStep) {
    case 1:
      return <Content />;
    case 2:
      return <Content />;
    case 3:
      return <Content3 />;
    case 4:
      return <Content4 />;
    case 5:
      return <Content5 />;
    case 6:
      return <Content6 />;
    case 7:
      return <Content7 />;

    default:
      return "No case found";
  }
};
const Header = ({ isFirstStep = false, setModalOpen, currentStep }) => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-center gap-2 text-lg cursor-pointer">
        {currentStep === 1 && (
          <BackIcon
            className="h-5 w-5 cursor-pointer"
            // onClick={() => setModalOpen(false)}
          />
        )}
        <div className="text-cmd2 text-gray-dark flex items-center gap-2">
          <div>{isFirstStep ? "Back" : `Paso ${currentStep} de 7`}</div>
          <div className="text-csm text-gray-dark">
            (Se podrán modificar los datos después)
          </div>
        </div>
      </div>
      <div>
        <CrossIcon
          className="h-8 w-8 cursor-pointer"
          onClick={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};
const Footer = ({ currentStep, setCurrentStep }) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 7;

  return (
    <div className="flex gap-3 justify-end">
      <Button
        btnText={isFirstStep ? "Paso 1 de 7" : "Anterior"}
        className={ClassNames(
          "w-40 text-gray-dark",
          isFirstStep ? "bg-white" : "w-56 bg-gray-thin",
        )}
        onClick={() => {
          if (currentStep > 1 && currentStep <= 7) {
            setCurrentStep((prevState) => prevState - 1);
          } else setCurrentStep(1);
        }}
      />
      <Button
        btnText={isLastStep ? "Ya lo tienes" : "Siguiente"}
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
const Content = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="min-h-[30rem] flex flex-col gap-10">
      <div className="text-c2xl font-medium">
        Cuéntanos más detalles de tu boda!
      </div>
      <div className="text-c2lg">
        ¿Cómo os llamáis? (Así aparecerá en vuestra invitación)
      </div>
      <TextArea placeHolder="Jaume & Yolanda" isOptional={false} rows={3} />
      <div className="text-c2lg">Fecha y hora del evento</div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        excludeDateIntervals={[
          { start: subDays(new Date(), 1), end: addDays(new Date(), 5) },
        ]}
        placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
      />
    </div>
  );
};
const Content3 = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col gap-10 min-h-[35rem]">
      <div className="text-c2xl font-medium">
      ¿Cómo quieres que lleguen los invitados a tu boda? Hay alguna indicación?
      </div>
      <div className="text-c2lg flex items-center gap-3">
      ¿Habrá transporte? Cuéntaselo a los invitados
        <div className="flex h-6 items-center">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            value={isChecked}
            onChange={(prevState) => setIsChecked(!prevState)}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
      </div>
      <div className="w-2/5">
        <TextArea placeHolder="Jaume & Yolanda" isOptional={false} rows={3} />
      </div>
      <div className="flex justify-between items-center gap-20">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="text-c2lg">
          ¿Hay alguna indicación especial para aparcar?
          </div>
          <div className="w-full">
            <TextArea
              placeHolder="Jaume & Yolanda"
              isOptional={false}
              rows={3}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-4 -mt-[3%]">
          <div className="text-c2lg ">
          ¿Tienes un QR de acceso al parking? Compártelo aquí con tus invitados!
          </div>
          <div className="">
            <UploadFile
              mode={"Edit"}
              onBlur={() => {}}
              // value={formState?.uploadedFile}
              onResponse={({ data }) => {
                console.log(data);
                // setFormState({ type: SET_RESUME, payload: data });
              }}
            />
          </div>
        </div>
      </div>
      Vamos a ofrecer a los asistentes, hoteles cercanos al lugar que elijas
    </div>
  );
};
const Content4 = () => {
  
  return (
    <div className="flex flex-col gap-10 min-h-[35rem]">
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="text-c2lg">
          ¡El Dresscode es importante! Cuéntales el estilo de tu boda a los invitados!
          </div>
          <div className="w-10/12">
            <TextArea
              placeHolder="Jaume & Yolanda"
              isOptional={false}
              rows={5}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
      ¿No sabes que frase poner? Inspírate aquí:
        <Button
          btnText={"Ejemplos dresscode"}
          className={ClassNames("w-60 bg-gray-thin !py-1")}
          onClick={() => {}}
        />
      </div>
      <div className="w-2/3 cmd">
      Vamos a informar de la meteorología esperada a tus invitados! 
¿En qué ubicación queréis verla?
      </div>
    </div>
  );
};
const Content5 = () => {
  const [googleUrl, setGoogleUrl] = useState(false);
  const [instaUrl, setInstaUrl] = useState(false);
  const [fbUrl, setFBUrl] = useState(false);
  const [tikTokUrl, settikTokUrl] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="font-medium text-c2xl">¡Vamos a petar las redes sociales! </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="text-cmd1 text-gray-gunMetal">
          Añade tu hashtag favorito para que todo el mundo lo use en sus fotos y vídeos!
          </div>
          <div className="w-10/12">
            <TextArea
              placeHolder="#Hashtag"
              isOptional={false}
              rows={4}
              className="bg-gray-snow"
            />
          </div>
        </div>
      </div>
      <div className="flex">
      No te pierdas ninguna foto de tus invitados! dales tus redes sociales y que te etiqueten!
      </div>
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={googleUrl}
          onChange={(prevState) => setGoogleUrl(!prevState)}
        />
        <div className="text-c2lg w-40">Google Photos:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Escribe aquí..."
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={googleUrl}
          onChange={(prevState) => setGoogleUrl(!prevState)}
        />
        <div className="text-c2lg w-40">Instagram:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Escribe aquí..."
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={googleUrl}
          onChange={(prevState) => setGoogleUrl(!prevState)}
        />
        <div className="text-c2lg w-40">Tik Tok:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Escribe aquí..."
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>{" "}
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={googleUrl}
          onChange={(prevState) => setGoogleUrl(!prevState)}
        />
        <div className="text-c2lg w-40">Facebook:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Escribe aquí..."
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
    </div>
  );
};
const Content6 = () => {
  const [googleUrl, setGoogleUrl] = useState(false);
  const [instaUrl, setInstaUrl] = useState(false);
  const [fbUrl, setFBUrl] = useState(false);
  const [tikTokUrl, settikTokUrl] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="font-medium text-c2xl">
      ¿Quieres recibir un regalo de tus invitados?
      </div>
      <div className="text-xl"> ¡Hazlo ahora! Aparecerá en la sección de regalo de la invitación</div>
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-10/12">
            <TextArea
              placeHolder="Si nos queréis hacer un regalo de boda estaremos encantados..."
              isOptional={false}
              rows={4}
              className="bg-gray-snow"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
      ¿No sabes que frase poner? Inspírate aquí:
        <Button
          btnText={"Ejemplos regalos de boda"}
          className={ClassNames(
            "w-fit bg-gray-thin !py-1 font-extralight text-md",
          )}
          onClick={() => {}}
        />
      </div>
      <div className="flex">
        <div className="text-black text-c2lg">
        Opciones de regalo para los invitados
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Bizum:</div>
        <InputField
          className="w-[47rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Cuenta Bancaria:"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Cuenta Bancaria:</div>
        <InputField
          className="w-[47rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Cuenta Bancaria:"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Lista de bodas:</div>
        <InputField
          className="w-[47rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Cuenta Bancaria:"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>{" "}
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Paypal-Me:</div>
        <InputField
          className="w-[47rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Cuenta Bancaria:"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div className="flex gap-4 items-center mt-4">
        <div className="text-c2lg">No quiero regalos:</div>
        <CheckBox
          isChecked={googleUrl}
          onChange={(prevState) => setGoogleUrl(!prevState)}
        />
      </div>
    </div>
  );
};
const Content7 = () => {
  return (
    <div className="flex flex-col gap-3 h-96">
      <div className="font-medium text-c2xl pl-8">Ya casi estamos!!</div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className=" p-t-4 pb-4 w-9/12 text-c2lg">
        Tu invitación tendrá una URL personalizada, ¿Cuál quieres?
        </div>
        <div className="flex justify-between w-9/12">
          {" "}
          <InputField
            className="w-[32rem] shadow-md bg-gray-snow border-gray-platinum"
            className1="bg-gray-snow py-[.3rem]"
            id="Contraseña"
            placeholder="write here"
            type="text"
            isRequired={true}
            onChange={(value) => {}}
          />
          <Button
            btnText={"Comprobar disponibilidad"}
            className={ClassNames("w-72 bg-gray-thin py-1  text-md")}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

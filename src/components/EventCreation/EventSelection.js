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

import "./date.css";
export const EMAIL_INVALID = "Email is Invalid";

export const EventSelection = ({ modalOpen = false, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ModalBasic open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className="bg-white  w-[74rem] min-h-[44rem] rounded-lg  flex flex-col justify-between pt-12 pb-12 pr-8 pl-8 ">
        <div className="flex flex-col gap-10 pb-8 min-h-[40rem]">
          <Header setModalOpen={setModalOpen} currentStep={currentStep} />
          <EventSelecionForms
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
      </div>
    </ModalBasic>
  );
};

const Header = ({ isFirstStep = false, setModalOpen, currentStep = 3 }) => {
  return (
    <div className="flex gap-3 w-full items-center">
      <div>
        <CrossIcon
          className="h-8 w-8 cursor-pointer"
          onClick={() => setModalOpen(false)}
        />
      </div>
      <div className="text-c2xl text-gray-dark">
        {currentStep === 1
          ? "Mi Perfi"
          : currentStep === 2
          ? "Seguridad y acceso a la cuenta"
          : "¿Necesitas ayuda?"}
      </div>
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
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="min-h-full flex px-16">
      <div className="h-[40rem] bg-green-gray w-1/2 flex flex-col gap-10 justify-center px-20 rounded-2xl">
        <div className="w-32 h-32 rounded-full bg-white border border-1 border-gray-medium flex items-center justify-center -mt-[60%] ml-[30%] relative">
          <UserIcon className="h-16 w-16" />
          <EditIcon className="h-16 w-16 absolute -mt-[70%] ml-[70%]" />
        </div>
        <div className="text-black text-c3xl flex justify-center font-medium">
          Usurario1
        </div>
        <InputField
          id="email"
          type="email"
          label="Email"
          placeholder="Email"
          className="shadow-md bg-gray-snow border-gray-platinum w-[20rem]"
          className1="bg-gray-snow py-[.3rem]"
          isRequired={false}
          onChange={(fieldValue) => setEmail(fieldValue.trim())}
          onBlur={(fieldValue, setInputFieldError) => {
            if (!(fieldValue.includes("@") && fieldValue.includes(".com"))) {
              setInputFieldError(EMAIL_INVALID);
            } else if (fieldValue) {
              setEmail(fieldValue.trim());
            }
          }}
        />
        <div className="flex flex-col gap-3">
          <div className="font-medium text-cmd">Fecha del evento</div>
          <div className="react_datepicker">
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              excludeDateIntervals={[
                { start: subDays(new Date(), 5), end: addDays(new Date(), 5) },
              ]}
              placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-medium text-cmd">Invitación activa hasta:</div>
          <div className="react_datepicker">
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              excludeDateIntervals={[
                { start: subDays(new Date(), 5), end: addDays(new Date(), 5) },
              ]}
              placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-5 justify-center items-center">
        <AppLogo className="h-72 -mt-[30%]" />
        <div className="flex flex-col gap-8">
          <Button
            btnText="Cerrar sesión"
            className="w-96 !bg-green-teal shadow-lg text-white py-3"
            onClick={() => {}}
          />{" "}
          <Button
            btnText="Ayuda"
            className="w-96 !bg-green-teal shadow-lg text-white py-3"
            onClick={() => {}}
          />
          <Button
            btnText="Seguridad y acceso a la cuenta"
            className="w-96 !bg-green-teal shadow-lg text-white py-3"
            onClick={() => {}}
          />
          <Button
            btnText="BORRAR CUENTA"
            className="w-96 !bg-green-teal shadow-lg text-white py-3"
            onClick={() => {}}
          />
        </div>
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
      <div className="text-c2lg text-black-gray">Escribe tu consulta</div>
      <InputField
        id="Tema:"
        type="text"
        label="Tema:"
        placeholder="Tema:"
        className="shadow-md bg-gray-snow border-gray-platinum w-[40rem]"
        className1="bg-gray-snow py-[.3rem]"
        isRequired={false}
      />
      <InputField
        id="email"
        type="email"
        label="Email"
        placeholder="Email"
        className="shadow-md bg-gray-snow border-gray-platinum w-[40rem]"
        className1="bg-gray-snow py-[.3rem]"
        isRequired={false}
        onChange={(fieldValue) => setEmail(fieldValue.trim())}
        onBlur={(fieldValue, setInputFieldError) => {
          if (!(fieldValue.includes("@") && fieldValue.includes(".com"))) {
            setInputFieldError(EMAIL_INVALID);
          } else if (fieldValue) {
            setEmail(fieldValue.trim());
          }
        }}
      />
      <div className="flex flex-col gap-3">
        <div className="text-xl">Consulta:</div>
        <div className="w-11/12">
          <TextArea
            placeHolder="Escribe aquí tu consulta..."
            isOptional={false}
            rows={4}
          />
        </div>
      </div>
      <div className="flex w-[92%] justify-end">
        <Button
          btnText="Enviar"
          className="w-48 !bg-green-teal shadow-lg text-white py-4"
          onClick={() => {
            setCurrentStep((prevState) => prevState - 2);
          }}
        />
      </div>
    </div>
  );
};

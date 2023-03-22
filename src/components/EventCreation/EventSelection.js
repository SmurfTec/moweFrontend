import ModalBasic, { Modal } from "components/Modal/BasicModal";
import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
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
import { ReactComponent as AppLogo } from "assets/AppLogo.svg";

import "./date.css";
export const EMAIL_INVALID = "Email is Invalid";

export const EventSelection = ({ modalOpen = false, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ModalBasic open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className="bg-white  w-[74rem] min-h-[44rem] rounded-lg  flex flex-col justify-between pt-12 pb-12 pr-8 pl-8 ">
        <div className="flex flex-col gap-10 pb-8 min-h-[40rem]">
          <Header setModalOpen={setModalOpen} currentStep={currentStep} />
          <Content currentStep={currentStep} />
        </div>
      </div>
    </ModalBasic>
  );
};

const Header = ({ isFirstStep = false, setModalOpen, currentStep }) => {
  return (
    <div className="flex gap-3 w-full items-center">
      <div>
        <CrossIcon
          className="h-8 w-8 cursor-pointer"
          onClick={() => setModalOpen(false)}
        />
      </div>
      <div className="text-c2xl text-gray-dark">Mi Perfil</div>
    </div>
  );
};

const Content = () => {
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="min-h-full flex px-16">
      <div className="h-[40rem] bg-green-teal w-1/2 flex flex-col gap-10 justify-center px-20 rounded-2xl">
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
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
const Content2 = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col gap-10 min-h-[35rem]">
      <div className="text-c2xl font-medium">
        ¿Dónde os casáis? La ceremonia y la celebración son en el mismo sitio? A
        que hora empezáis?
      </div>
      <div className="flex justify-between w-11/12">
        <div className="text-c2lg text-gray-dark">
          Selecciona el título la <br />
          ubicación y el texto del evento:
          <InputField
            className="w-[25rem] mt-4 shadow-md bg-gray-snow border-gray-platinum"
            className1="bg-gray-snow py-[.3rem]"
            id="Contraseña"
            placeholder="Título: Boda..."
            type="text"
            isRequired={true}
            onChange={(value) => {}}
          />
        </div>
        <div className="flex flex-col mt-8">
          <div className="text-c2lg flex items-center gap-3">
            hay una segunda ubicación?
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
          <InputField
            className="w-[25rem] mt-4 shadow-md bg-gray-snow border-gray-platinum"
            className1="bg-gray-snow py-[.3rem]"
            id="Contraseña"
            placeholder="TÍTULO: Celebración..."
            type="text"
            isRequired={true}
            onChange={(value) => {}}
          />
        </div>
      </div>
    </div>
  );
};
const Content3 = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col gap-10 min-h-[35rem]">
      <div className="text-c2xl font-medium">
        ¿Cómo quieres que lleguen los invitados a tu boda? Hay alguna
        indicación?
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
            ¿Tienes un QR de acceso al parking? Compártelo aquí con tus
            invitados!
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

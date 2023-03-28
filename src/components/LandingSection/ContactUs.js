import { useState } from "react";
import BackgroundImage from "assets/wed.jpg";
import ConfettiImage from "assets/confetti.png";

import ModalBasic from "components/Modal/BasicModal";
import { ReactComponent as InstaLogo } from "assets/logos/InstaDark.svg";
import { ReactComponent as FBLogo } from "assets/logos/Facebook.svg";
import { ReactComponent as TwitterLogo } from "assets/logos/Twitter.svg";
import { ReactComponent as CheckIcon } from "assets/Svgs/check.svg";

import { InputField } from "components/Common/InputField/InputField";
import { Button } from "components/Common/Button/Button";
import { ReactComponent as AppLogo } from "assets/AppLogo.svg";
import { TextArea } from "components/Common/TextArea/TextArea";
export const ContactUs = ({ modalOpen = false, setModalOpen }) => {
  return (
    <ModalBasic
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      bgClassName="bg-black-opaque"
    >
      <div className="bg-white  w-[74rem] min-h-[45rem] rounded-lg flex flex-col p-10 ">
        <div className="flex flex-col gap-10 min-h-[40rem]">
          <InputField
            id="contraseña anterior"
            type="text"
            label="Tema:"
            placeholder="Tema"
            className="shadow-md bg-gray-snow border-gray-platinum w-[30rem]"
            className1="bg-gray-snow py-[.3rem]"
            isRequired={false}
            onChange={(fieldValue) => {}}
          />
          <InputField
            id="contraseña anterior"
            type="email"
            label="Email:"
            placeholder="Email"
            className="shadow-md bg-gray-snow border-gray-platinum w-[30rem]"
            className1="bg-gray-snow py-[.3rem]"
            isRequired={false}
            onChange={(fieldValue) => {}}
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
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start items-center gap-12 w-full">
            {" "}
            <InstaLogo className="h-9 w-9" />
            <FBLogo className="h-9 w-9" />
            <TwitterLogo className="h-9 w-9" />
          </div>
          <Button
            btnText={"Enviar"}
            className="w-40 !bg-green-teal shadow-lg text-white"
            onClick={() => {}}
          />
        </div>
      </div>
    </ModalBasic>
  );
};

import ModalBasic from "components/Modal/BasicModal";
import { Button } from "components/Common/Button/Button";
import { TextArea } from "components/Common/TextArea/TextArea";
import { InputField } from "components/Common/InputField/InputField";
import { ReactComponent as FBLogo } from "assets/Logos/Facebook.svg";
import { ReactComponent as InstaLogo } from "assets/Logos/InstaDark.svg";
import { ReactComponent as TwitterLogo } from "assets/Logos/Twitter.svg";

export const ContactUs = ({ modalOpen = false, setModalOpen }) => {
  return (
    <ModalBasic
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      bgClassName="bg-black-opaque"
    >
      <div className="bg-white  w-[86rem] h-[50rem] flex flex-col p-10 rounded-3xl bg-opacity-90 justify-between">
        <div className="flex flex-col gap-8 h-[33rem]">
          <div className="text-c3xl">Contáctanos</div>
          <div className="text-c2lg text-black-gray">Escribe tu consulta</div>
          <div className="flex flex-col gap-8">
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
        <div className="text-c2lg text-black-gray">
          O contactanos a través de nuestras redes sociales
        </div>
        </div>

        <div className="flex justify-between ">
          <div className="flex justify-start items-center gap-12 w-full">
            {" "}
            <InstaLogo className="h-14 w-14" />
            <FBLogo className="h-14 w-14" />
            <TwitterLogo className="h-14 w-14" />
          </div>
          <Button
            btnText={"Enviar"}
            className="w-40 !bg-green-teal !shadow-2xl text-white mr-[8%]"
            onClick={() => {}}
          />
        </div>
      </div>
    </ModalBasic>
  );
};

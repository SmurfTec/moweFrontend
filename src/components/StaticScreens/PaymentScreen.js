import { useState } from "react";
import BackgroundImage from "assets/Images/wed.jpg";
import ModalBasic from "components/Modal/BasicModal";
import { Button } from "components/Common/Button/Button";
import { ReactComponent as EuroIcon } from "assets/Svgs/euro.svg";
import { ReactComponent as CoinIcon } from "assets/Svgs/coin.svg";
import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
import { InputField } from "components/Common/InputField/InputField";

export const PaymentScreen = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div
      className=" h-screen flex flex-col justify-between px-10 text-white font-extrabold"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ModalBasic
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        bgClassName="bg-black-opaque"
      >
        <Payment />
      </ModalBasic>
    </div>
  );
};
const Payment = () => {
  return (
    <div className="bg-white  w-[74rem] min-h-[54rem] rounded-lg flex flex-col p-10 ">
      <div className="flex flex-col  min-h-[40rem]">
        <CrossIcon className="h-8 w-8" />
        <div className="flex flex-col w-full justify-center items-center mt-4 mb-6">
          <div className="font-medium text-c4xl1 text-black-deep">
            ¡Tu invitación con todo!
          </div>
          <div className="text-c2xl">Por solo:</div>
          <div className="flex gap-10 mt-10 bg-yellow-pale rounded-full w-[20rem] border-2 border-white shadow-lg ">
            <CoinIcon className="h-[6rem] w-[6rem]" />
            <EuroIcon className="h-[6rem] w-[6rem]" />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="text-c2xl font-medium text-black-deep">
              ¡Atención!
            </div>
            <div className="text-c2lg font-normal text-black-deep">
              Después de este paso se creará la URL elegida, la cual no se podrá
              volver a modificar.
            </div>
          </div>
          <div>
            <InputField
              id="contraseña anterior"
              type="text"
              placeholder="mowe.com/custom-url"
              className="shadow-md bg-gray-snow border-gray-platinum w-[30rem]"
              className1="bg-gray-snow py-[.3rem]"
              isRequired={false}
              onChange={(fieldValue) => {}}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-c2lg font-normal text-black-deep">
              La fecha del evento también quedará guardada. para modificarla
              tendrás que ponerte en
              <br /> contacto con nosotros.
            </div>
            <div>
              <InputField
                id="contraseña anterior"
                type="text"
                placeholder="November 15th, 2023"
                className="shadow-md bg-gray-snow border-gray-platinum w-[12rem]"
                className1="bg-gray-snow py-[.3rem]"
                isRequired={false}
                onChange={(fieldValue) => {}}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between mt-20">
          <div className="text-c2lg font-normal text-black-deep">
            Podrás elegir el método de pago en la pasarela
          </div>
          <Button
            btnText={"Pagar"}
            className="w-40 !bg-green-teal shadow-lg text-white"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

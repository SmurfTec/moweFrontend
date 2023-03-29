import { useState } from "react";
import BackgroundImage from "assets/wed.jpg";
import ConfettiImage from "assets/confetti.png";
import ModalBasic from "components/Modal/BasicModal";
import { ReactComponent as CheckIcon } from "assets/Svgs/check.svg";
import { Button } from "components/Common/Button/Button";
import { ReactComponent as AppLogo } from "assets/AppLogo.svg";

export const SuccessScreen = () => {
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
        <div
          className="bg-white  w-[74rem] min-h-[54rem] rounded-lg flex flex-col p-10 "
          style={{
            backgroundImage: `url(${ConfettiImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col  min-h-[40rem]">
            <div className="flex flex-col w-full justify-center items-center mt-4 mb-6">
              <CheckIcon className="h-40 w-40" />
              <div className="font-medium text-c3xl1 text-black-deep">
                Gracias por confiar en
              </div>
              <AppLogo />
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                  <div className="text-c3xl font-medium text-center">
                    Y ahora vamos con los el panel de
                    <br /> gestión de invitados!
                  </div>

                  <div className="text-c2lg font-normal text-gray-lightMedium">
                    Mira tu correo electrónico. Allí encontrarás el link a tu
                    invitación!
                  </div>
                </div>
                <div className="flex w-full justify-center gap-10">
                  <Button
                    btnText={"Home"}
                    className="w-52 !bg-gray-dark1 shadow-lg "
                    onClick={() => {}}
                  />
                  <Button
                    btnText={"Pagar"}
                    className="w-52 !bg-green-teal shadow-lg text-white"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBasic>
    </div>
  )
}

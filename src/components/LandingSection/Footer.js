import { ReactComponent as InstaLogo } from "assets/logos/Insta.svg";
import { ReactComponent as FBLogo } from "assets/logos/Facebook.svg";
import { ReactComponent as TwitterLogo } from "assets/logos/Twitter.svg";
import { Button } from "components/Common/Button/Button";
import { useState } from "react";
import { ContactUs } from "./ContactUs";

export const Footer = () => {
  const [wedingPlaner, setWedingPlaner] = useState(false);
  const [contactUsModal, setContactusModal] = useState(false);
  return (
    <div className="bg-black-pitch h-80 text-white flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col gap-8 pt-14">
        <div className="flex justify-center items-center gap-10 text-white">
          <div className="text-x2xl" onClick={() => setWedingPlaner(true)}>
            Legal
          </div>
          <div className="text-x2xl">Política de privacidad</div>
          <div className="text-x2xl">Sobre nosotros</div>
          <div className="text-x2xl" onClick={() => setContactusModal(true)}>
            Contáctanos
          </div>
          <div className="text-x2xl">Blog</div>
        </div>
        <div className="flex justify-center items-center gap-12 w-full">
          {" "}
          <InstaLogo className="h-9 w-9" />
          <FBLogo className="h-9 w-9" />
          <TwitterLogo className="h-9 w-9" />
        </div>
      </div>
      <div className="flex gap-14 justify-end w-full pr-10 pb-10">
        <Button btnText="Acceptar" />
        <Button btnText="Ver cookies" />
      </div>
      {
        <ContactUs
          modalOpen={contactUsModal}
          setModalOpen={setContactusModal}
        />
      }
    </div>
  );
};

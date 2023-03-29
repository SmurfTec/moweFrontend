import ModalBasic from "components/Modal/BasicModal";
import SectionImage from "assets/StaticScreen.png";
import { ReactComponent as BackIcon } from "assets/Svgs/BackArrow.svg";

export const Description = ({ modalOpen = false, setModalOpen }) => {
  return (
    <ModalBasic
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      bgClassName="bg-black-opaque"
    >
      <div className="bg-white  w-[86rem] h-[50rem] rounded-3xl flex flex-col bg-opacity-90 shadow-lg">
        <div className="flex h-full">
          <div className=" w-[40%] rounded-full">
            <BackIcon
              className="h-6 w-6 mt-[2%] ml-[2%] absolute cursor-pointer z-10"
              onClick={() => {
                setModalOpen(false);
              }}
            />
            <img src={SectionImage} alt="" className="relative" />
          </div>
          <div className="w-[60%]">
            <div className="text-3xl flex justify-center pt-[10%]">
              Sobre nosotros
            </div>
          </div>
        </div>
      </div>
    </ModalBasic>
  );
};

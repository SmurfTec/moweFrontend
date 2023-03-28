import ModalBasic from "components/Modal/BasicModal";
import { InputField } from "components/Common/InputField/InputField";
import { Button } from "components/Common/Button/Button";
export const Wedding = ({ modalOpen = false, setModalOpen }) => {
  return (
    <ModalBasic
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      bgClassName="bg-black-opaque"
    >
      <div className="bg-white  w-[74rem] min-h-[45rem] rounded-lg flex flex-col p-10 ">
        <div>Eres wedding Planer</div>
        <div className="flex flex-col gap-10 min-h-[40rem]">
          <InputField
            id="contraseña anterior"
            type="text"
            label="Nombre:"
            placeholder="Nombre"
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
        </div>
        <div className="flex justify-end">
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

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
      <div className="bg-white  w-[55rem] h-[45rem] rounded-3xl flex flex-col bg-opacity-90 shadow-lg">
        <div className="flex flex-col p-14 gap-8 h-[37rem]">
          <div className="text-3xl">Eres wedding Planer</div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="text-c2lg text-black-gray">
                Contáctanos para recibir información sobre nuestros programas <br/>de
                afiliados
              </div>
              <InputField
                id="contraseña anterior"
                type="text"
                // labelClassName="font-semibold"
                label="Nombre:"
                placeholder="Nombre"
                className="shadow-md bg-gray-snow border-gray-platinum w-[30rem]"
                className1="bg-gray-snow py-[.3rem]"
                isRequired={false}
                onChange={(fieldValue) => {}}
              />
            </div>

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
            <InputField
              id="contraseña anterior"
              type="text"
              label="teléfono de contacto:"
              placeholder="+34-123--456-789"
              className="shadow-md bg-gray-snow border-gray-platinum w-[30rem]"
              className1="bg-gray-snow py-[.3rem]"
              isRequired={false}
              onChange={(fieldValue) => {}}
            />
            <div className="text-c2lg text-black-gray">
              Contactaremos contigo a la mayor brevedad.
            </div>
          </div>
        </div>
        <div className="flex justify-end w-[90%]">
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

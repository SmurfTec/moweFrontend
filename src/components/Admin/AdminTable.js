import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
import { ReactComponent as AdminIcons } from "assets/Svgs/Admin.svg";
import { ReactComponent as AppLogo } from "assets/Svgs/AppLogo.svg";
import { ReactComponent as ExportIcon } from "assets/Svgs/export.svg";
import { ReactComponent as DeleteIcon } from "assets/Svgs/Delete.svg";
import { ReactComponent as SearchIcon } from "assets/Svgs/Search.svg";

import { Button } from "components/Common/Button/Button";
import { InputField } from "components/Common/InputField/InputField";
export const AdminTable = () => {
  return (
    <div className="flex flex-col h-screen p-10">
      <div className="flex">
        <CrossIcon className="h-12 w-12" />
        <AppLogo className="h-40" />
        <div className="flex w-full justify-between mt-10">
          <div className=" w-[90%] flex flex-col gap-3 justify-center items-center h-24">
            <div className="text-c2lg bg-green-teal text-white px-[24%] py-2 shadow-2xl rounded-full flex justify-center items-center">
              www.moweinteractive.com/Yolanda&jaume
            </div>
            <div className="text-c2lg bg-green-teal text-white px-[30.5%] py-2 shadow-2xl rounded-full flex justify-center items-center">
              ACCESS CODE: KXXXXXXXX
            </div>
          </div>
          <AdminIcons />
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex gap-4">
          <Button
            btnText={"Exportar"}
            className="w-40 !bg-grey-light shadow-lg text-black"
            onClick={() => {}}
          >
            <ExportIcon className="text-black" />
          </Button>
          <Button
            btnText={"+  Añadir"}
            className="w-40 !bg-green-teal shadow-lg text-white"
            onClick={() => {}}
          />

          <Button
            btnText={"Eliminar"}
            className="w-40 !bg-gray-slate shadow-lg text-white"
            onClick={() => {}}
          >
            <DeleteIcon className="text-white" />
          </Button>
        </div>
        <div>
          <InputField
            id="contraseña anterior"
            type="text"
            placeholder="Search"
            className="shadow-md bg-gray-snow border-gray-platinum w-[30rem]"
            className1="bg-gray-snow py-[.3rem] px-2"
            isRequired={false}
            onChange={(fieldValue) => {}}
          >
            <SearchIcon className="mr-2" />
          </InputField>
        </div>
      </div>
    </div>
  );
};

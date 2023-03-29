import { useState } from "react";
import BackgroundImage from "assets/Images/wed.jpg";
import ModalBasic from "components/Modal/BasicModal";
import { Button } from "components/Common/Button/Button";
import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
import { ReactComponent as AdminIcons } from "assets/Svgs/Admin.svg";
import { ReactComponent as AppLogo } from "assets/Svgs/AppLogo.svg";
import { ReactComponent as ExportIcon } from "assets/Svgs/export.svg";
import { ReactComponent as DeleteIcon } from "assets/Svgs/Delete.svg";
import { ReactComponent as SearchIcon } from "assets/Svgs/Search.svg";
import { InputField } from "components/Common/InputField/InputField";
export const AdminTable = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div
      className="h-screen text-white font-extrabold"
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
        <div className="flex flex-col gap-5 p-10 bg-white w-[90rem] h-[56rem] -mt-10">
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
         <div className="min-h-[35rem] overflow-y-auto"> <Table /></div>
        </div>
      </ModalBasic>
    </div>
  );
};

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];

const Table = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                  >
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
               {people.map((person) => (
                  <tr key={person.email} className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      {person.title}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                      {person.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

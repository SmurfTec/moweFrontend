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
import { ReactComponent as ArrowDown } from "assets/Svgs/ArrowDown.svg";

import Table from "components/Common/Table/Table";
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
const TABLE_HEADINGS = [" ", "Name", "Email", " ", " ", " ", " ", " ", " "];

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
          <div className="min-h-[35rem] overflow-y-auto">
            {" "}
            <Table
              heading={<TableHeading />}
              body={<TableBody data={people} />}
            />
          </div>
        </div>
      </ModalBasic>
    </div>
  );
};
const TableHeading = () => {
  return TABLE_HEADINGS.map((head, index) => (
    <th
      key={index}
      scope="col"
      className="bali_hai px-6 py-3 text-left text-sm font-medium"
    >
      {head}
    </th>
  ));
};
const TableBody = ({ data }) => {
  const [showEdit, setShowEdit] = useState([]);
  return (
    <>
      {data?.map((admin, index) => (
        <>
          <tr key={index} className="divide-x divide-gray-200">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                onClick={() => {}}
                className="text-sm font-medium eclipse cursor-pointer"
              >
                {admin.name}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                onClick={() => {}}
                className="text-sm font-medium eclipse cursor-pointer"
              >
                {admin.email}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                onClick={() => {}}
                className="text-sm font-medium eclipse cursor-pointer"
              >
                Si
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                onClick={() => {}}
                className="text-sm font-medium eclipse cursor-pointer"
              >
                Si
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                onClick={() => {}}
                className="text-sm font-medium eclipse cursor-pointer"
              >
                amigo
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                onClick={() => {}}
                className="text-sm font-medium eclipse cursor-pointer"
              >
                4
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                onClick={() => {}}
                className="text-sm font-medium eclipse cursor-pointer"
              >
                4
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                onClick={() => {}}
                className="text-sm font-medium eclipse cursor-pointer"
              >
                1
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                onClick={() => {}}
                className="text-sm font-medium eclipse cursor-pointer"
              >
                0
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                onClick={() => {
                  setShowEdit(!showEdit);
                }}
                className="text-sm font-medium eclipse cursor-pointer"
              >
                <ArrowDown className="h-4 w-4" />
              </span>
            </td>
          </tr>
          {showEdit && (
            <tr>
              <td colSpan="11">
                <div className="bg-green-teal">hamzah</div>
              </td>
            </tr>
          )}
        </>
      ))}
    </>
  );
};

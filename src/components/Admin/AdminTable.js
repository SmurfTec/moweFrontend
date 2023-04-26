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
import { ReactComponent as ArrowUp } from "assets/Svgs/ArrowUp.svg";

import Table from "components/Common/Table/Table";
import ClassNames from "Helpers/Common";
import { CustomInputField } from "components/Common/InputField/CustomInputField";
import { TextArea } from "components/Common/TextArea/TextArea";
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
        mainModalClass="2xl:overflow-y-hidden 2xl:-mt-12"
      >
        <div className="flex flex-col gap-5 p-10 bg-white 2xl:w-[115rem] 2xl:h-[60rem] rounded-2xl">
          <div className="flex">
            <CrossIcon className="h-12 w-12" />
            <AppLogo className="2xl:h-96 -mt-28 ml-10" />
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
          <div className="flex justify-between 2xl:-mt-20">
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
          <div className=" overflow-y-auto ">
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
  const [isActiveIndex, setIsActiveIndex] = useState(null);
  return (
    <>
      {data?.map((admin, index) => {
        const isActive = isActiveIndex === index;
        return (
          <>
            <tr
              key={index}
              className={ClassNames(
                "divide-x divide-gray-200",
                isActive && "bg-green-pastel",
              )}
            >
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
                    setIsActiveIndex(isActive ? null : index);
                  }}
                  className="text-sm font-medium eclipse cursor-pointer"
                >
                  {isActive ? (
                    <ArrowUp className="h-4 w-4" />
                  ) : (
                    <ArrowDown className="h-4 w-4" />
                  )}
                </span>
              </td>
            </tr>
            {isActive && (
              <tr>
                <td colSpan="11" className="bg-green-pastel p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-10">
                      {" "}
                      <div className="font-semibold text-cmd3">Descripción</div>
                      <CustomInputField
                        type="text"
                        className1="py-1 border border-gray-light"
                        onChange={(value) => {}}
                      />
                      <div className="font-semibold text-cmd3">Transporte:</div>
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <div className="font-semibold text-cmd3">
                        Canción sugerida:
                      </div>
                      <CustomInputField
                        id="Canción sugerida:"
                        type="text"
                        className="w-[25rem]"
                        className1="py-1 border border-gray-light"
                        onChange={(value) => {}}
                      />
                    </div>
                    <div className="flex items-center gap-10">
                      {" "}
                      <div className="font-semibold text-cmd3">
                        Intolerancias:
                      </div>
                      <CustomInputField
                        type="text"
                        className1="py-1 border border-gray-light"
                        onChange={(value) => {}}
                      />
                      <div className="flex items-center gap-6 w-full">
                        <div className="font-semibold text-cmd3">Feedback:</div>
                        <TextArea
                          id="Canción sugerida:"
                          type="text"
                          placeHolder=""
                          className="w-full h-16"
                          className1="py-1 border border-gray-light"
                          onChange={(value) => {}}
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </>
        );
      })}
    </>
  );
};

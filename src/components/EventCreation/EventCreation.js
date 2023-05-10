import ModalBasic from "components/Modal/BasicModal";

import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
import { ReactComponent as BackIcon } from "assets/Svgs/BackArrow.svg";

import { InputField } from "components/Common/InputField/InputField";
import { useState } from "react";
import { Button } from "components/Common/Button/Button";
import { TextArea } from "components/Common/TextArea/TextArea";
import DatePicker from "react-datepicker";
import { addDays, subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { UploadFile } from "components/Common/UploadFile/UploadFile";
import ClassNames from "Helpers/Common";
import { CheckBox } from "components/Common/CheckBox/CheckBox";
import "./date.css";
import MapContainer from "components/Common/Map/Map";
import {
  EventCreationForm,
  useEventCreationFormContext,
} from "Context/EventCreationForms";
import { CreateEvent } from "Services/EventCreation/CreateEvent";
export const EMAIL_INVALID = "Email is Invalid";

export const EventCreation = ({ modalOpen = false, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ModalBasic
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      bgClassName={"bg-black-opaque"}
    >
      <div className="bg-white  w-[74rem] min-h-[44rem] rounded-lg  flex flex-col justify-between pt-12 pb-12 pr-8 pl-8 ">
        <div className="flex flex-col gap-10 pb-8 min-h-[40rem]">
          <Header setModalOpen={setModalOpen} currentStep={currentStep} />
          <EventCreationForms currentStep={currentStep} />
        </div>
        <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </ModalBasic>
  );
};
const EventCreationForms = ({ currentStep }) => {
  switch (currentStep) {
    case 1:
      return <Content />;
    case 2:
      return <Content2 />;
    case 3:
      return <Content3 />;
    case 4:
      return <Content4 />;
    case 5:
      return <Content5 />;
    case 6:
      return <Content6 />;
    case 7:
      return <Content7 />;

    default:
      return "No case found";
  }
};
const Header = ({ isFirstStep = false, setModalOpen, currentStep }) => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-center gap-2 text-lg cursor-pointer">
        {currentStep === 1 && (
          <BackIcon
            className="h-5 w-5 cursor-pointer"
            // onClick={() => setModalOpen(false)}
          />
        )}
        <div className="text-cmd2 text-gray-dark flex items-center gap-2">
          <div>{isFirstStep ? "Back" : `Paso ${currentStep} de 7`}</div>
          <div className="text-csm text-gray-dark">
            (Se podrán modificar los datos después)
          </div>
        </div>
      </div>
      <div>
        <CrossIcon
          className="h-8 w-8 cursor-pointer"
          onClick={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};
const Footer = ({ currentStep, setCurrentStep }) => {
  const { form1, form2, form3, form4, form5, form6, form7 } =
    useEventCreationFormContext();

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 7;

  return (
    <div className="flex gap-3 justify-end">
      <Button
        btnText={isFirstStep ? "Paso 1 de 7" : "Anterior"}
        className={ClassNames(
          "w-40 text-gray-dark",
          isFirstStep ? "bg-white" : "w-56 bg-gray-thin",
        )}
        onClick={() => {
          if (currentStep > 1 && currentStep <= 7) {
            setCurrentStep((prevState) => prevState - 1);
          } else setCurrentStep(1);
        }}
      />
      <Button
        btnText={isLastStep ? "Ya lo tienes" : "Siguiente"}
        className="w-40 !bg-green-teal shadow-lg text-white"
        onClick={async () => {
          if (currentStep < 7) {
            setCurrentStep((prevState) => prevState + 1);
          } else {
            setCurrentStep(7);
            const eventCcreation = await CreateEvent({
              date: form1?.date,
              time: "04:00",
              headerNames: "dirty herry",
              primarytitle: "Birthday Party",
              primaryLocation: { lat: 120, long: 130, text: "Islamabad" },
              isTransport: false,
              transportDescription: null,
              parkingDescription: null,
              image: null,
              dressCode: "no code",
              hashtags: ["birthday", "party"],
              fbLink: "www.facebook.com/",
              instaLink: "www.insta.com/",
              tikTokLink: "www.tiktok.com/",
              googlePhotosLink: "wwwgoogle.photos.com/",
              isGifts: false,
              bizum: null,
              paypalAccount: null,
              bankAccount: null,
              weddingList: null,
              customURL: "www.event.planner.com/birthday/dirty-herry",
            });
            console.log(
              "CForms data is",
              form1,
              form2,
              form3,
              form4,
              form5,
              form6,
              form7,
            );
          }
        }}
      />
    </div>
  );
};
const Content = () => {
  const { form1, setFormState1 } = useEventCreationFormContext();

  return (
    <div className="min-h-[30rem] flex flex-col gap-10">
      <div className="text-c2xl font-medium">
        Cuéntanos más detalles de tu boda!
      </div>
      <div className="text-c2lg">
        ¿Cómo os llamáis? (Así aparecerá en vuestra invitación)
      </div>
      <TextArea
        placeHolder="Jaume & Yolanda"
        isOptional={false}
        textMsg={form1?.invitationNames}
        rows={3}
        onChange={({ value }) =>
          setFormState1({
            ...form1,
            invitationNames: value,
          })
        }
      />
      <div className="text-c2lg">Fecha y hora del evento</div>
      <div className="text-cmd font-medium">Fecha:</div>
      <div className="react_datepicker">
        <DatePicker
          showIcon
          selected={form1?.date}
          onChange={(date) =>
            setFormState1({
              ...form1,
              date: date,
              time: date,
            })
          }
          excludeDateIntervals={[
            { start: subDays(new Date(), 5), end: addDays(new Date(), 5) },
          ]}
          placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
        />
      </div>
    </div>
  );
};
const Content2 = () => {
  const { form2, setFormState2 } = useEventCreationFormContext();
  return (
    <div className="flex flex-col gap-10 min-h-[35rem]">
      <div className="text-c2xl font-medium">
        ¿Dónde os casáis? La ceremonia y la celebración son en el mismo sitio? A
        que hora empezáis?
      </div>
      <div className="flex justify-between w-11/12">
        <div className="text-c2lg text-gray-dark">
          Selecciona el título la <br />
          ubicación y el texto del evento:
          <InputField
            className="w-[25rem] mt-4 shadow-md bg-gray-snow border-gray-platinum"
            className1="bg-gray-snow py-[.3rem]"
            id="Contraseña"
            placeholder="Título: Boda..."
            type="text"
            isRequired={true}
            onChange={(value) => {
              console.log(value);
              setFormState2({
                ...form2,
                mainTitle: value,
              });
            }}
          />
        </div>
        <div>
          {/* <div className="bg-red-900">
            <MapContainer />
          </div> */}
        </div>
        <div className="flex flex-col mt-8">
          <div className="text-c2lg flex items-center gap-3">
            hay una segunda ubicación?
            <div className="flex h-6 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                ischecked={form2?.form2Check}
                onChange={() => {
                  setFormState2({
                    ...form2,
                    form2Check: !form2?.form2Check,
                  });
                }}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
          <InputField
            className="w-[25rem] mt-4 shadow-md bg-gray-snow border-gray-platinum"
            className1="bg-gray-snow py-[.3rem]"
            id="Contraseña"
            placeholder="TÍTULO: Celebración..."
            type="text"
            isRequired={true}
            onChange={(value) => {
              setFormState2({
                ...form2,
                secondTitle: value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
const Content3 = () => {
  const { form3, setFormState3 } = useEventCreationFormContext();
  return (
    <div className="flex flex-col gap-10 min-h-[35rem]">
      <div className="text-c2xl font-medium">
        ¿Cómo quieres que lleguen los invitados a tu boda? Hay alguna
        indicación?
      </div>
      <div className="text-c2lg flex items-center gap-3">
        ¿Habrá transporte? Cuéntaselo a los invitados
        <div className="flex h-6 items-center">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            value={form3?.offerTransportation}
            onChange={() => {
              setFormState3({
                ...form3,
                offerTransportation: !form3?.offerTransportation,
              });
            }}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
      </div>
      <div className="w-2/5">
        <TextArea
          placeHolder="Jaume & Yolanda"
          isOptional={false}
          rows={3}
          onChange={({ value }) => {
            setFormState3({
              ...form3,
              transportaionDescriptions: value,
            });
          }}
        />
      </div>
      <div className="flex justify-between items-center gap-20">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="text-c2lg">
            ¿Hay alguna indicación especial para aparcar?
          </div>
          <div className="w-full">
            <TextArea
              placeHolder="Jaume & Yolanda"
              isOptional={false}
              rows={3}
              onChange={({ value }) => {
                setFormState3({
                  ...form3,
                  parkingIndications: value,
                });
              }}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-4 -mt-[3%]">
          <div className="text-c2lg ">
            ¿Tienes un QR de acceso al parking? Compártelo aquí con tus
            invitados!
          </div>
          <div className="">
            <UploadFile
              mode={"Edit"}
              onBlur={() => {}}
              // value={formState?.uploadedFile}
              onResponse={({ data }) => {
                if (data) {
                  setFormState3({
                    ...form3,
                    QRimage: data,
                  });
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Content4 = () => {
  const { form4, setFormState4 } = useEventCreationFormContext();

  return (
    <div className="flex flex-col gap-10 min-h-[35rem]">
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="text-c2lg">
            ¡El Dresscode es importante! Cuéntales el estilo de tu boda a los
            invitados!
          </div>
          <div className="w-10/12">
            <TextArea
              placeHolder="Jaume & Yolanda"
              isOptional={false}
              rows={5}
              onChange={({ value }) => {
                setFormState4({
                  ...form4,
                  dressCode: value,
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        ¿No sabes que frase poner? Inspírate aquí:
        <Button
          btnText={"Ejemplos dresscode"}
          className={ClassNames("w-60 bg-gray-thin !py-1")}
          onClick={() => {}}
        />
      </div>
      <div className="w-2/3 cmd">
        Vamos a informar de la meteorología esperada a tus invitados! ¿En qué
        ubicación queréis verla?
      </div>
    </div>
  );
};
const Content5 = () => {
  const { form5, setFormState5 } = useEventCreationFormContext();

  return (
    <div className="flex flex-col gap-6">
      <div className="font-medium text-c2xl">
        ¡Vamos a petar las redes sociales!{" "}
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="text-cmd1 text-gray-gunMetal">
            Añade tu hashtag favorito para que todo el mundo lo use en sus fotos
            y vídeos!
          </div>
          <div className="w-10/12">
            <TextArea
              placeHolder="#Hashtag"
              isOptional={false}
              rows={4}
              className="bg-gray-snow"
              onChange={({ value }) => {
                setFormState5({
                  ...form5,
                  hashtags: value,
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        No te pierdas ninguna foto de tus invitados! dales tus redes sociales y
        que te etiqueten!
      </div>
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={form5?.googlePhotosCheck}
          onChange={() => {
            setFormState5({
              ...form5,
              offerTransportation: !form5?.googlePhotosCheck,
            });
          }}
        />
        <div className="text-c2lg w-40">Google Photos:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Escribe aquí..."
          type="text"
          isRequired={true}
          onChange={(value) => {
            setFormState5({
              ...form5,
              googleDescription: value,
            });
          }}
        />
      </div>
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={form5?.instagramCheck}
          onChange={() => {
            setFormState5({
              ...form5,
              offerTransportation: !form5?.instagramCheck,
            });
          }}
        />
        <div className="text-c2lg w-40">Instagram:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Escribe aquí..."
          type="text"
          isRequired={true}
          onChange={(value) => {
            setFormState5({
              ...form5,
              instaDescription: value,
            });
          }}
        />
      </div>
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={form5?.titkTokcheck}
          onChange={() => {
            setFormState5({
              ...form5,
              offerTransportation: !form5?.titkTokcheck,
            });
          }}
        />
        <div className="text-c2lg w-40">Tik Tok:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Escribe aquí..."
          type="text"
          isRequired={true}
          onChange={(value) => {
            setFormState5({
              ...form5,
              tikTokDescription: value,
            });
          }}
        />
      </div>{" "}
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={!form5?.fbCheck}
          onChange={() => {
            setFormState5({
              ...form5,
              offerTransportation: !form5?.fbCheck,
            });
          }}
        />
        <div className="text-c2lg w-40">Facebook:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Escribe aquí..."
          type="text"
          isRequired={true}
          onChange={(value) => {
            setFormState5({
              ...form5,
              fbDescription: value,
            });
          }}
        />
      </div>
    </div>
  );
};
const Content6 = () => {
  const { form6, setFormState6 } = useEventCreationFormContext();

  return (
    <div className="flex flex-col gap-3">
      <div className="font-medium text-c2xl">
        ¿Quieres recibir un regalo de tus invitados?
      </div>
      <div className="text-xl">
        {" "}
        ¡Hazlo ahora! Aparecerá en la sección de regalo de la invitación
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-10/12">
            <TextArea
              placeHolder="Si nos queréis hacer un regalo de boda estaremos encantados..."
              isOptional={false}
              rows={4}
              className="bg-gray-snow"
              onChange={({ value }) => {
                setFormState6({
                  ...form6,
                  recieveGiftsDescription: value,
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        ¿No sabes que frase poner? Inspírate aquí:
        <Button
          btnText={"Ejemplos regalos de boda"}
          className={ClassNames(
            "w-fit bg-gray-thin !py-1 font-extralight text-md",
          )}
          onClick={() => {}}
        />
      </div>
      <div className="flex">
        <div className="text-black text-c2lg">
          Opciones de regalo para los invitados
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Bizum:</div>
        <InputField
          className="w-[47rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Cuenta Bancaria:"
          type="text"
          isRequired={true}
          onChange={(value) => {
            setFormState6({
              ...form6,
              bizumDescription: value,
            });
          }}
        />
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Cuenta Bancaria:</div>
        <InputField
          className="w-[47rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Cuenta Bancaria:"
          type="text"
          isRequired={true}
          onChange={(value) => {
            setFormState6({
              ...form6,
              cuentaDescription: value,
            });
          }}
        />
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Lista de bodas:</div>
        <InputField
          className="w-[47rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Cuenta Bancaria:"
          type="text"
          isRequired={true}
          onChange={(value) => {
            setFormState6({
              ...form6,
              listaDescription: value,
            });
          }}
        />
      </div>{" "}
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Paypal-Me:</div>
        <InputField
          className="w-[47rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="Cuenta Bancaria:"
          type="text"
          isRequired={true}
          onChange={(value) => {
            setFormState6({
              ...form6,
              paypalDescription: value,
            });
          }}
        />
      </div>
      <div className="flex gap-4 items-center mt-4">
        <div className="text-c2lg">No quiero regalos:</div>
        <CheckBox
          isChecked={form6?.noGiftsCheck}
          onChange={() => {
            setFormState6({
              ...form6,
              noGiftsCheck: !form6?.noGiftsCheck,
            });
          }}
        />
      </div>
    </div>
  );
};
const Content7 = () => {
  return (
    <div className="flex flex-col gap-3 h-96">
      <div className="font-medium text-c2xl pl-8">Ya casi estamos!!</div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className=" p-t-4 pb-4 w-9/12 text-c2lg">
          Tu invitación tendrá una URL personalizada, ¿Cuál quieres?
        </div>
        <div className="flex justify-between w-9/12">
          {" "}
          <InputField
            className="w-[32rem] shadow-md bg-gray-snow border-gray-platinum"
            className1="bg-gray-snow py-[.3rem]"
            id="Contraseña"
            placeholder="write here"
            type="text"
            isRequired={true}
            onChange={(value) => {}}
          />
          <Button
            btnText={"Comprobar disponibilidad"}
            className={ClassNames("w-72 bg-gray-thin py-1  text-md")}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

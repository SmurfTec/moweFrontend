import { ReactComponent as AppLogo } from "assets/AppLogo.svg";
import ModalBasic, { Modal } from "components/Modal/BasicModal";
import LoginImage from "assets/Login.jpg";
import FacebookImage from "assets/fb.png";
import Google from "assets/google.png";
import OtpInput from "react-otp-input";

import { ReactComponent as CrossIcon } from "assets/Cross.svg";
import { ReactComponent as BackIcon } from "assets/BackArrow.svg";

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
export const EMAIL_INVALID = "Email is Invalid";

export const FirstStep = ({ modalOpen = false, setModalOpen }) => {
  const [resetPassword, setResetPassword] = useState(false);
  return (
    <ModalBasic open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className="bg-white  w-[74rem] rounded-lg  flex flex-col justify-between pt-12 pb-12 pr-8 pl-8 ">
        <div className="flex flex-col gap-10 pb-8">
          <Header setModalOpen={setModalOpen} />
          <Content7 />
        </div>
        <Footer />
      </div>
    </ModalBasic>
  );
};

const Header = ({ isFirstStep = false, setModalOpen }) => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-center gap-2 text-lg cursor-pointer">
        <BackIcon
          className="h-5 w-5 cursor-pointer"
          // onClick={() => setModalOpen(false)}
        />
        <div className="text-xl text-gray-dark">
          {isFirstStep ? "Back" : "Step 2 of 7"}
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
const Footer = ({ isFirstStep = false }) => {
  return (
    <div className="flex gap-3 justify-end">
      <Button
        btnText={isFirstStep ? "Step 1 of 7" : "Previous step"}
        className={ClassNames(
          "w-40",
          isFirstStep ? "bg-white" : "w-56 bg-gray-thin",
        )}
        onClick={() => {}}
      />
      <Button
        btnText="Log In"
        className="w-40 !bg-green-teal shadow-lg"
        onClick={() => {}}
      />
    </div>
  );
};
const Content = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className="text-c2xl font-medium">
        Time to customize your invitation! tell us about your wedding day!{" "}
      </div>
      <div className="text-c2lg">
        Tell us your names! this will be shown at the very beginning of the
        invitation
      </div>
      <TextArea placeHolder="Jaume & Yolanda" isOptional={false} rows={3} />
      <div className="text-c2lg">Time and Date of the wedding</div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        excludeDateIntervals={[
          { start: subDays(new Date(), 1), end: addDays(new Date(), 5) },
        ]}
        placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
      />
    </div>
  );
};
const Content3 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="text-c2xl font-medium">
        how will the guests arrive to your wedding, is there any special
        indication?
      </div>
      <div className="text-c2lg flex items-center gap-3">
        do you offer transport to your guests?
        <div className="flex h-6 items-center">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            value={isChecked}
            onChange={(prevState) => setIsChecked(!prevState)}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
      </div>
      <div className="w-2/5">
        <TextArea placeHolder="Jaume & Yolanda" isOptional={false} rows={3} />
      </div>
      <div className="flex justify-between items-center gap-20">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="text-c2lg">
            Is there any special parking indication?
          </div>
          <div className="w-full">
            <TextArea
              placeHolder="Jaume & Yolanda"
              isOptional={false}
              rows={3}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-4 -mt-[3%]">
          <div className="text-c2lg ">
            is thera a QR or jpg image needed to access the event place or
            parking?
          </div>
          <div className="">
            <UploadFile
              mode={"Edit"}
              onBlur={() => {}}
              // value={formState?.uploadedFile}
              onResponse={({ data }) => {
                console.log(data);
                // setFormState({ type: SET_RESUME, payload: data });
              }}
            />
          </div>
        </div>
      </div>
      We’re offering a direct link to hotels nearby: choose location
    </div>
  );
};
const Content4 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="text-c2lg">
            the Dresscode is a must! Tell your guests how should they be dressed
            for the big day!
          </div>
          <div className="w-10/12">
            <TextArea
              placeHolder="Jaume & Yolanda"
              isOptional={false}
              rows={5}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        ¿need help with this? get inspired here:
        <Button
          btnText={"Dresscode examples"}
          className={ClassNames("w-60 bg-gray-thin py-1")}
          onClick={() => {}}
        />
      </div>
      <div className="w-2/3 cmd">
        Mowe Interactvie includes a real time weather forecast for the date &
        location of your wedding: please select the location we should consider
      </div>
    </div>
  );
};
const Content5 = () => {
  const [googleUrl, setGoogleUrl] = useState(false);
  const [instaUrl, setInstaUrl] = useState(false);
  const [fbUrl, setFBUrl] = useState(false);
  const [tikTokUrl, settikTokUrl] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="font-medium text-c2xl">Let’s get into Social media! </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="text-cmd1 text-gray-gunMetal">
            Add your favorite hashtag, we’ll ask your guests to use it so you
            won’t miss any uploaded picture!
          </div>
          <div className="w-10/12">
            <TextArea
              placeHolder="#Hashtag"
              isOptional={false}
              rows={4}
              className="bg-gray-snow"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        Add your social media profile links so your guests can see your uploads
        too!
      </div>
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={googleUrl}
          onChange={(prevState) => setGoogleUrl(!prevState)}
        />
        <div className="text-c2lg w-40">Google Photos:</div>
        <InputField
          className="w-[40rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="write here"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={googleUrl}
          onChange={(prevState) => setGoogleUrl(!prevState)}
        />
        <div className="text-c2lg w-40">Instagram:</div>
        <InputField
          className="w-[40rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="write here"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={googleUrl}
          onChange={(prevState) => setGoogleUrl(!prevState)}
        />
        <div className="text-c2lg w-40">Tik Tok:</div>
        <InputField
          className="w-[40rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="write here"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>{" "}
      <div className="flex gap-4 items-center">
        <CheckBox
          isChecked={googleUrl}
          onChange={(prevState) => setGoogleUrl(!prevState)}
        />
        <div className="text-c2lg w-40">Facebook:</div>
        <InputField
          className="w-[40rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="write here"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
    </div>
  );
};
const Content6 = () => {
  const [googleUrl, setGoogleUrl] = useState(false);
  const [instaUrl, setInstaUrl] = useState(false);
  const [fbUrl, setFBUrl] = useState(false);
  const [tikTokUrl, settikTokUrl] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="font-medium text-c2xl">
        Would you like to receive gifts from your guests?{" "}
      </div>
      <div className="text-xl">Tell them! </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-10/12">
            <TextArea
              placeHolder="having you in our big day is enough but if you consider having a detail for us, this is what we want! "
              isOptional={false}
              rows={4}
              className="bg-gray-snow"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        ¿need help? Get inspired here:
        <Button
          btnText={"wedding gift examples"}
          className={ClassNames(
            "w-fit bg-gray-thin py-1 font-extralight text-md",
          )}
          onClick={() => {}}
        />
      </div>
      <div className="flex">
        <div className="text-black text-c2lg">
          Add your preferences to receive gifts
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Bizum:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="write here"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Bank account:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="write here"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">wedding list:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="write here"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>{" "}
      <div className="flex gap-4 items-center">
        <div className="text-cmd w-40">Paypal-Me:</div>
        <InputField
          className="w-[45rem] shadow-md bg-gray-snow border-gray-platinum"
          className1="bg-gray-snow py-[.3rem]"
          id="Contraseña"
          placeholder="write here"
          type="text"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div className="flex gap-4 items-center mt-4">
        <div className="text-c2lg">WE DON’T WANT GIFTS:</div>
        <CheckBox
          isChecked={googleUrl}
          onChange={(prevState) => setGoogleUrl(!prevState)}
        />
      </div>
    </div>
  );
};
const Content7 = () => {
  return (
    <div className="flex flex-col gap-3 h-96">
      <div className="font-medium text-c2xl pl-8">We’re almost ready</div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className=" p-t-4 pb-4 w-9/12 text-c2lg">
          Mowe interactive includes a customized url, choose yours now!
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
            btnText={"Check availability"}
            className={ClassNames(
              "w-72 bg-gray-thin py-1  text-md",
            )}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

import { ReactComponent as AppLogo } from "assets/AppLogo.svg";
import ModalBasic, { Modal } from "components/Modal/BasicModal";
import LoginImage from "assets/Login.jpg";
import FacebookImage from "assets/fb.png";
import Google from "assets/google.png";
import OtpInput from "react-otp-input";

import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
import { InputField } from "components/Common/InputField/InputField";
import { useState } from "react";
import { Button } from "components/Common/Button/Button";
export const EMAIL_INVALID = "Email is Invalid";

export const Login = ({ modalOpen = false, setModalOpen }) => {
  const [resetPassword, setResetPassword] = useState(false);
  return (
    <ModalBasic open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className="bg-white h-[44rem] w-[74rem] rounded-lg overflow-hidden">
        <div className="flex">
          <div className="hidden md:flex min-w-[45%]">
            <img
              src={LoginImage}
              className="h-screen w-full object-cover object-top"
              alt="sorry"
            />
            <CrossIcon
              className="h-8 w-8 m-5 absolute text-gray-700 cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="min-w-[55%] flex flex-col gap-8">
            <div className="flex justify-center items-end">
              {" "}
              <AppLogo className="h-60 w-72" />
            </div>
            {!resetPassword && (
              <LoginForm
                setResetPassword={setResetPassword}
                setModalOpen={setModalOpen}
              />
            )}
            {resetPassword && <ResetPassword />}
          </div>
        </div>
      </div>
    </ModalBasic>
  );
};

const LoginForm = ({ setResetPassword, setModalOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="flex flex-col gap-4 justify-center md:px-40">
        <InputField
          id="email"
          type="email"
          placeholder="Email"
          isRequired={true}
          onChange={(fieldValue) => setEmail(fieldValue.trim())}
          onBlur={(fieldValue, setInputFieldError) => {
            if (!(fieldValue.includes("@") && fieldValue.includes(".com"))) {
              setInputFieldError(EMAIL_INVALID);
            } else if (fieldValue) {
              setEmail(fieldValue.trim());
            }
          }}
        />
        <InputField
          id="Contraseña"
          placeholder="Contraseña"
          type="password"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <div
        className="flex justify-center cursor-pointer"
        onClick={() => setResetPassword(true)}
      >
        Olvidé mi contraseña
      </div>
      <div className="flex justify-center">Conectar con</div>
      <div className="flex items-center justify-center gap-4">
        <img src={Google} className="h-12 w-12 object-cover" alt="sorry" />
        <img
          src={FacebookImage}
          className="h-14 w-14 object-cover"
          alt="sorry"
        />{" "}
      </div>
      <div className="flex justify-center gap-10">
        <Button
          btnText="Sign Up"
          className="bg-gray-misty shadow-lg hover:rounded-2xl"
        />
        <Button
          btnText="Log In"
          className=" !bg-green-teal shadow-lg text-white px-5 hover:rounded-2xl"
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </div>
    </>
  );
};
const ResetPassword = () => {
  const [codeVerificationChars, setCodeVerificationChars] = useState("");

  return (
    <>
      <div className="flex justify-center text-md">
        Te hemos enviado un código a ****st@gmail.com
      </div>
      <div className="flex justify-center -ml-[5%]">
        <OtpInput
          value={codeVerificationChars}
          onChange={(otp) => {
            setCodeVerificationChars(otp);
          }}
          numInputs={4}
          autoFocus={true}
          placeholder="XXXX"
          inputStyle={{
            border: "1px solid #E4E4E4",
            borderRadius: "15px",
            width: "60px",
            height: "64px",
            fontSize: "16px",
            color: "#69A88D",
            fontWeight: "300",
            caretColor: "#9298A9",
            marginLeft: "30px",
            background: "#FAFAFA",
            boxShadow: "-2px 2px 10px rgba(0, 0, 0, 0.08)",
          }}
          focusStyle={{
            border: "1px solid #9298A9",
            outline: "none",
          }}
        />
      </div>

      <div className="flex flex-col gap-4 justify-center md:px-40">
        <InputField
          label="Crea tu contraseña nueva"
          id="Contraseña"
          placeholder="Contraseña"
          type="password"
          isRequired={true}
          onChange={(value) => {}}
        />
        <InputField
          label="Repetir contraseña"
          id="Contraseña"
          placeholder="Contraseña"
          type="password"
          isRequired={true}
          onChange={(value) => {}}
        />
      </div>
      <Button
        btnText="Guardar nueva contraseña"
        className=" !bg-green-teal shadow-lg text-white px-5 hover:rounded-2xl mx-40"
        onClick={() => {}}
      />
    </>
  );
};

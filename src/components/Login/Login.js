import { useState } from "react";
import OtpInput from "react-otp-input";
import Google from "assets/Images/google.png";
import FacebookImage from "assets/Images/fb.png";
import LoginImage from "assets/Images/Login.jpg";
import ModalBasic from "components/Modal/BasicModal";
import { Button } from "components/Common/Button/Button";
import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
import { InputField } from "components/Common/InputField/InputField";
import { ReactComponent as AppLogo } from "assets/Svgs/AppLogo.svg";
import { RequestLogin, RequestSignUp } from "Services/LoginSignup/Login";
import axios from "axios";
import { API_BASE } from "Configs/secrets";
export const EMAIL_INVALID = "Email is Invalid";

export const Login = ({ modalOpen = false, setModalOpen }) => {
  const [resetPassword, setResetPassword] = useState(false);
  return (
    <ModalBasic
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      bgClassName={"bg-black-opaque"}
    >
      <div className="bg-white h-[44rem] w-[74rem] rounded-lg overflow-hidden z-20">
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
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUploading, setIsSignUploading] = useState(false);
  const[errMsg, setErrMsg] = useState("")

  const userSignUp = async() => {
    await axios.post(`${API_BASE}user/signup`, {email, password})
    .then(res => {
      const {data} = res
      if(data.status === 200){
        localStorage.setItem(
          "USER_CREDENTIALS",
          JSON.stringify(data?.accessToken),
        );
        window.location.reload()
      }else{
        setErrMsg(data?.message)
      }
      console.log(data?.accessToken)
    })
    .catch(err => {
      console.log(err)
      setErrMsg(err?.message)
    })
  }

  const userLogin = async() => {
    await axios.post(`${API_BASE}user/signin`, {email, password})
    .then(res => {
      const {data} = res
      if(data.status === 200){
        localStorage.setItem(
          "USER_CREDENTIALS",
          JSON.stringify(data?.accessToken),
        );
        window.location.reload()
      }else{
        setErrMsg(data?.message)
      }
      console.log(data)
    })
    .catch(err => {
      console.log(err)
      setErrMsg(err?.message)
    })
  }

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
          onChange={(value) => {
            setPassword(value);
          }}
        />
      </div>
      {errMsg ? <p className="my-0" style={{color: 'red'}}>{errMsg}</p> : ''}
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
          isLoading={isSignUploading}
          className="bg-gray-misty shadow-lg"
          onClick={userSignUp}
        />
        <Button
          btnText="Log In"
          isLoading={isLoading}
          className=" !bg-green-teal shadow-lg text-white px-5"
          onClick={userLogin}/>
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
          renderInput={(props) => <input {...props} />}
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
        className=" !bg-green-teal shadow-lg text-white px-5 mx-40"
        onClick={() => {}}
      />
    </>
  );
};

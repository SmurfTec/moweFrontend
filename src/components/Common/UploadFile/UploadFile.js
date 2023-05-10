import { useState } from "react";
import ClassNames from "Helpers/Common";
import { ReactComponent as UploadIcon } from "assets/Svgs/FileUpload.svg";
import { Spinner } from "../LoadingSpinner/Spinner";
import {UploadFileToServer} from "Services/EventCreation/FileUpload.service"

const UPLOAD_FILE_ERROR = "Sorry! File can not be uploaded. Please try again";
const formatUploadFile = (file) => {
  return file.replace(/.*[\/\\]/, "");
};

export const UploadFile = ({
  id = "upload-file",
  label,
  value = "",
  onResponse,
  mode = "View",
}) => {
  const [fieldError, setFieldError] = useState("");
  const [upLoading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const FileUploadToServer = async (target) => {
    setUploading(true);
    let fileData = new FormData();
    fileData.append("file", target.files[0]);
    try {
      const response = await UploadFileToServer(fileData);
      setFileName(formatUploadFile(target.value));
      onResponse?.({
        data: response?.data?.result,
        setFieldError,
        setUploading,
      });
      setUploading(false);
      setFieldError("");
    } catch (error) {
      setFileName("");
      setFieldError(UPLOAD_FILE_ERROR);
      onResponse?.({ error: error });
      setUploading(false);
      console.error("[FileUpload][APIError] is", error);
    }
  };
  return (
    <>
      <label className="block text-sm font-semibold sapphire">{label}</label>
      <div
        className={ClassNames(
          "mt-1 border-2 border-gray-300 rounded-md py-8 px-4 flex justify-between items-center",
          fieldError
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500",
        )}
      >
        <div
          className={ClassNames(
            "relative",
            fieldError ? "bg-red-500" : "light_grayish_navy",
          )}
        >
          {fileName && (
            <span className="text-sm pl-6 sapphire">{fileName}</span>
          )}
        </div>

        <div
          className={ClassNames(
            "flex text-sm justify-center items-center",
            fieldError ? "bg-red-500" : "bg-blue-500",
          )}
        >
          <label
            htmlFor={id}
            className="text-blue-light relative cursor-pointer bg-white rounded-md focus:outline-none"
          >
            <span className="bg-gray-snow border border-gray-400 px-6 py-2 rounded-md">
              {upLoading ? <Spinner width="4" height="4" /> : "Cargar"}
            </span>
            {!upLoading ? (
              <input
                id={id}
                name="file-upload"
                type={"file"}
                onChange={({ target }) => {
                  FileUploadToServer(target);
                }}
                className="sr-only"
              />
            ) : (
              ""
            )}
          </label>
        </div>
      </div>
      {fieldError && (
        <div
          className="pt-2 text-sm text-red-600 font-poppins"
          id={`${label}-error`}
        >
          {fieldError}
        </div>
      )}
    </>
  );
};

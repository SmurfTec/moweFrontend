/* eslint-disable jsx-a11y/img-redundant-alt */
import { ReactComponent as PhotoIcon } from "assets/Svgs/UploadFile.svg";
import { ReactComponent as RectangleIcon } from "assets/Svgs/Rectangle.svg";
import { ReactComponent as DeleteIcon } from "assets/Svgs/DeleteColor.svg";
import { ReactComponent as EditIcon } from "assets/Svgs/EditIcon.svg";
import ClassNames from "Helpers/Common";
export const DragDropFile = ({
  srcFile = "",
  handleFileUpload,
  id = "file-upload",
}) => {
  const isVideo = srcFile && srcFile?.type?.includes("video");
  const isImage = srcFile && srcFile?.type?.includes("image");

  return (
    <div
      className="mt-2 min-w-[20rem] h-[20rem]"
      style={{
        backgroundImage: isImage ? `url(${srcFile.url})` : "",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "10% 90%",
      }}
    >
      <div className="text-center">
        {(!isVideo&&!isImage)&&<RectangleIcon className="min-w-[35rem] h-[20rem]" />}
        {(!isVideo&&!isImage) && (
          <PhotoIcon
            className={ClassNames(
              "mx-auto h-32 w-32 text-gray-300",
              srcFile ? "mt-14" : "-mt-60",
            )}
            aria-hidden="true"
          />
        )}
        {isVideo && (
          <video
            className="min-w-[35rem] h-[20rem] "
            controls
            muted
            loop
            playsInline
          >
            <source src={srcFile.url} type={srcFile.type} />
            Your browser does not support HTML5 video.
          </video>
        )}
        <div
          className={ClassNames(
            "mt-[3%] ml-[70%] flex text-sm leading-6 text-gray-600",
            isVideo && "-mt-[14%]", 
            isImage&&"mt-[42%]",
          )}
        >
          <label
            htmlFor={id}
            className="relative cursor-pointer text-c2lg text-white bg-black-pitch px-8 py-3 rounded-full"
          >
            <span>Cargar</span>
            <input
              id={id}
              name={id}
              type="file"
              className="sr-only"
              onChange={(e) => handleFileUpload(e.target.files[0])}
              accept="image/*,video/*"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

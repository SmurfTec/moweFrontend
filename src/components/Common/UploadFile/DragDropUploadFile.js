import { ReactComponent as PhotoIcon } from "assets/Svgs/UploadFile.svg";
import { ReactComponent as RectangleIcon } from "assets/Svgs/Rectangle.svg";

export const DragDropFile = ({ srcFile = "" }) => {
  return (
    <div
      className="mt-2   min-w-[35rem] h-[20rem]"
      style={{
        backgroundImage: `url(${srcFile})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <RectangleIcon className="min-w-[35rem] h-[20rem]" />
        <PhotoIcon
          className="mx-auto h-32 w-32 text-gray-300 -mt-60"
          aria-hidden="true"
        />

        <div className="mt-[3%] ml-[70%] flex text-sm leading-6 text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer text-c2lg text-white bg-black-pitch px-8 py-3 rounded-full"
          >
            <span>Cargar</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

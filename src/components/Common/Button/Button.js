import ClassNames from "Helpers/Common";
export const Button = ({
  btnText,
  isDisabled = false,
  onClick,
  className,
  isLoading = false,
  children,
  id = 1,
  rightAlignTex=false,
  variant = "Default",
}) => {
  return (
    <button
      type="button"
      key={id}
      disabled={isDisabled}
      onClick={() => onClick?.()}
      className={ClassNames(
        "flex justify-center items-center border border-transparent rounded-full  text-lg font-normal focus:outline-none text-gray-charcol bg-gray-light px-3 py-2",
        className,
      )}
    >
     {!rightAlignTex&& children}
      <div className="flex items-center justify-center gap-2 px-2">
        {isLoading ? (
          <div className="w-4 h-4 border-l-2 border-b-2 border-white rounded-full animate-spin" />
        ) : (
          btnText && <span>{btnText}</span>
        )}
      </div>
      {rightAlignTex&&children}
    </button>
  );
};

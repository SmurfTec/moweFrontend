import ClassNames from "Helpers/Common";
import { forwardRef, useEffect, useState } from "react";
import "./TextArea.css";

export const TextArea = forwardRef(
  (
    {
      rows = 1,
      label,
      textMsg = "",
      placeHolder = "Description",
      expandable = false,
      isOptional = true,
      className,
      errorMsg,
      onChange,
      onBlur,
      onFocus,
      onEnter,
      onKeyDown,
    },
    ref
  ) => {
    const [error, setError] = useState("");
    const [text, setText] = useState("");
    useEffect(() => {
      setText(textMsg);
    }, [textMsg]);

    useEffect(() => {
      if (errorMsg) {
        setError(error);
      }
    }, [errorMsg]);

    return (
      <div
        className={ClassNames(
          "TextArea_MainWrapper",
          className,
          error && "TextArea_MainWrapper-inValid"
        )}
      >
        {label && <label className="text-left">{label}</label>}
        <div className={ClassNames("TextArea_Wrapper")}>
          <textarea
            ref={ref}
            rows={rows}
            value={text}
            className={ClassNames(
              "TextAreaBasic dark:bg-gray-nightRider focus:ring-0 dark:text-white text-black focus:outline-none",
              className,
              error ? "border-red-500" : "shadow-sm dark:border-gray-nightRider"
            )}
            placeholder={placeHolder}
            onChange={({ target }) => {
              setError("");
              if (!onChange) {
                setText(target.value);
              } else{
                setText(target.value);
                 onChange?.(target)};
            }}
            onKeyDown={({ target, key }) => {
              if (expandable) {
                const { style, scrollHeight } = target;
                style.height = "inherit";
                style.height = `${scrollHeight}px`;
              }
              if (key === "Enter") {
                onEnter?.();
              }
              onKeyDown?.({ target, key });
            }}
            // onBlur={({target},setError)=>{
            //   onBlur?.(target,setError)
            // }}
            onBlur={({ target: { value } }) => {
              if (!text && isOptional) {
                setError(`${label || placeHolder} is required`);
              } else setError("");
              onBlur?.(value, setError);
            }}
            onFocus={() => {
              onFocus?.(text);
            }}
          />
        </div>
        {error && <div className="text-sm text-red-500">{error}</div>}
      </div>
    );
  }
);

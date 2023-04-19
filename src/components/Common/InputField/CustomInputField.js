import ClassNames from "Helpers/Common";
import React, { useState, useEffect } from "react";
import "./InputField.css";

export const CustomInputField = ({
  id,
  label,
  type = "text",
  placeholder = "",
  isRequired,
  maxLength,
  onBlur,
  isDisabled = false,
  value,
  onChange,
  children,
  onKeyDown,
  onIconClick,
  className,
  className1,
  labelClassName
}) => {
  const [fieldValue, setFieldValue] = useState("");
  const [fieldError, setFieldError] = useState("");

  useEffect(() => {
    if (value) {
      setFieldValue(value);
    }
  }, [value]);

  return (
    <div className="InputField_MainWrapper">
      {label && (
        <label htmlFor={id} className={ClassNames("text-black-deep block text-cmd font-medium mb-1",labelClassName)}>
          {label}
        </label>
      )}
      <div
        className={ClassNames(
          " border rounded-md shadow-2xl",
          fieldError
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500",
          isDisabled && "bg-gray-100",
          className
        )}
      >
        <input
          id={id}
          name={id}
          type={type}
          value={fieldValue}
          placeholder={placeholder}
          maxLength={maxLength}
          required={!!isRequired}
          disabled={isDisabled}
          className={ClassNames(
            "appearance-none block w-full placeholder-gray-400 focus:outline-none sm:text-sm",
            isDisabled && "cursor-not-allowed",
            className1
          )}
          onChange={({ target }) => {
            setFieldError(false);
            setFieldValue(
              target.value
            );
            onChange?.(
              target.value,
              setFieldError
            );
          }}
          onBlur={() => {
            if (fieldValue) {
              onBlur?.(fieldValue, setFieldError);
            } else if (!!isRequired && !fieldValue) {
              onBlur?.("", setFieldError);
              setFieldError(`${label || placeholder} is required`);
            }
          }}
          onKeyPress={(e) => onKeyDown?.(e)}
        />
        <span onClick={onIconClick?.()}>{children}</span>

      </div>
      {fieldError && (
        <div className="InputField_ErrorWrapper text-sm text-red-600">
          {fieldError}
        </div>
      )}
    </div>
  );
};

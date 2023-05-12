import { useState } from "react";
import TimePicker from "react-time-picker";
import "./TimePicker.css";
import ClassNames from "Helpers/Common";
export const Timepicker = ({
  id,
  label,
  value,
  isRequired = false,
  onBlur,
  placeholder = "",
}) => {
  const [fieldValue, setFieldValue] = useState("");
  const [fieldError, setFieldError] = useState("");
  return (
    <>
      <label className="TimePicker_MainWrapper block font-semibold mb-1">
        {label}
      </label>

      <TimePicker
        className={ClassNames("TimePicker_Input", )}
        id={id}
        value={value}
        clearIcon={false}
        clockIcon={false}
        hourPlaceholder="hour"
        minutePlaceholder="minute"
        isOpen={false}
        disableClock={true}
        onChange={(selectedTime) => {
          setFieldValue(selectedTime);
          setFieldError(false);
        }}
        onBlur={() => {
          if (fieldValue) {
            onBlur?.(fieldValue, setFieldError);
          } else if (isRequired && !fieldValue) {
            setFieldError(`${label ?? "Time"} is required`);
          }
        }}
      />
      {fieldError && (
        <div className="pt-2 text-sm text-red-600" id={`${label}-error`}>
          {fieldError}
        </div>
      )}
    </>
  );
};

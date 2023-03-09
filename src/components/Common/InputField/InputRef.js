import { forwardRef } from "react";

const InputRef = (
  {
    onChange,
    id,
    type = "text",
    placeholder = "",
    maxLength,
    className,
    onKeyDown,
  },
  ref
) => {
  return (
    <input
      ref={ref}
      type={type}
      className={className}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={({ target }) => onChange(target)}
      onKeyPress={(e) => onKeyDown?.(e)}
      id={id}
    />
  );
};

const Input = forwardRef(InputRef);

export default Input;

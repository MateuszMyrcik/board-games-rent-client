import React from "react";

interface IInputProps {
  id: string;
  label: string;
  placeholder?: string;
  inputChange?: any;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  id,
  label,
  placeholder,
  inputChange,
}) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        onChange={inputChange}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={id}
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};

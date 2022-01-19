import React from "react";

interface ITextAreaProps {
  id: string;
  label: string;
  placeholder?: string;
  inputChange: any;
}

export const TextArea: React.FunctionComponent<ITextAreaProps> = ({
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
      <textarea
        onChange={inputChange}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={id}
        placeholder={placeholder}
      />
    </>
  );
};

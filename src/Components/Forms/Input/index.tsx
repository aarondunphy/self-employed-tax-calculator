import React from "react";

type Props = {
  type?: string;
  placeholder?: string;
  label?: string;
  name: string;
  id: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = "text",
  name,
  id,
  placeholder,
  value,
  label,
  onChange,
}: Props) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-1/5 mx-auto py-2 px-5 sm:text-sm border-2 border-gray-300 rounded-md"
      />
    </>
  );
};

export default Input;

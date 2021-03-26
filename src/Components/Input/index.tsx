import React from "react";

type Props = {
  type?: string;
  placeholder?: string;
  name: string;
};

const Input = ({ type = "text", name, placeholder }: Props) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-5 sm:text-sm border-2 border-gray-300 rounded-md"
    />
  );
};

export default Input;

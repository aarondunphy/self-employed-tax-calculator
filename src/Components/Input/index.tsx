import React from "react";

type Props = {
  type?: string;
  placeholder?: string;
  name: string;
};

const Input = ({ type = "text", name, placeholder }: Props) => {
  return <input type={type} name={name} placeholder={placeholder} />;
};

export default Input;

import React from "react";

type Props = {
  label?: string;
  name: string;
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ name, id, checked, label, onChange }: Props) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
    </>
  );
};

export default Checkbox;

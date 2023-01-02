import React, { ChangeEventHandler } from "react";
interface InputProps {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string
}

function Input({ placeholder, handleChange, name, value }: InputProps) {
  return (
    <input 
        value={value}
        name={name}
        placeholder={placeholder} 
        onChange={handleChange} 
    />
)
}

export default Input;

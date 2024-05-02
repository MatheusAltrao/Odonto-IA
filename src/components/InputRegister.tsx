'use client';

import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputRegisterProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

const InputRegister = ({ name, placeholder, register, rules, type, error }: InputRegisterProps) => {
  return (
    <div className="w-full space-y-1">
      <input
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
        className="input "
      />
      {error && <p className="text-sm font-medium  text-red-500">{error}</p>}
    </div>
  );
};

export default InputRegister;

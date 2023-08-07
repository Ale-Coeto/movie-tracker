'use client';

import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    errors?: any;
    disabled?: boolean;
    type?: string;
    register: UseFormRegister<FieldValues>;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, errors, disabled, type, register, required }) => {
    return (
        <div className="flex flex-col mx-0 mb-8">
            <label className="text-gray-100 mb-2" htmlFor={id}>
                {label}
            </label>
            <input id={id} type={type} disabled={disabled} {...register(id,{required})} className="border-0 w-full m-0 ring-1 ring-inset bg-quaternary rounded-md p-1 text-white outline-none focus:ring-inset focus:ring-rose-500" />

        </div>
    )
};

export default Input;
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
            <label className="text-gray-600 mb-2" htmlFor={id}>
                {label}
            </label>
            <input id={id} type={type} disabled={disabled} {...register(id,{required})} className="border-0 w-full m-0 ring-1 ring-inset ring-gray-300 rounded-md p-1 focus:ring-green-500" />

        </div>
    )
};

export default Input;
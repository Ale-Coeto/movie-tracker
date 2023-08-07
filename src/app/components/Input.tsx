'use client'
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    textArea?: boolean;
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({ id, label, placeholder, type, required, register, textArea, errors }) => {
    return (
        <>
        <label className="font-semibold mt-6">
            {label}
        </label>
        
        {textArea ? (
            <textarea id={id} {...register(id, {required})} className="rounded-lg bg-quaternary p-1 focus:outline-none focus:outline-rose-500 h-36 align-text-top" />
            ) : (
            <input id={id} {...register(id, {required})}  className="rounded-lg bg-quaternary p-1 focus:outline-none focus:outline-rose-500"/>
        )}
        </>            
    )
}
export default Input;
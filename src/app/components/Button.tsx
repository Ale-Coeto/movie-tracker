'use client';

import clsx from "clsx";
import { useRouter } from "next/navigation";

interface ButtonProps {
    secondary?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    redirect?: boolean;
    href?: string;
    rounded?: boolean;
    p4?: boolean;
    wfull?: boolean;
    warning?: boolean;
    star?: boolean;
}


const Button: React.FC<ButtonProps> = ({ secondary, warning, star, children, onClick, type, rounded, p4, wfull, redirect, href }) => {
    const router = useRouter();
    
    if (redirect) {
        onClick = () => {
            router.push(href!);
        }
    }
    return (
        <button type={type} onClick={onClick}
            className={clsx(
                "text-base font-normal mx-2",
                wfull ? "w-full" : "w-fit",
                rounded ? "rounded-2xl" : "rounded-md",
                p4 ? "px-4 py-2" : "p-2",
                star && "bg-yellow-400 text-white hover:bg-yellow-300",
                warning ? "bg-red-500 text-white hover:bg-red-400" :
                    secondary ? "bg-gray-300 text-gray-800 hover:bg-gray-50" : "bg-teal-500 text-white hover:bg-teal-400",
            )}
        >
            {children}
        </button>
    )
}

export default Button;
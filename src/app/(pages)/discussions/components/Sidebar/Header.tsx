'use client'

import toast from "react-hot-toast";

interface HeaderProps {
    title: string;
    code: string;
}

const Header:React.FC<HeaderProps> = ({title, code}) => {
    const copy = () => {
        navigator.clipboard.writeText(code)
        .then(() => {
            toast.success("Copied to clipboard!")
        })
    }

    return (
        <div className="bg-primary drop-shadow-xl text-white text-2xl px-8 py-4 w-full pl-60 font-semibold fixed flex flex-row justify-between">
                <div className="self-end">
                    {title}
                </div>
                {code != "64cf25790ccd285092b7604a" && (
                <div onClick={copy} className="text-gray-500 text-lg font-normal self-end hover:underline">
                    Code: {code}
                </div>
                )}
        </div>
    )
}

export default Header;
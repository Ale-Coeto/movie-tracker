'use client'

import toast from "react-hot-toast";

interface HeaderProps {
    title: string;
    code: string;
}

const Header: React.FC<HeaderProps> = ({ title, code }) => {
    const copy = () => {
        navigator.clipboard.writeText(code)
            .then(() => {
                toast.success("Copied to clipboard!")
            })
    }

    return (
        <div className="md:py-3 md:text-2xl md:pl-60 md:top-16 md:border-b border-b pt-5 bg-primary drop-shadow-xl text-white text-lg px-8 py-2 w-full pl-16 top-12 font-semibold fixed flex flex-col sm:flex-row justify-between">
            <div className="sm:self-end ">
                {title}
            </div>
            {code != "64cf25790ccd285092b7604a" && (
                <div onClick={copy} className="text-gray-500 sm:text-lg text-sm font-normal  sm:self-end hover:underline">
                    Code: {code}
                </div>
            )}
        </div>
    )
}

export default Header;
'use client'
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import useRoutes from "@/app/utils/hooks/useRoutes";
import clsx from "clsx";
import { IoIosArrowUp } from "react-icons/io";
import useLogged from "@/app/utils/hooks/useLogged";
import { useRouter } from "next/navigation";
import BarElement from "./BarElement";
import { User } from "@prisma/client";
import Button from "../Button";
import { signOut } from "next-auth/react";

interface MobileBarProps {
    user?: User
}

const MobileBar: React.FC<MobileBarProps> = ({ user }) => {
    const [open, setOpen] = useState(false);
    const routes = useRoutes();
    const isLoggedIn = useLogged();
    const router = useRouter();

    const handleClick = () => {
        if (isLoggedIn)
            signOut();
        else
            router.push("/");
    }

    return (
        <div className="visible md:invisible">

            <div className="w-full z-50 bg-secondary border-b  fixed p-4 text-white text-2xl" onClick={() => setOpen(!open)}>
                <div className="flex flex-row justify-between">
                    <FiMenu />
                    {isLoggedIn && (
                        <div className="text-white text-base mr-2 self-center">
                            {user?.name}
                        </div>
                    )}
                </div>

                {open && (
                    <>
                        <div className="flex flex-col items-center py-4 px-5 bg-custom-dark-gray w-full">
                            {routes.map((route, key) => (
                                <BarElement key={key} label={route.label} href={route.href} />
                            ))}
                            <div className="mt-4 flex flex-row">
                                <Button rounded p4 onClick={handleClick}>
                                    {isLoggedIn ? "Logout" : "Login"}
                                </Button>
                            </div>
                        </div>
                    </>
                )}

                <div className="flex flex-col">

                </div>
                <div>

                </div>


            </div>

        </div>
    )
}

export default MobileBar;
'use client'
import { signOut } from "next-auth/react";
import Button from "../Button";
import BarElement from "./BarElement";
import { useRouter } from "next/navigation";
import useRoutes from "@/app/utils/hooks/useRoutes";
import useLogged from "@/app/utils/hooks/useLogged";
import { User } from '@prisma/client'

interface DesktopBarProps {
    user?: User
}

const DesktopBar: React.FC<DesktopBarProps> = ({ user }) => {
    const isLoggedIn = useLogged();
    const router = useRouter();
    const routes = useRoutes();

    const handleClick = () => {
        if (isLoggedIn)
            signOut();
        else
            router.push("/");
    }


    return (
        <div className="flex flex-row h-auto w-screen bg-secondary px-4 py-3 fixed shadow-md justify-between opacity-[0.97] backdrop-blur-sm items-center z-50">
            <div className="flex flex-row justify-start gap-6">
                {routes.map((route, key) => (
                    <BarElement key={key} label={route.label} href={route.href} />
                ))}


            </div>

            <div className="flex flex-row items-center gap-4">
                <div>
                    {isLoggedIn && (
                        <div className="text-white">
                            {user?.name}
                        </div>

                    )}
                </div>

                <Button rounded p4 onClick={handleClick}>
                    {isLoggedIn ? "Logout" : "Login"}
                </Button>
            </div>

        </div>

    )
}

export default DesktopBar;
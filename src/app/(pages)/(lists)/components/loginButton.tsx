'use client'

import Button from "@/app/components/Button";
import useLoggedIn from "@/app/utils/hooks/useLogged"

const Logbutton: React.FC = () => {
    const logged = useLoggedIn();

    return (
        <div>
            {!logged && (
                <div className="mb-16 p-8 text-center">
                    <p className="text-base font-light mb-4 text-gray-400">Log in to make a watch list </p>
                    <Button redirect href="/">
                        Login
                    </Button>

                </div>
            )}
        </div>

    )
}

export default Logbutton;
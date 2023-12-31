import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const session = useSession();
    
    useEffect(() => {
        if (session?.status === "authenticated") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [session?.status])

    return isLoggedIn;
}

export default useLoggedIn;
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";

const GoogleButton = () => {

    const handleClick = () => {
        signIn('google', { redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials!');
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in successfully!');
                }
            })
    }

    return (
        <div onClick={handleClick} className="bg-cyan-700 rounded-lg w-full self-center p-3 text-gray-300 flex justify-center my-2 ring-1 ring-inset hover:bg-cyan-600">
            <BsGoogle />
        </div>
    )
}

export default GoogleButton;
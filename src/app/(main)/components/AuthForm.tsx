'use client';

import Button from "@/app/components/Button";
import { useCallback, useEffect, useState } from "react";
import Input from "@/app/(main)/components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import GoogleButton from "./GoogleButton";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.status === "authenticated") {
            router.push("/dashboard");
        }
    }, [session?.status, router]);

    const toggleVariant = useCallback(() => {
        setVariant(variant === 'LOGIN' ? 'REGISTER' : 'LOGIN')
    }, [variant])

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            Name: '',
            Email: '',
            Password: ''
        }
    });

    const handleSkip = () => {
        router.push("/dashboard");
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant == 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false
            }).then((callback) => {
                if (callback?.error) {
                    toast.error("Invalid credentials");
                } else {
                    toast.success("Logged in successfully");
                }
            }).finally(() => {
                setIsLoading(false);
            })
        }
        if (variant == 'REGISTER') {
            axios.post('/api/register', data)
                .then(() => {
                    toast.success("Registered successfully")
                    signIn('credentials', data)
                })
                .catch(() => toast.error("Something went wrong"))
                .finally(() => setIsLoading(false));
        }
    }

    return (
        <>
            <div className="flex flex-col p-6  rounded-lg shadow sm:mx-auto sm:w-full sm:max-w-md bg-tertiary">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {(variant == "REGISTER") &&
                        <Input id="name" label="Name" errors={errors} disabled={isLoading} register={register} />
                    }
                    <Input id="email" label="Email" errors={errors} disabled={isLoading} register={register} />
                    <Input id="password" label="Password" type="password" errors={errors} disabled={isLoading} register={register} />

                    <Button type="submit" wfull>
                        {(variant == 'LOGIN') ? "Log in" : "Register"}
                    </Button>
                </form>


                    <div>
                        <div className="relative mt-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-400" />
                            </div>
                            <div className='relative flex justify-center text-sm my-2'>
                                <span className="bg-tertiary px-2 text-gray-400">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <GoogleButton />
                    </div>


                <div className="flex flex-row gap-2 mt-2">
                    <div className="text-gray-400 ">
                        {(variant == 'LOGIN') ? "Don't have an account?" : "Already have an account?"}
                    </div>
                    <div className="underline text-rose-500 hover:text-rose-400" onClick={toggleVariant}>
                        {(variant == 'LOGIN') ? "Sign up" : "Log in"}
                    </div>
                </div>


            </div>

            <Button secondary onClick={handleSkip}>
                Skip for now
            </Button>
        </>
    )
}

export default AuthForm;
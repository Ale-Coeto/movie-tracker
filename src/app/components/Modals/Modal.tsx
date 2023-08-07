'use client';

import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    video?: boolean;
    dark?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, video, dark }) => {
    return (
        <Transition.Root show={isOpen} as={Fragment} >
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-slate-800 bg-opacity-75 transition-opacity">

                    </div>
                </Transition.Child>
                <div className="fixed inset-0 z-10 overflow-auto ">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0" >
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                            <Dialog.Panel className={clsx(video && "sm:max-w-3xl", dark && "bg-tertiary", "sm:max-w-lg relative  transform  overflow-hidden  rounded-lg  bg-quaternary  px-4  pb-4 pt-5  text-left  shadow-xl  transition-all sm:my-8  sm:w-full  sm:p-6 ")}>
                                <div className="absolute right-0 top-0 pr-4 pt-4 sm:block z-10">
                                    <button type="button" className="rounded-md bg-quaternary text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" onClick={onClose}>
                                        <IoClose className="h-6 w-6" />
                                    </button>
                                </div>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>

        </Transition.Root>
    )
}

export default Modal;
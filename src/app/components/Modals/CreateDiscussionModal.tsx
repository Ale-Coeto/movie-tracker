'use client'
import { useState } from "react";
import Modal from "./Modal";
import Star from "./Star";
import Button from "../Button";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "../Input";
import { useRouter } from "next/navigation";

interface CreateDiscussionModalProps {
    isOpen: boolean;
    onClose: () => void;
    isLogged?: boolean;
}


const CreateDiscussionModal: React.FC<CreateDiscussionModalProps> = ({ isOpen, onClose, isLogged }) => {
    const router = useRouter();
    const {handleSubmit, register, setValue, formState: { errors } } = useForm<FieldValues>({defaultValues: {title: '', content: ''}})

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setValue('name', '');  
        axios.post('/api/createDiscussion', {
            ...data
        }).then((res) => {
            toast.success("Discussion created");
            onClose();
            router.refresh();
        }).catch((err) => {
            toast.error("Error creating discussion");
        })
        
    }


    return (
        <Modal isOpen={isOpen} onClose={onClose} dark>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-white flex flex-col gap-2">
                <p className="text-gray-300 font-light">
                    Insert the name of the discussion you want to create
                </p>
                    <Input label="Name" id="name" required register={register} errors={errors}/>
                    
                    <div className="flex flex-row justify-end mt-6">
                        <Button type="submit">
                            Create
                        </Button>
                        <Button secondary onClick={onClose}>
                            Cancel
                        </Button>
                    </div>
            </div>
            </form>
            </div>
        </Modal>
    )
};

export default CreateDiscussionModal;
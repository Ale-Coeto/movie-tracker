'use client'
import Modal from "./Modal";
import Button from "../Button";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "../Input";
import { useRouter } from "next/navigation";

interface JoinModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    const {handleSubmit, register, setValue, formState: { errors } } = useForm<FieldValues>({defaultValues: {title: '', content: ''}})

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setValue('code', '');  
        axios.post('/api/joinDiscussion', {
            ...data
        }).then((res) => {
            toast.success("Discussion joined");
            onClose();
            router.refresh();
        }).catch((err) => {
            toast.error("Error joining discussion");
        })

    }


    return (
        <Modal isOpen={isOpen} onClose={onClose} dark>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-white flex flex-col gap-2">
                <p className="text-gray-300 font-light">
                    Insert the code of the discussion you want to join
                </p>
                    <Input label="code" id="code" required register={register} errors={errors}/>
                    
                    <div className="flex flex-row justify-end mt-6">
                        <Button type="submit">
                            Join
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

export default JoinModal;
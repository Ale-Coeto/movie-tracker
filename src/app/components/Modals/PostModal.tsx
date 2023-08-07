'use client'
import { useState } from "react";
import Modal from "./Modal";
import Star from "./Star";
import Button from "../Button";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "../Input";

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: string;
}


const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, id }) => {
    const [input, setInput] = useState(() => -1);
    const {handleSubmit, register, setValue, formState: { errors } } = useForm<FieldValues>({defaultValues: {title: '', content: ''}})

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setValue('title', '');  
        setValue('content', '');
        axios.post('/api/createPost', {
            ...data,
            rating: input,
            discussionId: id

        }).then((res) => {
            toast.success("Post created");
            onClose();
        }).catch((err) => {
            toast.error("Error creating post");
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} dark>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-white flex flex-col gap-2">
                <p className="text-gray-300 font-light mb-2">
                    Add any comment or rate a movie!
                </p>
                    <Input label="Title" id="title" required register={register} errors={errors}/>
                    <Input textArea label="Content" id="content" required register={register} errors={errors}/>

                    
                    <label className="font-semibold mt-4">
                        Rating:
                    </label>
                    <div className="flex flex-row p-2 gap-1 justify-center mb-6" >
                        <Star setSelected={() => setInput(1)} fill={input >= 1}/>
                        <Star setSelected={() => setInput(2)} fill={input >= 2}/>
                        <Star setSelected={() => setInput(3)} fill={input >= 3}/>
                        <Star setSelected={() => setInput(4)} fill={input >= 4}/>
                        <Star setSelected={() => setInput(5)} fill={input >= 5}/> 
                    </div>
                    
                    <div className="flex flex-row justify-end">
                        <Button type="submit">
                            Post
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

export default PostModal;
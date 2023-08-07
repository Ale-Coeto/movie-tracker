import axios from "axios";
import Button from "../Button";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { isMovieAdded } from "@/app/actions/isAdded";

interface ActionModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: string;
    handleAdd: () => void;
    action: string;
}

const ActionModal: React.FC<ActionModalProps> = ({ isOpen, onClose, id, handleAdd, action }) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col text-white p-3">
                <div className="mb-4 text-">
                    Are you sure you want to {action.toLowerCase()} this {action=="add" ? "to" : "from"} your watchlist?
                </div>
                <div className="text-center">
                    <Button onClick={() => {
                        handleAdd()
                        onClose()
                        }}>
                        {action}
                    </Button>
                    <Button secondary onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    )
};

export default ActionModal;

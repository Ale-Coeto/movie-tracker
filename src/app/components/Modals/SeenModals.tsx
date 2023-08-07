import Button from "../Button";
import Modal from "./Modal";


interface SeenModalProps {
    isOpen: boolean;
    onClose: () => void;
    handleAdd: () => void;
    action: string;
}

const SeenModal: React.FC<SeenModalProps> = ({ isOpen, onClose, handleAdd, action }) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col text-white p-3">
                <div className="mb-4 text-">
                    Do you want to mark the movie as {action.toLowerCase()} ?
                </div>
                <div className="text-center">
                    <Button onClick={() => {
                        handleAdd()
                        onClose()
                    }}>
                        Yes
                    </Button>
                    <Button secondary onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    )
};

export default SeenModal;
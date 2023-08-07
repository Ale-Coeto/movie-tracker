import clsx from "clsx";
import { IoStar } from "react-icons/io5";

interface StarProps {
    setSelected?: () => void
    fill:boolean
}

const Star:React.FC<StarProps> = ({setSelected, fill}) => {
    return (
        <div>
            <div className={clsx("text-xl", fill && "text-red-400")} onClick={setSelected}> 
                <IoStar />
            </div>
        </div>
    )
};

export default Star;

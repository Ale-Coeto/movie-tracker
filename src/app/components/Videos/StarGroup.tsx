import { useState } from "react";
import Star from "../Modals/Star";

interface StarGroupProps {
    rate: number;
}

const StarGroup:React.FC<StarGroupProps> = ({rate}) => {
    let fill = [];
    for (let i = 0; i < 5; i++) {
        fill.push(rate > i)
    }
    return (
        <div className="flex flex-row gap-1">
            {fill.map((fillI, key) => (
                <Star key={key} fill={fillI}/>
            ))}
        </div>
    )
}

export default StarGroup;
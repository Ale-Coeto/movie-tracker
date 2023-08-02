'use client'
import axios from "axios";
import { BiPlusCircle } from 'react-icons/bi';
import isLoggedIn from "../../hooks/isLogged";
import Button from "../Button";
import { toast } from "react-hot-toast";
import { useState } from "react";
import VideoFooter from "./VideoFooter";

interface VideoElementProps {
    id: string;
    title: string;
    image?: string;
    description?: string;
    voteAverage?: number;
    date?: string;
    seen?: boolean;
    showComplete?: boolean;
    type: "movie" | "show";
}

const videoElement: React.FC<VideoElementProps> = ({ id, title, image, description, date, voteAverage, type, seen, showComplete }) => {
    const [clicked, setClicked] = useState(false);
    const isLogged = isLoggedIn();


    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleAdd = () => {
        console.log(id);
        axios.post("/api/addVideo", {
            id, type, title, image, description, date, voteAverage
        }).then(() => {
            toast.success("Added to watchlist");
        }).catch(() => {
            toast.error("Error adding to watchlist");
        })
    }

    return (
        <>

            <div className="flex bg-secondary p-4 m-2 rounded-md hover:bg-tertiary">
                {/* {clicked ? (
                <div className="text-white">
                    {description}
                </div>
                ) : ( */}
                <div className="flex flex-row w-full gap-4">
                    <div className="h-40 object-cover w-44">
                        <img src={`https://image.tmdb.org/t/p/original${image}`} alt="video thumbnail" className="h-full w-28 rounded-md object-cover" />
                    </div>

                    <div className="flex flex-col text-white w-full justify-between">
                        <div>
                            <h2 className="font-semibold mb-2">
                                {title}
                            </h2>
                            <p className="text-gray-300 font-light">
                                {date}
                                <br />
                                Rating: {voteAverage?.toFixed(1)}
                            </p>
                        </div>

                        {isLogged &&
                            <VideoFooter showComplete={showComplete} id={id} title={title} image={image} description={description} date={date} voteAverage={voteAverage} type={type} seen={seen} />
                        }
                    </div>
                </div>

            </div>
            {/* )} */}
        </>
    )
}

export default videoElement;
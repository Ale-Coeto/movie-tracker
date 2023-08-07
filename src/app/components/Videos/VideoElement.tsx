'use client'
import axios from "axios";
import { BiDotsHorizontal, BiDotsHorizontalRounded, BiPlusCircle } from 'react-icons/bi';
import isLoggedIn from "../../hooks/isLogged";
import Button from "../Button";
import { toast } from "react-hot-toast";
import { useState } from "react";
import VideoFooter from "./VideoFooter";
import { IoStar } from "react-icons/io5";
import Star from "../Modals/Star";
import StarGroup from "./StarGroup";
import VideoModal from "../Modals/VideoModal";

interface VideoElementProps {
    id: string;
    title: string;
    image?: string;
    description: string;
    voteAverage?: number;
    date?: string;
    seen?: boolean;
    showComplete?: boolean;
    type: "movie" | "show";
    explore?: boolean;
    rate?: number;
}

const videoElement: React.FC<VideoElementProps> = ({ id, title, image, description, date, voteAverage, type, seen, showComplete, explore, rate }) => {
    const [clicked, setClicked] = useState(false);
    const isLogged = isLoggedIn();
    const [info, setInfo] = useState(false);
    const [button, setButton] = useState(true);

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
            <VideoModal showComplete={showComplete} isOpen={info} onClose={() => setInfo(false)} id={id} title={title} description={description} image={image!} date={date!} voteAverage={voteAverage!} rate={rate!} seen={seen} type={type} />
            <div onClick={() => setInfo(true)} className="flex bg-secondary py-4 pl-4 m-2 rounded-md hover:bg-tertiary z-10">
                <div className="flex flex-row w-full gap-4">
                    <div className="h-44 object-cover w-44">
                        <img src={`https://image.tmdb.org/t/p/original${image}`} alt="video thumbnail" className="h-full w-28 rounded-md object-cover" />
                    </div>

                    <div className=" relative text-white w-full justify-between">
                        <div className="self-start text-left ml-2">
                            <div>
                                <h2 className="font-semibold mb-2">
                                    {title}
                                </h2>
                                <p className="text-gray-300 font-light">
                                    {date}
                                    <br />
                                    Rating: {voteAverage?.toFixed(1)}
                                    {explore && (
                                        <div>
                                            Type: {type}
                                        </div>
                                    )}
                                </p>
                            </div>
                            <div>
                                {rate && (
                                    <div className="bottom-0 flex flex-col content-center text-gray-300 font-light mt-4">
                                        My Rate:
                                        <StarGroup rate={rate} />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* {isLogged &&
                            <VideoFooter showComplete={false} id={id} title={title} image={image} description={description} date={date} voteAverage={voteAverage} type={type} seen={seen} />
                        } */}
                        <div className="absolute right-2 bottom-1">
                            <Button>
                                {showComplete ? (
                                    <BiDotsHorizontalRounded className="text-white text-right text-2xl " />
                                ) : (
                                    <BiPlusCircle className="text-white text-right text-2xl " />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default videoElement;
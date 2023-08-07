'use client'
import { BiDotsHorizontalRounded, BiPlusCircle } from 'react-icons/bi';
import Button from "../Button";
import { useState } from "react";
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
    const [info, setInfo] = useState(false);


    return (
        <>
            <VideoModal showComplete={showComplete} isOpen={info} onClose={() => setInfo(!info)} id={id} title={title} description={description} image={image!} date={date!} voteAverage={voteAverage!} rate={rate!} seen={seen} type={type} />
            <div onClick={() => setInfo(!info)} className="flex bg-secondary py-4 pl-4 m-2 rounded-md hover:bg-tertiary z-10">
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
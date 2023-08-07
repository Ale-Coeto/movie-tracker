import Button from "@/app/components/Button";
import Container from "../components/container";
import { getSeenShows, getToSeeShows } from "@/app/actions/getShows";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Logbutton from "../components/loginButton";

const ShowLists = async() => {
    const logged = false;
    const seenShows = await getSeenShows();
    const toSeeShows = await getToSeeShows();

    return (
        <>
            <Logbutton />
            <div className="bg-primary">
                <div className="text-white text-xl font-semibold mt-8 p-4">

                    <Container title="To watch" type="show" seen={true} movies={toSeeShows} />
                    {toSeeShows.length === 0 && (
                        <div className="mb-16 p-8 text-center">
                            <p className="text-base font-light mb-4 text-gray-400">No shows added yet </p>
                            <Button redirect href="/explore">
                                Find shows
                            </Button>
                            <Button redirect href="/dashboard">
                                See trending
                            </Button>
                        </div>
                    )}

                    <Container title="Watched" type="show" movies={seenShows} />
                    {seenShows.length === 0 && (
                        <div className="flex flex-col text-center content-center text-base font-light mb-4 text-gray-400">
                            No watched shows yet <br />
                            Click on the
                            <div className="self-center inline-block">
                                <AiOutlineCheckCircle />
                            </div>
                            icon to mark a show as watched
                        </div>
                    )}

                </div>
            </div>
        </>
    )
};

export default ShowLists;
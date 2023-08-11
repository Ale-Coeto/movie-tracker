//import { getMovieTitles } from "@/app/utils/actions/getMovies";
import SearchBar from "./components/SearchBar";
import axios from "axios";

const Explore = async() => {
    //const movies = await getMovieTitles();
    

    return (
        <div className="p-4 text-center content-center items-center w-full h-auto bg-primary">
            <h1 className="text-white text-2xl font-semibold mt-4 mb-2">
                Search for Movies and Shows
            </h1>
            <div className="">
                <div className="">
                    <SearchBar  />
                </div>
            </div>

        </div>
    )
}

export default Explore;
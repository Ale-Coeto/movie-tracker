'use client';
import { useState } from "react";
import { fetchData, getMovie, getTrendingMovies, getTrendingSeries } from "../../actions/getTrending";
import VideoElement from "../../components/Videos/VideoElement";
import VideoGrid from "../../components/Videos/VideoGrid";
import clsx from "clsx";

type Variant = "TRENDING" | "TOPRATED";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [variantMovies, setVariantM] = useState<Variant>('TRENDING');
    const [variantSeries, setVariantS] = useState<Variant>('TRENDING');

    const tmovies = getTrendingMovies("trending/movie/day", 10);
    const pmovies = getTrendingMovies("movie/top_rated", 10);
    const tseries = getTrendingSeries("popular", 10);
    const pseries = getTrendingSeries("top_rated", 10);

    const toggleMovies = () => {
        variantMovies === 'TRENDING' ? setVariantM('TOPRATED') : setVariantM('TRENDING');
    }

    const toggleSeries = () => {
        variantSeries === 'TRENDING' ? setVariantS('TOPRATED') : setVariantS('TRENDING');
    }

    return (
        <div className="p-8 bg-primary ">
            <div onClick={toggleMovies} className="text-white text-xl font-semibold mt-4">
                <span className={clsx(variantMovies == "TOPRATED" ? "text-gray-500" : "text-white")}> Top 10 trending movies / </span>
                <span className={clsx(variantMovies == "TRENDING" ? "text-gray-500" : "text-white")}> Popular movies </span>
            </div>
            <VideoGrid type="movie" items={variantMovies == 'TRENDING' ? tmovies : pmovies} />


            <div onClick={toggleSeries} className="text-white text-xl font-semibold mt-4 no-underline">
                <span className={clsx(variantSeries == "TOPRATED" ? "text-gray-500" : "text-white")}> Top 10 trending Series / </span>
                <span className={clsx(variantSeries == "TRENDING" ? "text-gray-500" : "text-white")}> Popular Series </span>
            </div>
            <VideoGrid type='show' items={variantSeries == 'TRENDING' ? tseries : pseries} />

        </div>
    )
}

export default Dashboard;
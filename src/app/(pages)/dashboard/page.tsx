'use client';
import { useState } from "react";
import { useTrendingMovies, useTrendingSeries } from "../../utils/hooks/getTrending";
import VideoGrid from "../../components/Videos/VideoGrid";
import clsx from "clsx";


type Variant = "TRENDING" | "TOPRATED";

const Dashboard = () => {

    const [variantMovies, setVariantM] = useState<Variant>('TRENDING');
    const [variantSeries, setVariantS] = useState<Variant>('TRENDING');



    const trendingMovies = useTrendingMovies("trending/movie/day", 10);
    const popularMovies = useTrendingMovies("movie/top_rated", 10);
    const trendingSeries = useTrendingSeries("popular", 10);
    const popularSeries = useTrendingSeries("top_rated", 10);

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
            <VideoGrid type="movie" items={variantMovies == 'TRENDING' ? trendingMovies : popularMovies} />


            <div onClick={toggleSeries} className="text-white text-xl font-semibold mt-4 no-underline">
                <span className={clsx(variantSeries == "TOPRATED" ? "text-gray-500" : "text-white")}> Top 10 trending Series / </span>
                <span className={clsx(variantSeries == "TRENDING" ? "text-gray-500" : "text-white")}> Popular Series </span>
            </div>
            <VideoGrid type='show' items={variantSeries == 'TRENDING' ? trendingSeries : popularSeries} />

        </div>
    )
}

export default Dashboard;
'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export const  useTrendingMovies = (type:string, limit: number) => {

    const [data, setData] = useState<any>([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${type}?api_key=8cdb9b1141309a7f573a6325cec1687f`)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [limit, type])
    if (data?.results) {
        return data?.results.slice(0, limit);
    }

    return [];

}

export const useTrendingSeries = (type:string, limit: number) => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${type}?api_key=8cdb9b1141309a7f573a6325cec1687f&language=en`)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [limit])
    if (data?.results) {
        return data?.results.slice(0, limit);
    }
    return [];
}




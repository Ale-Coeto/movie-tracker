'use client';

import axios from 'axios';
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { FieldValues, set, useForm } from 'react-hook-form';
import { IoSearch } from 'react-icons/io5';
import { getMovie } from '../../../actions/getTrending';
import VideoElement from '../../../components/Videos/VideoElement';
import VideoGrid from '../../../components/Videos/VideoGrid';
const SearchBar = () => {


    const [input, setInput] = useState('');
    const [movieSearch, setMovieSearch] = useState<any>({});
    const [clicked, setClicked] = useState(false);
    const [result, setResult] = useState<any>([]);
    const [showMenu, setShowMenu] = useState(false);
    const [isMovie, setIsMovie] = useState(false);

    // useEffect(() => {
    //     axios.get(`https://api.themoviedb.org/3/search/movie?query=${id}&api_key=8cdb9b1141309a7f573a6325cec1687f`)
    //         .then(response => setData(response.data))
    //         .catch(error => console.log(error))
    // }, [id])
    // if (data?.results)
    //     return data?.results.slice(0, limit);

    // return [];



    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/multi?query=${input}&api_key=8cdb9b1141309a7f573a6325cec1687f`)
            .then(response => response.json())
            .then(json => {
                if (json.results.length > 0)
                    if (json.results.filter((e: { title: string; name: string; genre_ids: number[], poster_path: string }) => (e.title || e.name) && e.genre_ids && e.poster_path !== null).length > 0)
                        setMovieSearch(json.results)
            })
            .catch(error => console.log(error))

        if (!movieSearch?.results)
            setMovieSearch([])


    }, [input])

    const handleList = (title: string) => {
        setInput(title);
        handleSearch();

    }
    const handleSearch = () => {
        setShowMenu(false);
        setResult(movieSearch);
        setClicked(true);
    }


    return (
        <div className='flex flex-col '>
            <div className="flex justify-center">

                <div className='basis-5/12 relative'>
                    <div className='flex flex-row justify-between mt-2 rounded-full bg-secondary pl-2 pr-1 max-h-18 w-full'>
                        <button onClick={handleSearch} className='text-rose-500 font-light ml-2 rounded-full p-2'>
                            <IoSearch size={24} />
                        </button>
                        <input className="rounded-full p-1 w-full max-h-18 bg-secondary text-gray-200 focus:text-white focus:outline-none" type="text" id="search" placeholder="Search" value={input} onChange={(e) => {
                            setInput(e.target.value)
                            setShowMenu(true);
                        }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                        />

                    </div>




                    <div className='absolute w-full backdrop-blur-sm z-50'>

                        {(showMenu && movieSearch && input != '') && (
                            <ul className='bg-secondary rounded-xl text-gray-200 l-0 mt-2 drop-shadow-2xl opacity-[0.97] text-left max-h-72 overflow-y-scroll'>
                                {movieSearch.slice(0, 10).map((item: any, key: any) => (
                                    item.title && (
                                        <div className="flex flex-row hover:bg-tertiary  my-1 p-2 hover:cursor-pointer" onClick={() => handleList(item.title)} key={key}>
                                            <IoSearch size={18} />
                                            <li className='ml-2' >
                                                {item.title}
                                            </li>

                                        </div>
                                    )
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

            </div>

            <div className='mt-8'>
                {clicked && result && (
                    <VideoGrid items={result} explore />
                )}
            </div>



        </div>
    );
}

export default SearchBar;
"use client"
import { Movie } from '@/@types/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'
import { FaSearch } from 'react-icons/fa'

type ListMovieProps = {
    apiKey: string
}

const ListMovie = ({ apiKey }: ListMovieProps) => {

    const [movies, setMovies] = useState<Movie[]>()
    const [search, setSearch] = useState<string>("")


    useEffect(() => {
        (async () => {
            const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
            const data = await resp.json()
            setMovies(data.results)
        })()
    }, [])

	const filteredMovies = search == null ? movies : movies?.filter((val) => {
		const searchFormatted = search.trim().toUpperCase();
		return val.title.toUpperCase().includes(searchFormatted);
	});


    return (
        <div className='flex flex-col'>
            <div className="flex justify-between h-full items-center">
                <Navbar />
                <div className='bg-white w-96 h-8 rounded-xl pl-4 p-1 pr-2 flex justify-between'>
                    <input className='text-slate-900 outline-none'
                        type="text"
                        name=""
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch
                        color='#000'
                        fontSize={20}
                        cursor={"pointer"}
                    />
                </div>
            </div>
            <div className='mt-5'
                style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}
            >
                {!!filteredMovies?.length && filteredMovies.map((data) =>{
                    return (
                        <div key={data.id} className='flex justify-center items-center flex-col'>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                alt='Gay'
                                width={200}
                                height={200}
                            />
                            <p className='text-wrap'>{data.title}</p>
                        </div>
                    )
                }) 
               

                }
            </div>
        </div>
    )
}

export default ListMovie
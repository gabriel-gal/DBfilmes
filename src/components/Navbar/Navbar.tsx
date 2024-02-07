"use client"
import React, { Dispatch, ForwardRefRenderFunction, SetStateAction, useCallback, useImperativeHandle, useRef, useState } from 'react'
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { useMovies } from '../ListMovie/MoviesContext';

interface INavbarAtributes {
    search: string | undefined
    setSearch: Dispatch<SetStateAction<string>>
}

const Navbar = () => {


    // setMovies(movies.filter((mov) => {
    //     mov.title.includes(search) ? mov : movies
    // }))



    return (

        <nav className='flex justify-between items-center px-10 py-5'>
            <div className='flex justify-center items-end'>
                <BiSolidCameraMovie
                    color='#ffd700'
                    fontSize={40}
                    cursor={"pointer"}
                />
                <p className='text-3xl ml-2 font-black'>
                    Movie DB
                </p>
            </div>
           
        </nav>
    )
}

export default Navbar
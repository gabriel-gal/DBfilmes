"use client"
import { Movie } from "@/@types/types"
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"

interface IMovies {
    movies: Movie[]
    setMovies: Dispatch<SetStateAction<Movie[]>>
}
const MovieContext = createContext<IMovies>({} as IMovies)

export const MovieProvider = ({ children }: PropsWithChildren) => {

    const [movies, setMovies] = useState<Movie[]>([])

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    )
}
export const useMovies = () => useContext(MovieContext)
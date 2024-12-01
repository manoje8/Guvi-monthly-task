import axios from "axios";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const MovieContext = createContext()

const MovieProvider = ({children, url}) => {
    const [movies, setMovies] = useState([]);
    const [fav, setFav] = useState([]);
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [current, setCurrent] = useState(1);
    const [postPerpage, setPostPerpage] = useState(20)

    const fetchMovies = useCallback(async() => {
        try 
        {
            setLoading(true)
            const response = await axios.get(url);
            setMovies(response.data)
        } 
        catch (error) 
        {
            console.error("Error fetching movies:", error);
            setError(error)
        } 
        finally 
        {
            setLoading(false)
        }
    },[url])

    useEffect(() => {
        fetchMovies()
    },[fetchMovies])


      // Calculate pagination indices
    const last = current * postPerpage;
    const first = last - postPerpage;
    const currentPage = movies.slice(first, last)

    // Filter movies based on search term
    const searchMovie = useMemo(() => {
        return currentPage.filter(movie => movie.name.toLowerCase().includes(searchValue.toLowerCase()))
    },[searchValue, currentPage])


    // Manage favorite movies
    const addFavorite = (movie) => {
        setFav([...fav, movie])
    }

    const removeFavorite = (id) => {
        setFav(fav.filter(val => val.id !== id))
    }

    const favoriteMovie = (id) => {
        return fav.some(movie => movie.id === id)
    }


    const toggleHandler = (movie) => {
        if(!favoriteMovie(movie.id))
        {
            addFavorite(movie)
        }else 
        {
            removeFavorite(movie.id)
        }
    }

    const handleFavoriteToggle = (event, movie) => {
        event.preventDefault();
        event.stopPropagation(); 
        toggleHandler(movie);
    };


    const context = {
        movies,
        fav,
        addFavorite,
        removeFavorite,
        favoriteMovie,
        toggleHandler,
        searchValue,
        setSearchValue,
        searchMovie,
        handleFavoriteToggle,
        loading,
        error,
        current,
        setCurrent,
        postPerpage,
        setPostPerpage
    }

    return <MovieContext.Provider value={context}>{children}</MovieContext.Provider>
}

export default MovieProvider
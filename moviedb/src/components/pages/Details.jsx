import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MovieContext } from "../../context/Movie";
import { heartFilled, heartHollow } from "../utils/Icons";

const Details = () => {
    const { movies, toggleHandler, favoriteMovie} = useContext(MovieContext);
    const [movieInfo, setMovieInfo] = useState(null)
    const {id} = useParams();

    const loadMovieInfo = useCallback(() => {
        if(!id || !movies) return;
        let selectedMovie = movies.find(movie => movie.id === Number(id))
        setMovieInfo(selectedMovie || null);
    },[movies, id])
    

    useEffect(() => {
        loadMovieInfo()
    },[loadMovieInfo])
    

    return (
        <div className="container-fluid details-container">
            {
                movieInfo ? 
                <div>
                     <div className="text-center bg-image">
                        <img src={movieInfo.image.original} className="card-img-top" alt="..."/>
                    </div>
                    <div className="movie-details">
                        <img src={movieInfo.image.original} className="card-img-top" alt="..."/>
                        <div className="details px-5">
                            <span className="movie-title px-3">{movieInfo.name}</span>
                            <span onClick={() => toggleHandler(movieInfo)}>{favoriteMovie(movieInfo.id) ? heartFilled:heartHollow}</span>
                            <div className="summary">
                                <span className="lead">Summary</span>
                                <div dangerouslySetInnerHTML={{ __html: movieInfo.summary }}/>
                                <hr style={{backgroundColor: "white", marginBottom: "5px"}}/>
                                <p><b>Status: </b>{movieInfo.status}</p>
                                <p><b>Language: </b>{movieInfo.language}</p>
                                <span className="pl-3"><b>Genre: </b></span>
                                {
                                    movieInfo.genres.map((val, id) => (
                                        <span key={id}>{val}, </span>
                                    ))
                                }
                                <p><b>Rating: </b>{movieInfo.rating.average/2}</p>
                                <p><b>Year: </b>{movieInfo.premiered}</p>
                            </div>
                        </div>
                    </div>              
                </div>
                : <p className="text-center lead">Loading...</p>
            }
        </div>
)}

export default Details
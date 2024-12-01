import { useContext, useRef } from "react"
import { MovieContext } from "../../context/Movie"
import "./Home.css";
import { heartFilled, heartHollow } from "../utils/Icons";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";


const Home = () => {
    const { favoriteMovie, searchMovie, handleFavoriteToggle, loading, error} = useContext(MovieContext);
    const topRef = useRef()

    return (
        <div className="container-fluid">
            <p className="lead" ref={topRef}>Movie List</p>
            <div className="list-container">
                <div className="movie-list">
                { loading && <p className="text-center">Loading...</p> }
                { error && <p className="text-center">{error}</p> }
                {
                    searchMovie.map((movie) => (
                        <Link key={movie.id} className="card" to={`/details/${movie.id}`}>
                            <img src={movie.image.medium} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <span onClick={(e) => handleFavoriteToggle(e,movie)}>{favoriteMovie(movie.id) ? heartFilled:heartHollow}</span>
                                <p className="card-title">Title: {movie.name}</p>
                                <p className="card-title">Rating: {movie.rating.average}</p>
                                <p className="card-title">Year: {movie.premiered.slice(0,4)}</p>
                            </div>
                        </Link>
                    ))
                }
                </div>
                <div>
                    <hr />
                    <Pagination topRef={topRef}/>
                </div>
            </div>
        </div>
    )
}

export default Home
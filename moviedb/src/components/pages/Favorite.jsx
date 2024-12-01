import { useContext } from "react"
import { MovieContext } from "../../context/Movie"
import { heartFilled, heartHollow } from "../utils/Icons"
import { Link } from "react-router-dom"

const Favorite = () => {
    const {fav, favoriteMovie, handleFavoriteToggle} = useContext(MovieContext);

    return (
        <div className="container-fluid">
            <p className="lead">Favorite</p>
            <div className="movie-list">
            {
                fav.map((movie) => (
                    <Link key={movie.id} className="card" to={`/details/${movie.id}`}>
                        <img src={movie.image.medium} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <span onClick={(e) => handleFavoriteToggle(e, movie)}>{favoriteMovie(movie.id) ? heartFilled:heartHollow}</span>
                            <p className="card-title">Title: {movie.name}</p>
                            <p className="card-title">Year: {movie.premiered.slice(0,4)}</p>
                        </div>
                    </Link>
                ))
            }
            </div>
        </div>
)}

export default Favorite
import { useContext } from "react";
import { MovieContext } from "../context/Movie";

const Pagination = ({topRef}) => {
    const {movies, postPerpage, setCurrent} = useContext(MovieContext);
    let pages = [];

    for(let i=1; i<=Math.ceil(movies.length/postPerpage); i++)
    {        
        pages.push(i)
    }

    const handleClick = (page) => {
        topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        setCurrent(page)
    }

    return (
        <div className="my-4">
            {
                pages.map((page, id) => (
                    <button className="btn btn-sm btn-light" key={id} onClick={() => handleClick(page)}>{page}</button>
                ))
            }
        </div>
    )
}

export default Pagination
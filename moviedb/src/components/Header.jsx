import { Link } from 'react-router-dom'
import './Header.css'
import { heartFilled, person, search } from './utils/Icons'
import { useContext } from 'react'
import { MovieContext } from '../context/Movie'


const Header = () => {
    const {setSearchValue, searchValue} = useContext(MovieContext)

    return(
    <div className="header" style={{ height: "88px" }}>
        <div className='title'>
            <h1 className='name'>Movie Info's</h1>
        </div>
        <nav className='header-utility'>
            <ul className='utility-items list'>
                <li className='utility-item -search'>
                    <input className='mx-2 seach-input' type="text" placeholder='Search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                    <Link className='button'>
                        {search}
                    </Link>
                </li>
                <li className='utility-item -wishlist'>
                    <Link className='icon-container' to= "/favorite">
                        {heartFilled}
                    </Link>
                </li>
                <li className='utility-item -profile'>
                    <Link className='icon-container'>
                        {person}
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
)
}
export default Header
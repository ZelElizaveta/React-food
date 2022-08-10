import { useContext } from 'react';
import { FoodContext } from '../../context/context';
import { Link } from 'react-router-dom';
import './search.css';


const Search = () => {

    const {value, setValue} = useContext(FoodContext);

    return (
        <>
            <div className="row">
                <div className="input-field col s12">
                    <input 
                        type="search" 
                        id="seacrh-field"
                        placeholder='Search' 
                        onChange={setValue}
                        value={value}
                        autoComplete="off"
                    />
                    <Link
                        to={`/:${value}`}
                        className='btn btn-search'
                    >
                        Search
                    </Link>
                </div>
            </div>
        </>
    )

}

export default Search
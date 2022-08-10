import { useContext, useEffect } from 'react';
import { FoodContext } from '../../context/context';
import { getfilteredCatalog } from '../../services/API';
import Preloader from '../Preloader';
import CategoryList from '../CategoryList';
import './filter.css';

const Filter = () => {
    const{goBack, value, setFiltredCatalog, loading} = useContext(FoodContext)

    useEffect(()=> {
        getfilteredCatalog(value).then(data => {
            setFiltredCatalog(data.results)
        })
    }, [value])

    return (
        <>
            <div className="wpapper">
                <button className='btn left btn-filter' onClick={goBack}>Go Back</button>
                {loading ? <Preloader/> : <CategoryList />}
            </div>
        </>
    )
}

export default Filter
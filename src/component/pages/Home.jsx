import { useEffect, useContext } from 'react';
import { getAllCategories } from '../../services/API';
import { FoodContext } from '../../context/context';
import Preloader from '../Preloader/';
import CategoryList from '../CategoryList/';
import Search from '../Search/';


const Home = () => {

    const {loading, setCategories, setFiltredCatalog} = useContext(FoodContext);

    useEffect(() => {
        getAllCategories('European').then(data => {
            setCategories(data.results);
            setFiltredCatalog(data.results);
        })
    }, [])
   

    return (
        <>
            <Search/>
            {loading ? <Preloader/> : <CategoryList />}
        </>
    )
}

export default Home
import { useEffect, useContext } from 'react';
import { getAllCategories, getfilteredCatalog } from '../../services/API';
import { FoodContext } from '../../context/context';
import Preloader from '../Preloader/';
import CategoryList from '../CategoryList/';
import Search from '../Search';

const About = () => {
    const {loading, setCategories, setFiltredCatalog} = useContext(FoodContext);

    useEffect(() => {
        getAllCategories('Chinese').then(data => {
            setCategories(data.results);
            setFiltredCatalog(data.results);
        })
    }, [])

    useEffect(() => {
        getfilteredCatalog('Chinese').then(data => {
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

export default About
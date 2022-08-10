import { useContext } from "react";
import { FoodContext } from "../../context/context";
import CategoryItem from "../CategoryItem/";
import './CategoryList.css'

const CategoryList = () => {
    const{filtredCatalog = []} = useContext(FoodContext);

    return (
        <div className="list">
            {filtredCatalog.map(item => (<CategoryItem key={item.id} {...item}/>))}
        </div>
    )
}

export default CategoryList
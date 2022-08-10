import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { getMealById, getAllIngredients, getInstructions } from '../../services/API';
import { FoodContext } from '../../context/context';
import Preloader from '../Preloader';
import './Recipe.css';



const Recipe = () => {
    const {id} = useParams();
    
    const {recipe, 
            setRecipe, 
            goBack, 
            setAllIngredients, 
            ingredients, 
            instructions, 
            setInstructions
        } = useContext(FoodContext);
    const {title} = recipe;

    useEffect(() => {
        getMealById(id).then(data => {
            setRecipe(data)
        })
    }, [id])

    useEffect(() => {
        getAllIngredients(id).then(data => {
            setAllIngredients(data.ingredients)
        })
    }, [id])

    useEffect(() => {
        getInstructions(id).then(data => {
            setInstructions(data)
        })
    }, [id])

  

    return (
        <>
            <button className='btn left' onClick={goBack}>Go Back</button>
            {!recipe.id ? <Preloader/> : (
                <div className="recipe">
                    <h4 className='recipe-title'>{title}</h4>
                    <table className='highlight'>
                        <thead>
                            <tr>
                                <th>Ingredients</th>
                                <th>Value</th>
                                <th>Metric</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredients.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.amount.metric.value}</td>
                                    <td>{item.amount.metric.unit ? item.amount.metric.unit : '-'}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                    <p className='recipe-span'><i className="material-icons icons-recipe small">cake</i>Cooking directions</p>
                    <ul className="instructions-step">
                        {instructions[0].steps.map(item => (
                            <li key={item.number}
                            className="step">
                            {item.step}
                            </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </>
    )

}

export default Recipe
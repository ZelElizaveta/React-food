import React, {createContext, useReducer} from "react";
import Reduser from './reduser';
import { useNavigate } from "react-router-dom";



export const FoodContext = createContext();

const initialState = {
    catalog: [],
    loading: true,
    recipe: {},
    ingredients: [],
    instructions: [],
    value: '',
    filtredCatalog: []
}

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(Reduser, initialState);
    const navigate = useNavigate();

    value.setCategories = (data) => {
        dispatch({
            type: 'SET-CATEGORIES',
            payload: data
        })
    }

    value.setRecipe = (data) => {
        dispatch({
            type: 'SET-RECIPE',
            payload: data
        })
    }

    value.goBack = () => {
        navigate(-1);
    };

    value.setAllIngredients = (data) => {
        dispatch({
            type: 'SET-INGRIDIENTS',
            payload: data
        })
    }

    value.setInstructions = (data) => {
        dispatch({
            type: 'SET-INSTRUCTIONS',
            payload: data
        })
    }

    value.setValue = (event) => {
        dispatch({
            type: 'SET-VALUE',
            payload: event.target.value.toLowerCase()
        })
    }

    value.setFiltredCatalog = (data) => {
        dispatch({
            type: 'SET-FILTER',
            payload: data
        })
    }

    return (
        <FoodContext.Provider value={value}>
            {children}
        </FoodContext.Provider>
    )
}
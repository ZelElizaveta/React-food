import {API_URL, API_KEY} from './config';

const getMealById = async (id) => {
    const response = await fetch(`${API_URL}/${id}/summary?apiKey=${API_KEY}`);
    return await response.json();
};

const getAllIngredients = async (id) => {
    const response = await fetch(`${API_URL}/${id}/ingredientWidget.json?apiKey=${API_KEY}`);
    return await response.json();
};
const getInstructions = async (id) => {
    const response = await fetch(`${API_URL}/${id}/analyzedInstructions?apiKey=${API_KEY}`);
    return await response.json();
};


const getAllCategories = async (cuisine) => {
    const response = await fetch(API_URL + `complexSearch?cuisine=${cuisine}&type=main course&number=20&addRecipeInformation=true&instructionsRequired=true&apiKey=` + API_KEY);
    return await response.json();
};

const getfilteredCatalog = async (str, cuisine) => {
    const response = await fetch(`${API_URL}/complexSearch?query=${str}&instructionsRequired=true&number=20&addRecipeInformation=true&apiKey=${API_KEY}`);
    return await response.json();
}



export {getMealById, getAllCategories, getAllIngredients, getInstructions, getfilteredCatalog}
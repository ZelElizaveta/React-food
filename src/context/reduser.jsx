
const Reduser = (state, {type, payload}) => { 
    switch (type) {
        case 'SET-CATEGORIES':
            return {
                ...state,
                catalog: payload,
                loading: false
            }
        
        case 'SET-RECIPE': 
            return {
                ...state,
                recipe: payload
            }
        case 'SET-INGRIDIENTS':
            return {
                ...state,
                ingredients: payload
            }
        case 'SET-INSTRUCTIONS': 
            return {
                ...state,
                instructions: payload
            }
        case 'SET-VALUE': 
            return {
                ...state,
                value: payload
            }
        case 'SET-FILTER': 
            return {
                ...state,
                filtredCatalog: payload
            }
        default: 
            return state
    }
}

export default Reduser
import { Reducer } from "redux";
import { ADD_ARTICLE, DELETE_ARTICLE } from './action.js'

const initialState = {
    article: []
}

const rootReducer = (state=initialState,action) => {
    switch(action.type) {
        case ADD_ARTICLE: {
            return {...state,article: [...state.article,action.payload]}
        }
        case DELETE_ARTICLE: {
            const article = [...state.article]
            article.splice(0,article.length-1)
            return {...state,article}
        }
        default:
            return state
    }
}

export default rootReducer
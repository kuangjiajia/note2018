export const ADD_ARTICLE = "ADD_ARTICLE"
export const DELETE_ARTICLE = "DELETE_ARTICLE"

export const add_article = (name) => {
    return {
        type: ADD_ARTICLE,
        payload: {
            name
        }
    }
}

export const delete_article = () => {
    return {
        type: DELETE_ARTICLE
    }
} 
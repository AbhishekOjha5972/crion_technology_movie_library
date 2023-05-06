import { ERROR, LOADING, SUCCESS, SUCCESS_SPECIFIC } from "./movies.types";

let initialState = {
    loading: false,
    error: false,
    movies: [],
    specific:{}
}


export const moviesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOADING:
            {
                return { ...state, loading: true }
            }
        case ERROR:
            {
                return { ...state, loading: false, error: true }
            }
        case SUCCESS:
            {
                return { ...state, loading: false, error: false, movies: payload }
            }
        case SUCCESS_SPECIFIC:
            {
                return { ...state, loading: false, error: false, specific: payload }
            }
        default:
            return state
    }

}
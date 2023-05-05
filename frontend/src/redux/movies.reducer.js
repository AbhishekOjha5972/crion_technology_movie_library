import { ERROR, LOADING, SUCCESS } from "./movies.types";

let initialState = {
    loading: false,
    error: false,
    movies: []
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
        default:
            return state
    }

}
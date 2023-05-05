import { LOADING, SUCCESS } from "./movies.types"

export const getMoviesAction = () => async (dispatch) => {
    dispatch({type:LOADING})
    try {
        let response = await fetch(`${import.meta.env.VITE_BASEURL}/movies`);
        let data = await response.json()
        dispatch({type:SUCCESS,payload:data.data})
    } catch (err) {

    }
}
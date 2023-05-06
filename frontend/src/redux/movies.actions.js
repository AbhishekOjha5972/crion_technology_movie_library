import { ERROR, LOADING, SUCCESS, SUCCESS_SPECIFIC } from "./movies.types"

export const getMoviesAction = (query="") => async (dispatch) => {
    dispatch({ type: LOADING })
    try {
        let response = await fetch(`${import.meta.env.VITE_BASEURL}/movies?q=${query}`);
        let data = await response.json()
        dispatch({ type: SUCCESS, payload: data.data })
    } catch (err) {
        dispatch({ type: ERROR })
    }
}


export const postMoviesAction = (cred) => async (dispatch) => {
    console.log('cred:', cred)
    dispatch({ type: LOADING })
    try {
        await fetch(`${import.meta.env.VITE_BASEURL}/movies`, {
            method: "POST",
            body: JSON.stringify(cred),
            headers: {
                "Content-Type": "application/json"
            }
        });
        dispatch(getMoviesAction())
    } catch (err) {
        dispatch({ type: ERROR })
    }
}



export const deleteMoviesAction = (id) => async (dispatch) => {
    dispatch({ type: LOADING })
    try {
        await fetch(`${import.meta.env.VITE_BASEURL}/movies/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        dispatch(getMoviesAction())
    } catch (err) {
        dispatch({ type: ERROR })
    }
}


export const getSortMoviesAction = (cred) => async (dispatch) => {
    dispatch({ type: LOADING })
    try {
       let data =  await fetch(`${import.meta.env.VITE_BASEURL}/movies/sort?q=${cred.query}&order=${cred.order}`);
        let res =  await data.json()
        dispatch({ type: SUCCESS, payload: res.data })

    } catch (err) {
        dispatch({ type: ERROR })
    }
}


export const getCommonSortMoviesAction = (cred) => async (dispatch) => {
    dispatch({ type: LOADING })
    try {
       let data =  await fetch(`${import.meta.env.VITE_BASEURL}/movies/common/sort?q=${cred.query}&order=${cred.order}`);
        let res =  await data.json()
        dispatch({ type: SUCCESS, payload: res.data })
    } catch (err) {
        dispatch({ type: ERROR })
    }
}


export const getSpecificMovieAction = (id) => async (dispatch) => {
    dispatch({ type: LOADING })
    try {
       let data =  await fetch(`${import.meta.env.VITE_BASEURL}/movies/specific/${id}`);
        let res =  await data.json()
        dispatch({ type: SUCCESS_SPECIFIC, payload: res.data })
    } catch (err) {
        dispatch({ type: ERROR })
    }
}


export const updateMoviesAction = (cred,id) => async (dispatch) => {
    dispatch({ type: LOADING })
    try {
        await fetch(`${import.meta.env.VITE_BASEURL}/movies/${id}`, {
            method: "PATCH",
            body:JSON.stringify(cred),
            headers: {
                "Content-Type": "application/json"
            }
        });
        dispatch(getMoviesAction())
    } catch (err) {
        dispatch({ type: ERROR })
    }
}

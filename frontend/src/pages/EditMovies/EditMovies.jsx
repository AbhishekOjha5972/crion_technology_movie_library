import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesAction, getSpecificMovieAction, updateMoviesAction } from '../../redux/movies.actions'
import { useNavigate, useParams } from 'react-router-dom';

const EditMovies = () => {
    const { specific, loading } = useSelector((store) => store.masterMovies)
    const dispatch = useDispatch()
    const { Id } = useParams();
    let titleRef = useRef(null);
    let urlRef = useRef(null);
    let directorRef = useRef(null);
    let yearRef = useRef(null);
    let synopsisRef = useRef(null);
    let ratingRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getSpecificMovieAction(Id))
    }, [])

    const handleUpdate = () => {
        let obj = {
            title: titleRef.current.value,
            url: urlRef.current.value,
            director: directorRef.current.value,
            year: yearRef.current.value,
            synopsis: synopsisRef.current.value,
            ratings: { IMDb: Number(ratingRef.current.value) }
        }
        dispatch(updateMoviesAction(obj,specific._id))
        navigate('/')

    }

    return loading ? <h1 style={{color:"white",textAlign:"center"}}>Loading...</h1> : (
        <div>
            <div className='form-class' style={{color:"white",width:"70%"}}>
                <div className="std-label-input">
                    <label className="std-label">Title Name</label>
                    <input ref={titleRef} className="std-input" id="title" required defaultValue={specific.title} />
                </div>
                <div className="std-label-input">
                    <label className="std-label">Image URL</label>
                    <input ref={urlRef} className="std-input" id="url" required defaultValue={specific.url} />
                </div>
                <div className="std-label-input">
                    <label className="std-label">Director Name</label>
                    <input ref={directorRef} className="std-input" id="director" required defaultValue={specific.director} />
                </div>
                <div className="std-label-input">
                    <label className="std-label">Year</label>
                    <input ref={yearRef} className="std-input" type='text' id="year" maxLength={4} required defaultValue={specific.year} />
                </div>
                <div className="std-label-input">
                    <label className="std-label">Rating</label>
                    <input ref={ratingRef} className="std-input" id="rating" maxLength={3} required defaultValue={specific?.ratings?.IMDb} />
                </div>
                <div className="std-label-input">
                    <label className="std-label">Synopsis</label>
                    <textarea
                        className="std-input"
                        required
                        id="synopsis"
                        ref={synopsisRef}
                        defaultValue={specific.synopsis}
                    ></textarea>
                </div>
                <button className='std-btn' onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}

export default EditMovies
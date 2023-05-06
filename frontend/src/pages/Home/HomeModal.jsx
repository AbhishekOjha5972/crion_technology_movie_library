import React, { useRef, useState } from 'react';
import '../../components/Modal/Modal.css';
import { RxCrossCircled } from "react-icons/rx"
import { GrAddCircle } from "react-icons/gr"
import { useDispatch } from 'react-redux';
import { postMoviesAction } from '../../redux/movies.actions';

function HomeModal(props) {
    const { isOpen, onClose, element } = props;
    const dispatch = useDispatch()
    let [inputSubtastLength, setInputSubtastLength] = useState([]);
    let [cast, setCast] = useState([])
    let nameRef = useRef(null)
    let roleRef = useRef(null)
    let titleRef = useRef(null);
    let urlRef = useRef(null);
    let directorRef = useRef(null);
    let yearRef = useRef(null);
    let synopsisRef = useRef(null);
    let ratingRef = useRef(null);


    if (!isOpen) {
        return null;
    }

    const handleDeleteSubtasks = (val) => {
        const deleteVal = [...inputSubtastLength];
        deleteVal.splice(val, 1);
        setInputSubtastLength(deleteVal);
    };

    const handleChange = (val, i) => {
        const inputData = [...inputSubtastLength];
        inputData[i] = val.target.value;
        setInputSubtastLength(inputData);
    };


    const handleAddCast = () => {
        if (nameRef.current && roleRef.current) {
            let obj = {
                name: nameRef.current.value,
                role: roleRef.current.value
            }
            setCast([...cast, obj]);
        }
    }


    const handleAddMovie = () => {
        if (inputSubtastLength.length && cast.length &&
            titleRef.current.value &&
            urlRef.current.value &&
            directorRef.current.value &&
            yearRef.current.value &&
            ratingRef.current.value &&
            synopsisRef.current.value) {
            let obj = {
                title: titleRef.current.value,
                url: urlRef.current.value,
                director: directorRef.current.value,
                year: yearRef.current.value,
                genre: inputSubtastLength,
                synopsis: synopsisRef.current.value,
                cast: cast,
                ratings: { IMDb: Number(ratingRef.current.value) }
            }
            console.log("obj:", obj)
            dispatch(postMoviesAction(obj))
            setCast([])
            setInputSubtastLength([])
        } else {
            if (inputSubtastLength.length == 0) {
                alert("Please add genre.")
                return;
            }
            if (cast.length == 0) {
                alert("Please add cast.")
                return;
            }
        }
    }



    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Add New Movie</h2>
                    <RxCrossCircled onClick={onClose} />
                </div>
                <div className="modal-body">
                    <div className='form-class'>
                        <div className="std-label-input">
                            <label className="std-label">Title Name</label>
                            <input ref={titleRef} className="std-input" id="title" required />
                        </div>
                        <div className="std-label-input">
                            <label className="std-label">Image URL</label>
                            <input ref={urlRef} className="std-input" id="url" required />
                        </div>
                        <div className="std-label-input">
                            <label className="std-label">Director Name</label>
                            <input ref={directorRef} className="std-input" id="director" required />
                        </div>
                        <div className="std-label-input">
                            <label className="std-label">Year</label>
                            <input ref={yearRef} className="std-input" type='text' id="year" maxLength={4} required />
                        </div>
                        <div className="std-label-input">
                            <label className="std-label">Rating</label>
                            <input ref={ratingRef} className="std-input" id="rating" maxLength={3} required />
                        </div>
                        <div className="std-label-input">
                            <label className="std-label">Synopsis</label>
                            <textarea
                                className="std-input"
                                required
                                id="synopsis"
                                ref={synopsisRef}
                            ></textarea>
                        </div>
                        <div className="std-label-input">
                            <label className="std-label">Genre</label>
                            {inputSubtastLength.map((ele, i) => {
                                return (
                                    <div
                                        key={i}
                                        className='genre-adding'
                                    >
                                        <input
                                            id="genre"
                                            value={ele}
                                            className="std-input"
                                            onChange={(e) => handleChange(e, i)}
                                            placeholder='EX. Action'
                                            required
                                        />
                                        <button
                                            onClick={() => handleDeleteSubtasks(i)}
                                            w="inherit"
                                            className='std-btn'
                                        >
                                            ❌
                                        </button>
                                    </div>
                                );
                            })}
                            <button
                                type="button"
                                className="std-btn"
                                onClick={() =>
                                    setInputSubtastLength([...inputSubtastLength, []])
                                }
                            >
                                +Add New Genre
                            </button>
                        </div>
                    </div>
                    <div className="std-label-select">
                        <label className="std-label">Cast</label>
                        <div className='cast-adding'>
                            {cast?.map((ele, i) => {
                                return <div key={i}>
                                    <span><bdi>Name: </bdi>{ele.name}</span>
                                    <span><bdi>Role: </bdi>{ele.role}</span>
                                </div>
                            })}
                        </div>
                        <div className='cast-input'>
                            <input ref={nameRef} id="name" placeholder='Name' />
                            <input ref={roleRef} id="role" placeholder='Role' />
                            <button onClick={handleAddCast} className='std-btn'>
                                <GrAddCircle />
                            </button>
                        </div>
                        <button className='std-btn' onClick={handleAddMovie}>Add Movie</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeModal;

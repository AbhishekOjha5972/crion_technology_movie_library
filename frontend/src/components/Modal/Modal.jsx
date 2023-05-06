import React from 'react';
import './Modal.css';
import { RxCrossCircled } from "react-icons/rx"
import { AiFillDelete } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { deleteMoviesAction } from '../../redux/movies.actions';
import { AiFillEdit } from "react-icons/ai"
import { Link } from 'react-router-dom';

function Modal(props) {
    const dispatch = useDispatch()
    const { isOpen, onClose, element } = props;
    if (!isOpen) {
        return null;
    }


    const handleDelete = () => {
        dispatch(deleteMoviesAction(element._id))
    }
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{element.title}</h2>
                    <RxCrossCircled onClick={onClose} />
                </div>
                <div className="modal-body">
                    <div>
                        <h3 className='modal-sub-headings'>Synopsis</h3>
                        <span>{element.synopsis}</span>
                    </div>
                    <div>
                        <h3 className='modal-sub-headings'>Top Cast</h3>
                        <div className='modal-cast'>
                            {
                                element.cast.map((ele, i) => {
                                    return <div key={i}>
                                        <span><bdi>Name: </bdi>{ele.name}</span>
                                        <span><bdi>Role: </bdi>{ele.role}</span>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <AiFillDelete className="delete-movie" onClick={handleDelete} />
                <Link to={`/edit/${element._id}`}>
                    <AiFillEdit className='edit-movie' />
                </Link>
            </div>
        </div>
    );
}

export default Modal;

import React from 'react';
import './Modal.css';
import { RxCrossCircled } from "react-icons/rx"

function Modal(props) {
    const { isOpen, onClose, element } = props;
    if (!isOpen) {
        return null;
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
            </div>
        </div>
    );
}

export default Modal;

import React, { useRef, useState } from 'react';
import '../../components/Modal/Modal.css';
import { RxCrossCircled } from "react-icons/rx"

function HomeModal(props) {
    const { isOpen, onClose, element } = props;
    let [inputSubtastLength, setInputSubtastLength] = useState([]);
    let formRef = useRef(null);
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


    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Add New Movie</h2>
                    <RxCrossCircled onClick={onClose} />
                </div>
                <div className="modal-body">
                    <form ref={formRef}>
                        <div className="std-label-input">
                            <label className="std-label">Task Name</label>
                            <input className="std-input" id="title" required />
                        </div>
                        <div className="std-label-input">
                            <label className="std-label">Description</label>
                            <textarea
                                className="std-input"
                                required
                                id="description"
                            ></textarea>
                        </div>
                        <div className="std-label-input">
                            <label className="std-label">Subtasks</label>
                            {inputSubtastLength.map((ele, i) => {
                                return (
                                    <div
                                        key={i}
                                    >
                                        <input
                                            id="subtasks"
                                            value={ele}
                                            w="80%"
                                            className="std-input"
                                            onChange={(e) => handleChange(e, i)}
                                            required
                                        />
                                        <button
                                            onClick={() => handleDeleteSubtasks(i)}
                                            w="inherit"
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
                                +Add New Subtasks
                            </button>
                        </div>
                        <div className="std-label-select">
                            <label className="std-label">Current Status</label>
                            <select className="std-select" required id="status">
                                <option value="Todo">Todo</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HomeModal;

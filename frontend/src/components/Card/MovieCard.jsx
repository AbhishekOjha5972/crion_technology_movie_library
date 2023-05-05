import { useEffect, useState } from "react"
import "./MovieCard.css"
import Modal from "../Modal/Modal"

const MovieCard = ({ element }) => {
    let { title, url, year, _id, genre, director, synopsis, ratings, cast } = element
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='card-container' onClick={openModal}>
            <div><img src={url} /></div>
            <div className='card-text-content'>
                <span>{title}</span>
                <span>{director}</span>
                <span>{year}</span>
                <span className="movie-rating"><bdi>{ratings.IMDb}</bdi>/10</span>
                <div className='card-genre'>
                    {
                        genre.map((ele, i) => {
                            return <span key={i}>{ele}</span>
                        })
                    }
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                element={element}
            />
        </div>
    )
}

export default MovieCard
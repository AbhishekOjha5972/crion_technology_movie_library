import React, { useRef } from 'react'
import "./MovieCard.css"
import {RxCrossCircled} from "react-icons/rx"

const MovieCard = ({ element }) => {
    let { title, url, year, _id, genre, director, synopsis, rating, cast } = element
    const modalRef = useRef(null)
    return (
        <div className='card-container' onClick={()=>modalRef.current.showModal()}>
            <div><img src={url} /></div>
            <div  className='card-text-content'>
                <span>{title}</span>
                <span>{director}</span>
                <span>{year}</span>
                <div className='card-genre'>
                    {
                        genre.map((ele,i)=>{
                            return <span key={i}>{ele}</span>
                        })
                    }
                </div>
            </div>
            <dialog ref={modalRef}>
                <RxCrossCircled onClick={()=>modalRef.current.close()}/>
            </dialog>
        </div>
    )
}

export default MovieCard
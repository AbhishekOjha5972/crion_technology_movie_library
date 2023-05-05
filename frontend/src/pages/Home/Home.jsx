import React, { useEffect, useState } from 'react'
import "./Home.css"
import Navbar from '../../components/globalComp/Navbar'
import { useDispatch, useSelector } from "react-redux"
import { getMoviesAction } from '../../redux/movies.actions'
import MovieCard from '../../components/Card/MovieCard'
import {GrAdd} from "react-icons/gr"
import HomeModal from './HomeModal'

const Home = () => {
    const dispatch = useDispatch()
    const { loading, movies } = useSelector((store) => store.masterMovies)
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        dispatch(getMoviesAction())
    }, [])



    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <div className='main-container'>
            <Navbar />
            <section className='main-content'>
                {
                    loading ? <h1>Loading...</h1> : movies.map((ele, i) => {
                        return <MovieCard key={i} element={ele}/>
                    })
                }
            </section>
            <button className='add-new-movie' onClick={openModal}><GrAdd/></button>
            <HomeModal
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    )
}

export default Home
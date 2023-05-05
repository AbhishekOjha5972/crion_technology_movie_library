import React, { useEffect } from 'react'
import "./Home.css"
import Navbar from '../../components/globalComp/Navbar'
import { useDispatch, useSelector } from "react-redux"
import { getMoviesAction } from '../../redux/movies.actions'
import MovieCard from '../../components/Card/MovieCard'

const Home = () => {
    const dispatch = useDispatch()
    const { loading, movies } = useSelector((store) => store.masterMovies)
    useEffect(() => {
        dispatch(getMoviesAction())
    }, [])
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
        </div>
    )
}

export default Home
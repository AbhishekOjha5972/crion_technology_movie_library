import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import EditMovies from './pages/EditMovies/EditMovies'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:Id" element={<EditMovies />} />
      </Routes>
  )
}

export default AllRoutes
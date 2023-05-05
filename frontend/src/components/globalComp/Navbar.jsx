import React, { useState } from 'react'
import "./Navbar.css"
import { BsSearch } from "react-icons/bs"
import { BiSortAlt2 } from "react-icons/bi"


const Navbar = () => {
    const [sort, setSort] = useState("")
    const [order, setOrder] = useState("asc")


    return (
        <nav>
            <section className='nav-logo-search'>
                <span>Crion <bdi>Teck.</bdi></span>
                <div className='nav-search'>
                    <BsSearch />
                    <input placeholder='Search everything' />
                </div>
            </section>
            <section>
            </section>
            <section className='nav-sort'>
                <BiSortAlt2 />
                <div className='van-sort-fields'>
                    <div>
                        <label>
                            <input type="radio" name="searchBy" value="title" />
                            Title
                        </label>
                        <label>
                            <input type="radio" name="searchBy" value="director" />
                            Director
                        </label>
                        <label>
                            <input type="radio" name="searchBy" value="year" />
                            Year
                        </label>
                    </div>
                    <div >
                        <select onChange={(e) => { setSort(e.target.value) }} defaultValue={sort}>
                            <option value="">Genre</option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Horror">Horror</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                    <div>
                        <select onChange={(e) => { setSort(e.target.value) }} defaultValue={sort}>
                            <option value="">Order</option>
                            <option value="asc">ASC</option>
                            <option value="desc">DESC</option>
                        </select>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar
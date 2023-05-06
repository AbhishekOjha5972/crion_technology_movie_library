import React, { useCallback, useState } from 'react'
import "./Navbar.css"
import { BsSearch } from "react-icons/bs"
import { BiSortAlt2 } from "react-icons/bi"
import {useDispatch} from "react-redux"
import { getCommonSortMoviesAction, getMoviesAction, getSortMoviesAction } from '../../redux/movies.actions'

const Navbar = () => {
    const [sort, setSort] = useState("")
    const [order, setOrder] = useState("asc")
    const dispatch = useDispatch()    


    const debounce = (func) => {
        let timer;
        return function (...args) {
          const context = this;
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
          }, 500);
        };
      };

      const handleChange = (value) => {
        dispatch(getMoviesAction(value))
      };
    const callToDebounce = useCallback(debounce(handleChange), []);



    const haneleSortDataBasedOnGenre = (e) =>{
        console.log('e:', e)
        let obj  = {
            query:e,
            order:order
        }
        dispatch(getSortMoviesAction(obj))
    }

    const handleGetSelectedValue = () =>{
        const radioButtons = document.getElementsByName('searchBy');
        let value = ""
        for (let i = 0; i < radioButtons.length; i++) {
          if (radioButtons[i].checked) {
            value = radioButtons[i].value;
          }
        }
        if(value!==""){
            let obj  = {
                query:value,
                order:order
            }
            dispatch(getCommonSortMoviesAction(obj))
        }else{
            alert("Please select any of the field.")
        }
    }


    return (
        <nav>
            <section className='nav-logo-search'>
                <span>Crion <bdi>Tech.</bdi></span>
                <div className='nav-search'>
                    <BsSearch />
                    <input placeholder='Search everything'  
                      onChange={(e) => callToDebounce(e.target.value)}
                    />
                </div>
            </section>
            <section className='nav-sort'>
                <BiSortAlt2 />
                <div className='van-sort-fields'>
                    <div onChange={handleGetSelectedValue}>
                        <label>
                            <input type="radio" name="searchBy" value="title"/>
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
                    <div>
                        <select onChange={(e) => { 
                            setSort(e.target.value) 
                            haneleSortDataBasedOnGenre(e.target.value)
                            }} defaultValue={sort}>
                            <option value="">Genre</option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Horror">Horror</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                    <div>
                        <select onChange={(e) => { 
                            setOrder(e.target.value) 
                            }} defaultValue={order}>
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
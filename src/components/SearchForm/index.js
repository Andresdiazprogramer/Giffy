import React from "react";
import { useLocation } from "wouter";
import css from "./SearchForm.module.css";
import useForm from './hook'
import ButtonComponent from "components/Button";

const RATINGS = ["g", "pg", "pg-13", "r"];



function SearchForm({initialRating = 'g', initialKeyword = ""}) {
  

  const {keyword, times, rating, updateKeyword, updateRating} = useForm({
    initialKeyword,
    initialRating,
  })
  
  const [_,pushLocation] = useLocation()
  
  const handleChange = (evt) => {
    updateKeyword(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // navegar a otra ruta
    pushLocation(`/search/${keyword}/${rating}`);
  }
  
  const handleChangeRating = (evt) => {
    updateRating(evt.target.value)
  }

    return (
    <form onSubmit={handleSubmit} className={css["c-search"]}>
        <ButtonComponent>Buscar</ButtonComponent>
        <input
        className={css["c-search-input"]}
        placeholder="Search a gif here..."
        onChange={handleChange}
        type="text"
        value={keyword}
        />
        <select onChange={handleChangeRating} value={rating}>
        {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
        ))}
        </select>
    </form>
    )
}

export default React.memo(SearchForm)

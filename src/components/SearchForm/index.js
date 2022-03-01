import React, {useState} from 'react';

function SearchForm({onSubmit}){
    const [keyword, setKeyword]= useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        onSubmit({keyword})
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
    <form onSubmit={handleSubmit}>
    <button>Buscar</button>
    <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
    </form>
    )
}

export default React.memo(SearchForm)
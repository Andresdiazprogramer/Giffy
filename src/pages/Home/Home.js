import React,{useState} from 'react';
import {Link,useLocation} from 'wouter';
import {useGifs} from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';

const POPULAR_GIFS = ['Matrix','Chile','Colombia','Futbol']

function Home (){
    const [keyword, setKeyword] = useState('');

    const [path,pushLocation] = useLocation()

    const {loading,gifs} = useGifs({})

    const handleSubmit = evt =>{
        evt.preventDefault();

        pushLocation(`/search/${keyword}`)   
    }
    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }
    return (
        <>
        <form className="" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={keyword}/>
        </form>
        <h3 className="App-title">Los gifs mas populares</h3>
        <ListOfGifs gifs={gifs}></ListOfGifs>
        <ul className='App-ul'>
            {POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                    <Link className="App-link" to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                </li>
            )
            )}
        </ul>
    </>
    )
};

export default Home;

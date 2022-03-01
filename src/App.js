import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/index';
import SearchResults from './pages/SearchResults/SearchResults';
import StaticContext from './context/StaticContext';
import { Link,Route} from 'wouter';
import { GifsContextProvider } from './context/GifsContext';
import second from './giffyLogo.png'


export default function App() {
  return (
  <StaticContext.Provider value={{name: 'midudev',
  suscribeteAlCanal: true}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src={second} />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"  />
            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route 
              component={()=> <h1>404 ERROR</h1>}
              path='/404'
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

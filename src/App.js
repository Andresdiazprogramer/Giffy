import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/index';
import SearchResults from './pages/SearchResults/SearchResults';
import StaticContext from './context/StaticContext';

import { Link,Route} from 'wouter';
import { GifsContextProvider } from './context/GifsContext';


function App() {

  return (
    <StaticContext.Provider value={{name:'dogy',suscribeteAlCanal:false}} >
    <div className="App">
      <section className="App-content">
          <Link to='/'>
            <img className="App-logo" src="./logo192.png" alt="logo" />
          </Link>
          <GifsContextProvider>
          <Route
            component={Home}
            path='/'
          />
          <Route 
            component={SearchResults} 
            path='/search/:keyword'
          />
          <Route 
          component={Detail} 
          path='/gif/:id'
          />
          </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;

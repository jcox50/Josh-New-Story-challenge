import React from 'react';
import LatestImage from './Components/latest-image';
import Latest from './Components/latest';
import Search from './Components/search-bar'

function App() {
    return ( 
    <div>
      <header className="App-header-container">
        <Latest />
        <Search />
      </header>   

        <LatestImage />
    </div>
    );
}

export default App;
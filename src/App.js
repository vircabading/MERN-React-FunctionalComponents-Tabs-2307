import './App.css';
import React, {useState} from 'react';

import NavBarView from './components/NavBarView';
import TabView from './components/TabView';

///////////////////////////////////////////////////
// MAIN APPLICATION
///////////////////////////////////////////////////

function App() {
  const [currentTab, setCurrentTab] = useState(0);

    /////////////////////////////////////////////////
  // Main web output
  return (
    <main>
      <NavBarView />
      <div className='container mt-4 p-2 bg-white text-dark-color  round'>
        <h1 >Tabs App</h1>
        <hr />
        <TabView currentTab={ currentTab } />

      </div>

    </main>
  );
}

export default App;

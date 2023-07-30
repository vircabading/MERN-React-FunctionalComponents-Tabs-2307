import './App.css';
import React, { useState } from 'react';

import NavBarView from './components/NavBarView';
import TabView from './components/TabView';

///////////////////////////////////////////////////
// MAIN APPLICATION
///////////////////////////////////////////////////

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    {
      label: "Tottenham",
      content: "Tottenham Hotspur Football Club, commonly referred to as simply Tottenham or Spurs, is a professional football club based in Tottenham, London, England. It competes in the Premier League, the top flight of English football. The team has played its home matches in the 62,850-capacity Tottenham Hotspur Stadium since April 2019, replacing their former home of White Hart Lane, which had been demolished to make way for the new stadium on the same site."
    }
  ]

  /////////////////////////////////////////////////
  // Main web output
  return (
    <main>
      <NavBarView />
      <div className='container mt-4 p-2 bg-white text-dark-color  round'>
        <h1 >Tabs App</h1>
        <p>Tabs: {JSON.stringify(tabs)}</p>
        <hr />
        <TabView currentTab={currentTab}
          tabs={tabs} />

      </div>

    </main>
  );
}

export default App;

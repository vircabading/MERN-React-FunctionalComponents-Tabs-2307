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
      label: "Tottenham Hotspur",
      content: "Tottenham Hotspur Football Club, commonly referred to as simply Tottenham or Spurs, is a professional football club based in Tottenham, London, England. It competes in the Premier League, the top flight of English football. The team has played its home matches in the 62,850-capacity Tottenham Hotspur Stadium since April 2019, replacing their former home of White Hart Lane, which had been demolished to make way for the new stadium on the same site."
    },
    {
      label: "Houston Rockets",
      content: "The Houston Rockets are an American professional basketball team based in Houston. The Rockets compete in the National Basketball Association (NBA) as a member team of the league's Western Conference Southwest Division. The team plays its home games at the Toyota Center, located in Downtown Houston. Throughout its history, Houston has won two NBA championships and four Western Conference titles."
    }
  ]

  const getNewTab = (newTab) => {
    console.log("*** In Get New Tab")
    setCurrentTab(newTab);
  }

  /////////////////////////////////////////////////
  // Main web output
  return (
    <main>
      <NavBarView />
      <div className='container mt-4 p-2 bg-white text-dark-color  round'>
        <h1 >Tabs App</h1>
        <p>Current Tab: {JSON.stringify(currentTab)}</p>
        <p>Tabs: {JSON.stringify(tabs)}</p>
        <hr />
        <TabView  currentTab= { currentTab }
                  tabs= { tabs }
                  getNewTab= { getNewTab } />

      </div>

    </main>
  );
}

export default App;

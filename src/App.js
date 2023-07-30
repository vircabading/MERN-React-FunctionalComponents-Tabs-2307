import './App.css';
import React, { useState } from 'react';

import NavBarView from './components/NavBarView';
import TabView from './components/TabView';
import ContentView from './components/ContentView';

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
    },
    {
      label: "San Francisco 49ers",
      content: "The San Francisco 49ers (also written as the San Francisco Forty-Niners) are a professional American football team based in the San Francisco Bay Area. The 49ers compete in the National Football League (NFL) as a member of the league's National Football Conference (NFC) West division, and play their home games at Levi's Stadium in Santa Clara, California, located 38 miles (61 km) southeast of San Francisco. The team is named after the prospectors who arrived in Northern California in the 1849 Gold Rush. "
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
        {/* **** Tab View ************ */}
        <TabView  currentTab= { currentTab }
                  tabs= { tabs }
                  getNewTab= { getNewTab } />
        <ContentView  currentTab= { currentTab }
                  tabs= { tabs }  />
      </div>

    </main>
  );
}

export default App;

import './App.css';
import NavBarView from './components/NavBarView';

///////////////////////////////////////////////////
// MAIN APPLICATION
///////////////////////////////////////////////////

function App() {
  return (
    <main>
      <NavBarView />
      <div className='container mt-4 p-2 bg-white text-dark-color  round'>
        <h1 >Tabs App</h1>

      </div>

    </main>
  );
}

export default App;

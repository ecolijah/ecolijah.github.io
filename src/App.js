
import './App.css';
import About from "./components/About.jsx"
import Home from "./components/Home.jsx"
import StaticLinks from './components/StaticLinks';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <StaticLinks />
        <Home />
        <About />
        

      </div>
    </div>
  );
}

export default App;

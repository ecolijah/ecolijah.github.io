
import './App.css';
import About from "./components/About.jsx"
import Home from "./components/Home.jsx"
import StaticLinks from './components/StaticLinks.jsx';
import Projects from './components/Projects.jsx'
import SpotifyPlayer from './components/SpotifyPlayer';
import ResumePage from './components/ResumePage';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <StaticLinks />
        <Home />
        <About />
        <Projects />
        {/* <ResumePage /> */}
        

      </div>
    </div>
  );
}

export default App;


import './App.css';
import About from "./components/About.jsx"
import Home from "./components/Home.jsx"
import StaticLinks from './components/StaticLinks.jsx';
import Projects from './components/Projects.jsx'
import SpotifyPlayer from './components/SpotifyPlayer';
import ResumePage from './components/ResumePage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <div className='container'>
        <StaticLinks />
        {/* <Home />
        <About />
        <Projects /> */}
        <Routes>
          {/* home page comonents */}
          <Route path='/' element= {<Home/>}/>
          {/* <Route path='/' element= {<About/>}/>
          <Route path='/' element= {<Projects/>}/> */}
          {/* non home page  */}
          <Route path='/resume' element={<ResumePage/>}/>
        </Routes>
        

      </div>
    </div>
  );
}

export default App;

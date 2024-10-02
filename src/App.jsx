import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Work from './components/pages/Work';
import WriteMe from './components/pages/WriteMe';
function App() {

  const location = useLocation();

  return (
    <div className="page-wrapper">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutme" element={<AboutMe />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/writeme" element={<WriteMe />} />
      </Routes>
      
    </div>
  );
}

export default App;

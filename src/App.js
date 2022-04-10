import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <CssBaseline/>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

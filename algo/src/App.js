import PathFinder from './PathFinder'
import Sorting from './Sorting';
import MainPage from './MainPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
function App() {
  
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<MainPage/>}/>
        <Route path="/sorting" element={<Sorting/>}/>
        <Route path="/pathFind" element={<PathFinder/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

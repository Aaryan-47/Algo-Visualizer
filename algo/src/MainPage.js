
import logo from './images/path3.jpg';
import logo1 from './images/sort.png';
import {Link} from 'react-router-dom';
import './App.css';
function MainPage() {
  
  return (
    <>
    
    <div className="container-fluid">
      <br></br>
     <div className="row">
       <div className=" col-md-2"></div>
       <div className="card col-md-4">
         <img src={logo}></img>
         <Link to="pathFind"><h3>PATHFINDING VISUALIZATION</h3></Link>
         </div>
       <div className="card col-md-4"><img className="img1"src={logo1}></img>
       <a href="sorting"><h3>SORTING VISUALIZATION</h3></a>
       </div>
     </div>
    </div>
    </>
  );
}

export default MainPage;

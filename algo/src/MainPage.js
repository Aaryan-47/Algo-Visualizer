
import logo from './images/path3.jpg';
import logo1 from './images/sort.png';
import {Link} from 'react-router-dom';
import {Row,Col} from 'antd';
import './App.css';
function MainPage() {
  
  return (
    <>
    <div className="container-fluid">
      <br></br>
      <div className="main1">
        <Row>
       <Col xs={24} lg={12}>
         <img src={logo} alt="logo"></img>
         <Link to="pathFind"><h3>PATH VISUALIZATION</h3></Link>
       </Col>
       <Col xs={24} lg={12}>
        <img className="img1"src={logo1} alt="logo"></img>
       <a href="sorting"><h3>SORTING VISUALIZATION</h3></a>
       </Col>
       </Row>
       </div>
       </div>
    </>
  );
}

export default MainPage;

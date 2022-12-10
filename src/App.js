import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
      <Router>
          <div className='containe'>
            <HeaderComponent/>
              <div className="container">
                <Routes>
                  <Route path='/' element={<EmployeeComponent/>}></Route>
                  <Route path='/employees' element={<EmployeeComponent/>}></Route>
                    {/* <EmployeeComponent/> */}
                </Routes>  
              </div>
            <FooterComponent/>
          </div>
      </Router>
    </div>
  );
}

export default App;

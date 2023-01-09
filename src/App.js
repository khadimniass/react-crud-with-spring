import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ShowEmployeeComponent from "./components/ShowEmployeeComponent";

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
                  <Route path='/add-employee' element={<CreateEmployeeComponent/>}></Route>
                  <Route path='/employee/:id' element={<ShowEmployeeComponent/>}></Route>
                  <Route path='/update-employee/:id/update-employee/:id' element={<UpdateEmployeeComponent/>}></Route>
                </Routes>
              </div>
              <FooterComponent/>
          </div>
      </Router>
    </div>
  );
}

export default App;

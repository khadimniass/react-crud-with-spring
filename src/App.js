import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
        <HeaderComponent/>
        <div className="container">
          <EmployeeComponent/>
        </div>
        <FooterComponent/>
      </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import CreateVehicleForm from './CreateVehicleForm';
import AutomobileList from './AutomobileList';
import CreateAutomobileForm from './CreateAutomobileForm';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/newvehicle" element={<CreateVehicleForm />} />
          <Route path="/automobiles" element={<AutomobileList />} />
          <Route path="/newautomobile" element={<CreateAutomobileForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

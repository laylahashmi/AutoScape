import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import VehicleModelForm from './VehicleModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import TechnicianForm from './TechnicianForm';
import AppointmentList from './AppointmentList.js';
import AppointmentForm from './AppointmentForm';
import AppointmentHistory from './AppointmentHistory';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="models">
            <Route path="new" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>

          <Route path="services">
            <Route path="technician" element={<TechnicianForm />} />
            <Route path="appointments">
              <Route index element={<AppointmentList />} />
              <Route path="new" element={<AppointmentForm />} />
              <Route path="history" element={<AppointmentHistory />} />
            </Route>
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

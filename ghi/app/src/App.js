import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import VehicleForm from './VehicleForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="models">
            <Route path="new" element={<VehicleForm />} />
          </Route>

          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

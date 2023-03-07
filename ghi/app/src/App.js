import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './manufacturerListForm';
import VehicleModelList from './vehicleModelsList';
import CreateManufacturerForm from './createManufacturerForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="manufacturers">
              <Route index element={<ManufacturerList />}/>
              <Route path="new" element={<CreateManufacturerForm />}/>
            </Route>

            <Route path="models">
              <Route index element={<VehicleModelList />}/>
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

import VehicleModelForm from './inventory/VehicleModelForm';
import AutomobileList from './inventory/AutomobileList';
import AutomobileForm from './inventory/AutomobileForm';
import ManufacturerList from "./inventory/manufacturerListForm";
import VehicleModelList from "./inventory/vehicleModelsList";
import CreateManufacturerForm from "./inventory/createManufacturerForm";

import TechnicianForm from './service/TechnicianForm';
import AppointmentList from './service/AppointmentList.js';
import AppointmentForm from './service/AppointmentForm';
import AppointmentHistory from './service/AppointmentHistory';

import SalesPersonForm from "./sales/salesPersonForm";
import CustomerForm from "./sales/customerForm";
import SalesList from "./sales/salesList";
import RecordSaleForm from "./sales/createNewRecordSale";
import SalesPersonHistoryForm from "./sales/salesPersonHistory";





function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
            <Route path="new" element={<CreateManufacturerForm />} />
          </Route>

          <Route path="models">
            <Route index element={<VehicleModelList />} />
            <Route path="new" element={<VehicleModelForm />} />
          </Route>

          <Route path="salesperson">
            <Route path="new" element={<SalesPersonForm />} />
          </Route>

          <Route path="customer">
            <Route path="new" element={<CustomerForm />} />
          </Route>

          <Route path="salesrecord">
            <Route index element={<SalesList />} />
            <Route path="new" element={<RecordSaleForm />} />
            <Route path="history" element={<SalesPersonHistoryForm />} />
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

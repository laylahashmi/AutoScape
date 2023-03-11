import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import VehicleModelForm from './VehicleModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import TechnicianForm from './TechnicianForm';
import AppointmentList from './AppointmentList.js';
import AppointmentForm from './AppointmentForm';
import AppointmentHistory from './AppointmentHistory';
import Nav from "./Nav";
import ManufacturerList from "./manufacturerListForm";
import VehicleModelList from "./vehicleModelsList";
import CreateManufacturerForm from "./createManufacturerForm";
import SalesPersonForm from "./salesPersonForm";
import CustomerForm from "./customerForm";
import SalesList from "./salesList";
import RecordSaleForm from "./createNewRecordSale";
import SalesPersonHistoryForm from "./salesPersonHistory";

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

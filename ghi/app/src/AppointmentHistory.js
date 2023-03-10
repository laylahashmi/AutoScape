import { useEffect, useState } from 'react';

function AppointmentHistory() {
  const [appointments, setAppointments] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [search, setSearch] = useState("");

  const getAppointments = async () => {
    const response = await fetch('http://localhost:8080/api/appointments/');

    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(filterTerm);

  };

  return (
    <>
    <div className="input-group mb-3">
      <input onChange={handleFilterChange} maxLength="17" type="text" className="form-control" placeholder="VIN Number" aria-label="VIN Number" aria-describedby="button-addon2" />
      <button onClick={handleSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
    <h1>Service History</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>VIN</th>
          <th>Customer Name</th>
          <th>Date and Time</th>
          <th>Technician</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {appointments.filter((appointment) => appointment.vin.includes(search))
        .map((appointment) => {
          return (
            <tr key={appointment.href}>
              <td>{appointment.vin}</td>
              <td>{appointment.customer_name}</td>
              <td>{appointment.date_time}</td>
              <td>{appointment.technician.name}</td>
              <td>{appointment.reason}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}

export default AppointmentHistory;

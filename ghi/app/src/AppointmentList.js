import { useEffect, useState } from 'react';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [automobiles, setAutomobile] = useState([]);


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


  const getAutomobiles = async () => {
    const response = await fetch('http://localhost:8080/api/automobilevos/');

    if (response.ok) {
      const data = await response.json();
      setAutomobile(data.automobiles);
    }
  }


  useEffect(() => {
    getAutomobiles();
  }, [])


  const handleCancellation = async (vin) => {
    const response = await fetch(`http://localhost:8080/api/appointments/${vin}/`, {
      method: 'DELETE',
    });

    if (response.ok) {
      getAppointments();
    }
  };


  const handleCompletion = async (vin) => {
    const response = await fetch(`http://localhost:8080/api/appointments/${vin}/`, {
      method: 'PUT',
    });
    if (response.ok) {
      getAppointments();
    }
  }


  return (
    <>
    <h1>Service Appointments</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>VIP</th>
          <th>VIN</th>
          <th>Customer Name</th>
          <th>Date and Time</th>
          <th>Technician</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => {
          return (
            <tr key={appointment.href}>
              <td>{appointment.is_vip}</td>
              <td>{appointment.vin}</td>
              <td>{appointment.customer_name}</td>
              <td>{appointment.date_time}</td>
              <td>{appointment.technician.name}</td>
              <td>{appointment.reason}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleCancellation(appointment.vin)}>
                  Cancel
                </button>
              </td>
              <td>
              <button type="button" className="btn btn-success" onClick={() => handleCompletion(appointment.vin)}>
                Finished
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}

export default AppointmentList;

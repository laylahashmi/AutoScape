import React, { useState, useEffect } from 'react';

function AppointmentForm() {
  const [technicians, setTechnician] = useState([]);
  const [formData, setFormData] = useState({
    vin: '',
    customer_name: '',
    date_time: '',
    technician: '',
    reason: '',
    is_vip: '',
  });

  const getTechnician = async () => {
    const response = await fetch('http://localhost:8080/api/technicians/');
    if (response.ok) {
      const data = await response.json();
      setTechnician(data.technicians);
    }
  }

  useEffect(() => {
    getTechnician();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const appointmentUrl = 'http://localhost:8080/api/appointments/';
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    console.log(formData)
    const response = await fetch(appointmentUrl, fetchConfig);
    if (response.ok) {
        setFormData({
            vin: '',
            customer_name: '',
            date_time: '',
            technician: '',
            reason: '',
            is_vip: '',
      });
    }
  }

  const handleFormChange = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [inputName]: value
    });
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Enter a service appointment </h1>
          <form onSubmit={handleSubmit} id="create-vehicle-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.vin} maxLength="17" placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
              <label htmlFor="vin">VIN Number</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.customer_name} placeholder="customer_name" required type="text" name="customer_name" id="customer_name" className="form-control" />
              <label htmlFor="customer_name">Customer Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.date_time} placeholder="date_time" required type="datetime-local" name="date_time" id="date_time" className="form-control" />
              <label htmlFor="date_time">Date/Time</label>
            </div>
            <div className="mb-3">
              <select onChange={handleFormChange} value={formData.technician} required name="technician" id="technician" className="form-select">
                <option value="">Choose a Technician</option>
                {technicians.map(technician => {
                  return (
                    <option key={technician.employee_number} value={technician.employee_number}>{technician.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.reason} placeholder="reason" required type="text" name="reason" id="reason" className="form-control" />
              <label htmlFor="reason">Reason for Appointment</label>
            </div>
            <button>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;

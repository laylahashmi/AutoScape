import React, {useState, useEffect} from 'react';

function TechnicianForm() {
  const [formData, setFormData] = useState({
    name: '',
    employee_number: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const technicianUrl = 'http://localhost:8080/api/technicians/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(formData)
    const response = await fetch(technicianUrl, fetchConfig);

    if (response.ok) {
      setFormData({
        name: '',
        employee_number: ''
      });
    }
  }

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: value
    });
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Enter a Technician</h1>
          <form onSubmit={handleSubmit} id="create-technician-form">
            <div className="form-floating mb-3">
              <input value={formData.name} onChange={handleFormChange} placeholder="name" required type="text" name="name" id="name" className="form-control" />
              <label htmlFor="name">Technician Name</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.employee_number} onChange={handleFormChange} placeholder="employee_number" required type="number" name="employee_number" id="employee_number" className="form-control" />
              <label htmlFor="employee_number">Employee Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TechnicianForm;

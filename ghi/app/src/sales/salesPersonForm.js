import React, { useState, useEffect } from "react";

function SalesPersonForm() {
  const [formData, setFormData] = useState({ name: "", employee_number: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const salespersonUrl = `http://localhost:8090/api/salesperson/`;

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(salespersonUrl, fetchConfig);

    if (response.ok) {
      setFormData({ name: "", employee_number: "" });
    }
  };

  const handleChangeName = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: value,
    });
  };
  return (
    <div className="my-5">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} id="create-salesperson-form">
                <p className="mb-3">
                  <h1>Please add a sales person.</h1>
                </p>
                <div className="form-floating mb-3">
                  <input
                    value={formData.name}
                    onChange={handleChangeName}
                    required
                    placeholder="name"
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={formData.employee_number}
                    onChange={handleChangeName}
                    required
                    placeholder="employee_number"
                    type="number"
                    id="employee_number"
                    name="employee_number"
                    className="form-control"
                  />
                  <label htmlFor="employee_number">Employee number</label>
                </div>
                <button className="btn btn-lg btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesPersonForm;

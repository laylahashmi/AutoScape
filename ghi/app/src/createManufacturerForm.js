import React, { useState, useEffect } from "react";

function CreateManufacturerForm() {
  const [formData, setFormData] = useState({ name: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const manufacturerUrl = `http://localhost:8100/api/manufacturers/`;

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(manufacturerUrl, fetchConfig);

    if (response.ok) {
      setFormData({ name: "" });
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
              <form onSubmit={handleSubmit} id="create-manufacturer-form">
                <p className="mb-3">
                  <h1>Please create a manufacturer.</h1>
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
                <button className="btn btn-lg btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateManufacturerForm;

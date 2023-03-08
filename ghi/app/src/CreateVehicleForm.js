import React, { useState, useEffect } from 'react';

function CreateVehicleForm() {
  const [manufacturers, setManufacturer] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    picture_url: '',
    manufacturer_id: ''
  });

  const getManufacturers = async () => {
    const response = await fetch('http://localhost:8100/api/manufacturers/');
    if (response.ok) {
      const data = await response.json();
      setManufacturer(data.manufacturers);
    }
  }

  useEffect(() => {
    getManufacturers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const modelUrl = 'http://localhost:8100/api/models/';
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    console.log(formData)
    const response = await fetch(modelUrl, fetchConfig);
    if (response.ok) {
        setFormData({
            name: '',
            picture_url: '',
            manufacturer_id: ''
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
          <h1>Create a Vehicle Model</h1>
          <form onSubmit={handleSubmit} id="create-vehicle-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
              <label htmlFor="name">Model Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.picture_url} placeholder="picture_url" required type="url" name="picture_url" id="picture_url" className="form-control" />
              <label htmlFor="picture_url">Picture Url</label>
            </div>
            <div className="mb-3">
              <select onChange={handleFormChange} value={formData.manufacturer_id} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                <option value="">Choose a Manufacturer</option>
                {manufacturers.map(manufacturer_id => {
                  return (
                    <option key={manufacturer_id.id} value={manufacturer_id.id}>{manufacturer_id.name}</option>
                  )
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateVehicleForm;

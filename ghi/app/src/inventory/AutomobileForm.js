import React, {useState, useEffect} from 'react';

function AutomobileForm() {
  const [models, setModel] = useState([])
  const [formData, setFormData] = useState({
    color: '',
    year: '',
    vin: '',
    model_id: ''
  })

  const getData = async () => {
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setModel(data.models);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const automobileUrl = 'http://localhost:8100/api/automobiles/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(formData)
    const response = await fetch(automobileUrl, fetchConfig);

    if (response.ok) {
      setFormData({
        color: '',
        year: '',
        vin: '',
        model_id: ''
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
          <h1>Add an automobile to inventory</h1>
          <form onSubmit={handleSubmit} id="create-automobile-form">
            <div className="form-floating mb-3">
              <input value={formData.color} onChange={handleFormChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.year} onChange={handleFormChange} placeholder="Year" required type="number" name="year" id="year" className="form-control" />
              <label htmlFor="year">Year</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.vin} onChange={handleFormChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
              <label htmlFor="vin">VIN</label>
            </div>
            <div className="mb-3">
              <select value={formData.model_id} onChange={handleFormChange} required name="model_id" id="model_id" className="form-select">
                <option value="">Choose a Model</option>
                {models.map(model_id => {
                  return (
                    <option key={model_id.id} value={model_id.id}>{model_id.name}</option>
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

export default AutomobileForm;

import React, {useState, useEffect } from 'react';

function CustomerForm() {
    const [formData, setFormData] = useState({name: '', address: '', phone_number: ''})


    const handleSubmit = async (event) => {
        event.preventDefault();

        const salespersonUrl = `http://localhost:8090/api/customer/`;

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {'Content-Type': 'application/json', },
            };

        const response = await fetch(salespersonUrl, fetchConfig);

        if (response.ok) {
            setFormData({name: '', address: '', phone_number: '' });

        }
    }

    const handleChangeName = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value
        });
    }
    return (
        <div className="my-5">
        <div className="row">
            <div className="col">
            <div className="card shadow">
                <div className="card-body">
                <form onSubmit={handleSubmit} id="create-customer-form">
                    <p className="mb-3">
                    <h1>Please add a potential customer.</h1>
                    </p>
                    <div className="form-floating mb-3">
                        <input value={formData.name} onChange={handleChangeName} required placeholder='name' type="text" id="name" name="name" className="form-control" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={formData.address} onChange={handleChangeName} required placeholder='address' type="text" id="address" name="address" className="form-control" />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={formData.phone_number} onChange={handleChangeName} required placeholder='phone_number' type="text" id="phone_number" name="phone_number" className="form-control" />
                        <label htmlFor="phone_number">Phone number</label>
                    </div>
                    <button className="btn btn-lg btn-primary">Create</button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
  )
}

export default CustomerForm;
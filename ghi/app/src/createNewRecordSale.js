import React, { useState, useEffect } from "react";

function RecordSaleForm() {
  const [autos, setAutomobile] = useState([]);
  const [records, setRecords] = useState([]);
  const [unsold_vehicles, setUnsoldVehicles] = useState([]);
  const [sales, setSales] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [sale_price, setSalesPrice] = useState([]);
  const [formData, setFormData] = useState({
    automobile: "",
    sales: "",
    customer: "",
    sale_price: "",
  });

  const getAutos = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);
    var vehs = [];
    var sold_vehs = [];
    if (response.ok) {
      const data = await response.json();
      console.log("autos:", data.autos);
      vehs = [...data.autos];
      // setAutomobile(data.autos);
    }

    const sold_url = "http://localhost:8090/api/salesrecord/";
    const resp = await fetch(sold_url);

    if (resp.ok) {
      const data = await resp.json();
      sold_vehs = [...data.salesrecord];
      // setRecords(data.salesrecord);
      const sold = [];
      for (let index = 0; index < data.salesrecord.length; index++) {
        const sale = data.salesrecord[index];
        sold.push(sale.automobile.vin);
      }

      const unsold = [];
      for (let index = 0; index < vehs.length; index++) {
        const element = vehs[index];
        console.log(element);
        if (!sold.includes(element.vin)) {
          unsold.push(element);
        }
      }

      setAutomobile(unsold);
    }
  };

  useEffect(() => {
    getAutos();
  }, []);

  const getRecords = async () => {
    const url = "http://localhost:8090/api/salesrecord/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setRecords(data.salesrecord);
      const sold = [];
      for (let index = 0; index < data.salesrecord.length; index++) {
        const sale = data.salesrecord[index];
        sold.push(sale.automobile.vin);
      }
      const unsold = [];
      console.log("all ", autos);
      for (let index = 0; index < autos.length; index++) {
        const element = autos[index];
        console.log(element);
        if (!sold.includes(element.vin)) {
          unsold.push(element);
        }
      }
      console.log("unsold", unsold);
      setUnsoldVehicles(unsold);
    }
  };

  useEffect(() => {
    getRecords();
  }, []);

  const getSales = async () => {
    const url = "http://localhost:8090/api/salesperson/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSales(data.salesperson);
    }
  };

  useEffect(() => {
    getSales();
  }, []);

  const getCustomer = async () => {
    const url = "http://localhost:8090/api/customer/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setCustomer(data.customer);
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);

  const getSalesPrice = async () => {
    const url = "http://localhost:8090/api/salesrecord/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSalesPrice(data.salesrecord);
    }
  };

  useEffect(() => {
    getSalesPrice();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const salesrecordUrl = `http://localhost:8090/api/salesrecord/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(salesrecordUrl, fetchConfig);
    const data = await response.json();
    if (response.ok) {
      setFormData({
        automobile: "",
        sales: "",
        customer: "",
        sale_price: "",
      });
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
              <form onSubmit={handleSubmit} id="create-new record-form">
                <h1>Record a new sale</h1>
                <div className="form-floating mb-3">
                  <select
                    value={formData.automobile}
                    onChange={handleChangeName}
                    name="automobile"
                    id="automobile"
                    required
                  >
                    <option value="">Choose an automobile</option>
                    {autos.map((automobile) => {
                      return (
                        <option key={automobile.href} value={automobile.vin}>
                          {automobile.vin}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <select
                    value={formData.sales}
                    onChange={handleChangeName}
                    name="sales"
                    id="sales"
                    required
                  >
                    <option value="">Choose a sales person</option>
                    {sales.map((sales) => {
                      return (
                        <option key={sales.id} value={sales.employee_number}>
                          {sales.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <select
                    value={formData.customer}
                    onChange={handleChangeName}
                    name="customer"
                    id="customer"
                    required
                  >
                    <option value="">Choose a customer</option>
                    {customer.map((customer) => {
                      return (
                        <option key={customer.id} value={customer.id}>
                          {customer.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={handleChangeName}
                    value={formData.sale_price}
                    placeholder="Maximum attendees"
                    required
                    type="number"
                    name="sale_price"
                    id="sale_price"
                    className="form-control"
                  />
                  <label htmlFor="sale_price">Sale price</label>
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

export default RecordSaleForm;

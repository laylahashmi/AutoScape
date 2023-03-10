import React, { useState, useEffect } from "react";
function SalesPersonHistoryForm() {
  const [sales, setSales] = useState([]);
  const [formData, setFormData] = useState({
    sales: "",
  });

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

  const getData = async () => {
    const url = "http://localhost:8090/api/salesrecord/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      setSales(data.salesperson);
    }
  };

  useEffect(() => {
    getSales();
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
    <div className="card shadow">
      <div className="card-body">
        <form onSubmit={handleSubmit} id="create-new record-form">
          <h1>Sales person history</h1>
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
        </form>
      </div>
    </div>
  );
}

export default SalesPersonHistoryForm;

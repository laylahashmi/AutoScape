import React, { useState, useEffect } from "react";
function SalesPersonHistoryForm() {
  const [salesrecord, setSalesrecord] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const getData = async () => {
    const url = "http://localhost:8090/api/salesrecord/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      setSalesrecord(data.salesrecord);
      setFilteredList(salesrecord);
    }
  };

  const getHistory = async () => {
    // get the id of the selected sales agent
    let sales_id = document.getElementById("salesrecord").value;
    if(sales_id===""){
    setFilteredList(salesrecord)
    }else{

      var filteredlist = [...salesrecord]
     filteredlist= filteredlist.filter(function(record){
        return record.sales.employee_number==sales_id})
      setFilteredList(filteredlist)

    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card shadow">
      <div className="card-body">
          <div className="form-floating mb-3">
            <select
            onChange={()=>getHistory()}
              name="salesrecord"
              id="salesrecord"
            >
              <option value="">Choose a sales person</option>
              {salesrecord.map((record) => {
                return (
                  <option value={record.sales.employee_number}>
                    {record.sales.name}
                  </option>
                );
              })}
            </select>
          </div>

      </div>
      <table className="table table-striped">
        <thead>
          <h1> Sale Records</h1>
          <tr>
            <th>Sale person</th>
            <th>Customer name</th>
            <th>Automobile vin</th>
            <th>Sale price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((salesrecord) => {
            return (
              <tr key={salesrecord.id}>
                <td>{salesrecord.sales.name}</td>
                <td>{salesrecord.customer.name}</td>
                <td>{salesrecord.automobile.vin}</td>
                <td>
                  {new Intl.NumberFormat("en", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  }).format(salesrecord.sale_price)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SalesPersonHistoryForm;

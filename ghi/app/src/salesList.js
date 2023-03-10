import { useEffect, useState } from 'react';

function SalesList() {
  const [salesrecord, setSalesrecord] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8090/api/salesrecord/');

    if (response.ok) {
      const data = await response.json();
      setSalesrecord(data.salesrecord)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  const handleDelete = async (e) => {
    const url = `http://localhost:8090/api/salesrecord/${e.target.id}`

    const fetchConfigs = {
        method: "Delete",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(url, fetchConfigs)

    if (response.ok) {
        getData();
    } else {
        alert("The sale was not deleted");
    }
};
  return (

    <div className='container'>
        <table className='table table-striped'>
            <thead>
            <h1> Sale Records</h1>
                <tr>
                    <th>Sale person</th>
                    <th>Employee number</th>
                    <th>Customer name</th>
                    <th>Automobile vin</th>
                    <th>Sale price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {salesrecord.map(salesrecord => {
                    return (
                        <tr key={salesrecord.id}>
                            <td>{salesrecord.sales.name}</td>
                            <td>{salesrecord.sales.employee_number}</td>
                            <td>{salesrecord.customer.name}</td>
                            <td>{salesrecord.automobile.vin}</td>
                            <td>{new Intl.NumberFormat('en',{style:'currency', currency:'UDS', minimumFractionDigits:0}).format(salesrecord.sale_price) }</td>
                            <td> <button onClick = {handleDelete} id={salesrecord.id} className= "btn btn-danger"> Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
)


}

export default SalesList;

import { useEffect, useState } from 'react';

function ManufacturerList() {
  const [manufacturers, setManufacturer] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/manufacturers/');

    if (response.ok) {
      const data = await response.json();
      setManufacturer(data.manufacturers)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  const handleDelete = async (e) => {
    const url = `http://localhost:8100/api/manufacturers/${e.target.id}`

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
        alert("Manufacturer was not deleted");
    }
};
  return (

    <div className='container'>
        <table className='table table-striped'>
            <thead>
            <h1> Manufacturers</h1>
                <tr>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {manufacturers.map(manufacturer => {
                    return (
                        <tr key={manufacturer.href}>
                            <td>{manufacturer.name}</td>
                            <td> <button onClick = {handleDelete} id={manufacturer.id} className= "btn btn-danger"> Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
)


}

export default ManufacturerList;

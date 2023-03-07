import { useEffect, useState } from 'react';

function VehicleModelList() {
  const [models, setVehicleModel] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/models/');

    if (response.ok) {
      const data = await response.json();
      setVehicleModel(data.models)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  const handleDelete = async (e) => {
    const url = `http://localhost:8100/api/models/${e.target.id}`

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
        alert("Model was not deleted");
    }
};
  return (

    <div className='container'>
        <table className='table table-striped'>
            <thead>
            <h1>Vehicle Models</h1>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>

                    <th></th>
                </tr>
            </thead>
            <tbody>
                {models.map(model => {
                    return (
                        <tr key={model.href}>
                            <td>{model.name}</td>
                            <td>{model.manufacturer.name}</td>
                            {
                                (model.picture_url === null)? <td> No Picture Added</td>: <td><img src={model.picture_url}/></td>
                            }
                            <td> <button onClick = {handleDelete} id={model.id} className= "btn btn-danger"> Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
)


}

export default VehicleModelList;

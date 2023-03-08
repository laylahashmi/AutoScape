import { useEffect, useState } from 'react';

function AutomobileList() {
  const [autos, setAutos] = useState([]);

  const getAutos = async () => {
    const response = await fetch('http://localhost:8100/api/automobiles/');

    if (response.ok) {
      const data = await response.json();
      setAutos(data.autos);
    }
  };

  useEffect(() => {
    getAutos();
  }, []);

  const handleDelete = async (vin) => {
    const response = await fetch(`http://localhost:8100/api/automobiles/${vin}/`, {
      method: 'DELETE',
    });

    if (response.ok) {
      getAutos();
    }
  };

  return (
    <>
    <h1>Vehicle Models</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>VIN</th>
          <th>Color</th>
          <th>Year</th>
          <th>Model</th>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
        {autos.map((auto) => {
          return (
            <tr key={auto.href}>
              <td>{auto.vin}</td>
              <td>{auto.color}</td>
              <td>{auto.year}</td>
              <td>{auto.model.name}</td>
              <td>{auto.model.manufacturer.name}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(auto.vin)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}

export default AutomobileList;

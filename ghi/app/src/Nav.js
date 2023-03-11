import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/manufacturers/new"
              >
                Manufacturer Form
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/manufacturers"
              >
                Manufacturers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/models/new">
                Vehicle Model Form
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/models">
                Vehicle Models
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/automobiles"
              >
                Automobiles
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/automobiles/new"
              >
               Create Automobile
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/salesperson/new"
              >
                SalesPerson Form
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/customer/new"
              >
                Customer Form
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/salesrecord/"
              >
                Salesrecords
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/salesrecord/new"
              >
                Salesrecord Form
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/salesrecord/history"
              >
                Sales Person History
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/services/technician"
              >
                Add Technician
              </NavLink>
              </li>

              <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/services/appointments"
              >
                Appointments
              </NavLink>
              </li>

              <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/services/appointments/new"
              >
                Create Appointment
              </NavLink>
              </li>

              <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/services/appointments/history"
              >
                Service History
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

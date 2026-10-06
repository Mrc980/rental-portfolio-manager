import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        <h2>RentFlow</h2>
        <p>Portfolio Manager</p>
      </div>

      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/properties">Properties</NavLink>
        <NavLink to="/tenants">Tenants</NavLink>
        <NavLink to="/leases">Leases</NavLink>
        <NavLink to="/rent-payments">Rent Payments</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
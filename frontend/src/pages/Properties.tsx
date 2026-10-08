import { properties } from "../data/fakeData";
import { Link } from "react-router-dom";

function Properties() {
  return (
    <div>
      <h1>Properties</h1>
      <p>View and manage your rental properties.</p>
      <Link to="/properties/new">Add Property</Link>

      <div className="property-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <h2>{property.name}</h2>
            <p>{property.address}</p>
            <p>Type: {property.propertyType}</p>
            <p>Owner: {property.ownerName}</p>
            <p>Units: {property.units.length}</p>
            <Link to={`/properties/${property.id}`}>View Property</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
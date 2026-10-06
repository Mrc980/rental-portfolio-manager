import { properties } from "../data/fakeData";

function Properties() {
  return (
    <div>
      <h1>Properties</h1>
      <p>View and manage your rental properties.</p>

      <div className="property-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <h2>{property.name}</h2>
            <p>{property.address}</p>
            <p>Type: {property.propertyType}</p>
            <p>Owner: {property.ownerName}</p>
            <p>Units: {property.units.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
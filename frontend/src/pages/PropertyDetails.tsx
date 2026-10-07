import { useParams } from "react-router-dom";
import { properties } from "../data/fakeData";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find((property) => property.id === Number(id));

  if (!property) {
    return <h1>Property not found</h1>;
  }

  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.address}</p>
      <p>Type: {property.propertyType}</p>
      <p>Owner: {property.ownerName}</p>

      <h2>Units</h2>

      {property.units.map((unit) => (
        <div className="unit-card" key={unit.id}>
          <h3>{unit.name}</h3>
          <p>Monthly Rent: ${unit.monthlyRent}</p>
          <p>Status: {unit.status}</p>
        </div>
      ))}
    </div>
  );
}

export default PropertyDetails;

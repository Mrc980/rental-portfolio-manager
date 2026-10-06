import { useParams } from "react-router-dom";
import { properties } from "../data/fakeData";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (property) => property.id === Number(id)
  );

  if (!property) {
    return <h1>Property not found</h1>;
  }

  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.address}</p>
      <p>Type: {property.propertyType}</p>
      <p>Owner: {property.ownerName}</p>
    </div>
  );
}

export default PropertyDetails;
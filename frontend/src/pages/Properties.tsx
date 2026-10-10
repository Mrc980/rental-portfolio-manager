import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Property = {
  id: number;
  name: string;
  address: string;
  property_type: string;
  owner_name: string;
};

function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProperties() {
      try {
        const response = await fetch("http://127.0.0.1:8000/properties");

        if (!response.ok) {
          throw new Error("Failed to load properties");
        }

        const data: Property[] = await response.json();
        setProperties(data);
      } catch {
        setError("Could not load properties.");
      }
    }

    loadProperties();
  }, []);

    return (
    <div>
      <h1>Properties</h1>
      <p>View and manage your rental properties.</p>
      <Link to="/properties/new">Add Property</Link>

      {error && <p>{error}</p>}

      <div className="property-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <h2>{property.name}</h2>
            <p>{property.address}</p>
            <p>Type: {property.property_type}</p>
            <p>Owner: {property.owner_name}</p>
            <Link to={`/properties/${property.id}`}>View Property</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
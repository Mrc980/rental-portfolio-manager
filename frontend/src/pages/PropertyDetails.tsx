import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Property = {
  id: number;
  name: string;
  address: string;
  property_type: string;
  owner_name: string;
};

function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState<Property | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProperty() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`http://127.0.0.1:8000/properties/${id}`);

        if (!response.ok) {
          throw new Error("Failed to load property");
        }

        const data: Property = await response.json();
        setProperty(data);
      } catch {
        setError("Property not found or could not be loaded.");
      } finally {
        setLoading(false);
      }
    }

    loadProperty();
  }, [id]);

  if (loading) {
    return <p>Loading property...</p>;
  }

  if (error || !property) {
    return <h1>{error || "Property not found"}</h1>;
  }

  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.address}</p>
      <p>Type: {property.property_type}</p>
      <p>Owner: {property.owner_name}</p>

      <h2>Units</h2>
      <p>Rental units will be displayed here once unit management is added.</p>
    </div>
      
  );
}

export default PropertyDetails;

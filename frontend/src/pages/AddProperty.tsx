import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { SubmitEvent } from "react";



function AddProperty() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("Condo");
  const [ownerName, setOwnerName] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          address,
          property_type: propertyType,
          owner_name: ownerName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add property");
      }

           navigate("/properties");
    } catch {
      setError("Could not add property.");
    }
  }

  return (
    <div>
      <h1>Add Property</h1>

      <form className="property-form" onSubmit={handleSubmit}>
        <label>
          Property Name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>

        <label>
          Address
          <input 
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </label>

        <label>
          Property Type
          <select
            value={propertyType}
            onChange={(event) => setPropertyType(event.target.value)}
          >
            <option>Condo</option>
            <option>House</option>
            <option>Townhouse</option>
          </select>
        </label>

        <label>
          Owner
          <input 
            value={ownerName}
            onChange={(event) => setOwnerName(event.target.value)}
            required
          />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}

export default AddProperty;

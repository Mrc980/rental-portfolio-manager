function AddProperty() {
  return (
    <div>
      <h1>Add Property</h1>

      <form className="property-form">
        <label>
          Property Name
          <input />
        </label>

        <label>
          Address
          <input />
        </label>

        <label>
          Property Type
          <select>
            <option>Condo</option>
            <option>House</option>
            <option>Townhouse</option>
          </select>
        </label>

        <label>
          Owner
          <input />
        </label>

        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}

export default AddProperty;

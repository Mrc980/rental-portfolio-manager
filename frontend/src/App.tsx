import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import AddProperty from "./pages/AddProperty";
import Tenants from "./pages/Tenants";
import Leases from "./pages/Leases";
import RentPayments from "./pages/RentPayments";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/new" element={<AddProperty />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/leases" element={<Leases />} />
        <Route path="/rent-payments" element={<RentPayments />} />
      </Route>
    </Routes>
  );
}

export default App;
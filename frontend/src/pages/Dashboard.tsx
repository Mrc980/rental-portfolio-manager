import { properties, rentPayments } from "../data/fakeData";

function Dashboard() {
  const units = properties.flatMap((property) => property.units);

  const occupiedUnits = units.filter((unit) => unit.status === "Occupied").length;
  const vacantUnits = units.length - occupiedUnits;

  let expectedMonthlyRent = 0;

  units.forEach((unit) => {
    expectedMonthlyRent += unit.monthlyRent;
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Overview of your rental portfolio.</p>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Properties</p>
          <h2>{properties.length}</h2>
        </div>

        <div className="stat-card">
          <p>Total Units</p>
          <h2>{units.length}</h2>
        </div>

        <div className="stat-card">
          <p>Occupied Units</p>
          <h2>{occupiedUnits}</h2>
          <small>{vacantUnits} vacant</small>
        </div>

        <div className="stat-card">
          <p>Expected Monthly Rent</p>
          <h2>${expectedMonthlyRent}</h2>
        </div>
      </div>

      <div className="section-card">
        <h2>Recent Rent Payments</h2>

        <table>
          <thead>
            <tr>
              <th>Tenant</th>
              <th>Unit</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Date Received</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {rentPayments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.tenantName}</td>
                <td>{payment.unitName}</td>
                <td>${payment.amount}</td>
                <td>{payment.dueDate}</td>
                <td>{payment.dateReceived ? payment.dateReceived : "-"}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
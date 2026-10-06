import type { Property, RentPayment } from "../types";

export const properties: Property[] = [
  {
    id: 1,
    name: "Riverside Condo",
    address: "120 Riverside Drive",
    propertyType: "Condo",
    ownerName: "Mahbub",
    units: [
      {
        id: 1,
        name: "Room 1",
        monthlyRent: 950,
        status: "Occupied",
        propertyId: 1,
      },
      {
        id: 2,
        name: "Room 2",
        monthlyRent: 900,
        status: "Vacant",
        propertyId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Downtown Condo",
    address: "250 Example Street",
    propertyType: "Condo",
    ownerName: "Family",
    units: [
      {
        id: 3,
        name: "Room 1",
        monthlyRent: 1000,
        status: "Occupied",
        propertyId: 2,
      },
      {
        id: 4,
        name: "Room 2",
        monthlyRent: 975,
        status: "Occupied",
        propertyId: 2,
      },
    ],
  },
];

export const rentPayments: RentPayment[] = [
  {
    id: 1,
    tenantName: "Adam Khan",
    unitName: "Riverside Condo - Room 1",
    amount: 950,
    dueDate: "2026-10-01",
    dateReceived: "2026-10-01",
    method: "Interac e-Transfer",
    status: "Paid",
  },
  {
    id: 2,
    tenantName: "Sarah Ahmed",
    unitName: "Downtown Condo - Room 1",
    amount: 1000,
    dueDate: "2026-10-01",
    dateReceived: "2026-10-02",
    method: "Interac e-Transfer",
    status: "Paid",
  },
  {
    id: 3,
    tenantName: "Daniel Lee",
    unitName: "Downtown Condo - Room 2",
    amount: 975,
    dueDate: "2026-10-01",
    method: "Interac e-Transfer",
    status: "Pending",
  },
];
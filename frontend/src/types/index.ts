export interface Unit {
  id: number;
  name: string;
  monthlyRent: number;
  status: "Occupied" | "Vacant";
  propertyId: number;
}

export interface Property {
  id: number;
  name: string;
  address: string;
  propertyType: string;
  ownerName: string;
  units: Unit[];
}

export interface RentPayment {
  id: number;
  tenantName: string;
  unitName: string;
  amount: number;
  dueDate: string;
  dateReceived?: string;
  method: string;
  status: "Paid" | "Pending" | "Late";
}
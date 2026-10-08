# Rental Portfolio Manager

A web application for managing rental properties, tenants, leases, and rent payments.

I'm building this project to help manage my family's rental properties. The idea is to have one place to track properties, rooms, tenants, occupancy, and rent instead of keeping everything in separate records.

## Technologies Used

**Frontend**

- React
- TypeScript
- React Router
- HTML/CSS

**Backend**

- Python
- FastAPI
- Uvicorn

**Database (Planned)**

- PostgreSQL
- SQLAlchemy

## Current Features

- Dashboard with property and unit statistics
- Occupied and vacant unit counts
- Expected monthly rent
- Property list and individual property pages
- Room details, rent amounts, and occupancy status
- Add Property form UI
- Sample rent payment records
- Basic FastAPI endpoints

The frontend currently uses sample data. The backend is still being developed, and the property form is not connected to it yet.

## Running the Project

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

From the project root:

```bash
cd backend
python -m venv venv
```

Activate the virtual environment (Windows PowerShell):

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
python -m pip install fastapi uvicorn
```

Start the backend:

```bash
python -m uvicorn app.main:app --reload
```

## Planned Features

- PostgreSQL database connection
- Property API endpoints
- Saving properties through the Add Property form
- Tenant and lease management
- Rent payment tracking
- Responsive layout improvements

Rent payments will be made outside the website. The application will only track payments, not process them.

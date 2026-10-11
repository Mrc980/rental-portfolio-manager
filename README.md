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
- Pydantic

**Database**

- PostgreSQL
- SQLAlchemy

## Current Features

- Dashboard with property and unit statistics using sample data
- Occupied and vacant unit counts
- Expected monthly rent
- Property list and individual property pages
- Add Property form connected to backend
- Saving and retrieving properties from PostgreSQL
- FastAPI endpoints for creating and retrieving properties
- Pydantic schemas for request and response validation
- Property database model and table using SQLAlchemy
- Handling requests for properties that do not exist
- Sample rent payment records

Property creation, listing, and individual property details now use PostgreSQL. 
The dashboard, rental units, and rent payments still use sample data while the remaining backend features are being developed.


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
python -m pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv pydantic
```

Start the backend:

```bash
python -m uvicorn app.main:app --reload
```

### Database Setup

The project uses PostgreSQL with SQLAlchemy. Create a database called `rental_portfolio` and configure the connection in `.env`.

## Planned Features

- Rental unit database models and API endpoints
- Loading rental units from PostgreSQL
- Tenant and lease management
- Rent payment tracking
- Connecting dashboard statistics to PostgreSQL
- Add sample properties, tenants, leases, and rent payments for testing
- Automated tests
- Form validation and error handling improvements
- Property editing and deletion
- Responsive layout improvements


Rent payments will be made outside the website. The application will only track payments, not process them.

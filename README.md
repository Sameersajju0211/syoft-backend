### Node.js Backend Application
This is a Node.js backend application implementing user authentication (register and login) and product CRUD operations with role-based access control (RBAC).

### Features
User registration with username, email, password, and role (admin, manager, staff).
User login with email and password, returning a JWT token for authorization.
Product CRUD operations (Create, Read, Update, Delete) with token-based authorization:
Product creation requires an admin token.
Product retrieval, update, and deletion require admin or manager tokens.
Staff members do not have CRUD rights.
Error handling and middleware for JWT token verification and role-based access control.

### Technologies
Node.js
Express.js
MongoDB (or choose your preferred database)
JSON Web Tokens (JWT) for authentication
bcrypt.js for password hashing
Mongoose (for MongoDB interaction)
Setup

## Clone the repository:
git clone (https://github.com/JayaramHarry/syoft_backend_assignment.git)
cd repository-name

## Install dependencies:
npm install

## Set environment variables:
Create a .env file in the root directory of your project. Add the following environment variables:
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=yourJWTSecret
Replace MONGO_URI with your MongoDB connection string and JWT_SECRET with a secure random string for JWT token encryption.

## Start the server:
npm start
The server will start at http://localhost:5000.

## Usage
You can now use tools like Postman to test the following API endpoints:

POST /api/register: Create a new user with username, email, password, and role.
POST /api/login: Authenticate a user with email and password, receiving a JWT token.
POST /api/products: Create a new product (requires admin token).
GET /api/products: Retrieve all products (admin or manager token).
GET /api/products/:id: Retrieve a product by ID (admin or manager token).
PUT /api/products/:id: Update a product by ID (admin or manager token).
DELETE /api/products/:id: Delete a product by ID (admin token).

### API Endpoints
POST /api/register
POST /api/login
POST /api/products
GET /api/products
GET /api/products/:id
PUT /api/products/:id
DELETE /api/products/:id
Environment Variables
PORT: Port number for the server (default is 5000).
MONGO_URI: MongoDB connection string.
JWT_SECRET: Secret key for JWT token encryption.

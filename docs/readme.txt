MegaStore Test
Objective

this plataform is used no administrate products from a big store, the goal of this project is help to 
MEGASTORE to combine his sistema, the information SQL and NOSQL in the same place.

justify model 
why embedding?
"I decided that embedding the information was the best 
approach because it allows for faster data access. 
Since I am using a hybrid model, 
I wanted to avoid potential data loading bottlenecks."

normaliced process
"A 3rd Normal Form (3NF) model was implemented, 
which is reflected in the tables where no data 
repetition or information redundancy is found. 
Unnecessary dependencies were taken into account 
to create an optimal SQL model."
SQL (Postgres + supabase)

    customers
    products
    orders
    Relationships normalized to at least 3NF
    SQL scripts provided to create tables, PK/FK, and sample data

NoSQL (MongoDB)

    order_items
    order_items model includes:
        id
        product
        quiantity
        unit_price

Endpoints

    SQL endpoints
        GET /Customers
        GET /Orders
    MongoDB endpoints
        GET /Order_id

Frontend

    HTML, CSS, Vanilla JS
    Fetch API for consuming backend endpoints
    Dashboard for test
    Token-based authorization for API calls

Technical Stack

    Backend: Node.js, Express
    Database: Postgres+18 (supabase), MongoDB (MongoDB atlas)
    Other dependencies: CORS, JSON Web Token, bcrypt, csvtojson

How to Run

    Clone the repository

git clone <repo-url>
cd pulse_core

2. **Install dependencies**
```bash
npm install

3. **Configure databases**

- MySQL: create database and tables using script.sql
- MongoDB: ensure tickets collection is created; you can migrate from CSV using migrate.js
- Update database connection strings in config/mysql.js and config/mongodb.js

4. **Run the server**
```bash
node server.js

Server runs at http://localhost:1115/

5. **Access frontend**

- Open public/index.html in your browser
- Login with a valid user (role-based)


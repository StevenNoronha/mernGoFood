# GoFood - Food Ordering website 

GoFood is a food ordering web application developed using the MERN stack (MongoDB, Express, React, Node.js).
It aims to streamline the food ordering process by presenting dynamically fetched food items from a database and enabling users to place orders efficiently.


## Tech Stack

<p align="center">
<a href="https://react.dev/"><img src="https://user-images.githubusercontent.com/75678927/229337642-bc08741b-a9f1-4d8b-9c20-0e63ebed6fcb.png" width="70px" border="0" alt="React" title="React"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://nodejs.org/"><img src="https://user-images.githubusercontent.com/75678927/229337648-36131d8b-8098-4c33-95c7-3438a7990d83.png" border="0" width="70px" alt="NodeJS" title="NodeJS"/></a>&nbsp;&nbsp;&nbsp;&nbsp; 
<a href="https://expressjs.com/"><img src="https://user-images.githubusercontent.com/75678927/229337923-e4f100a3-4378-49b0-a1c3-26e47a9f7de5.png" border="0" width="70px" alt="ExpressJS" title="ExpressJS"/></a>&nbsp;&nbsp;&nbsp;&nbsp; 
<a href="https://www.mongodb.com/"><img src="https://user-images.githubusercontent.com/75678927/229337732-ec83ff2c-3029-4dc0-a316-f10146037e8e.png" width="70px" border="0" alt="MongoDB" title="MongoDB"/></a>  
</p>

## Installation

1. - Fork the [repo](https://github.com/StevenNoronha/mernGoFood)
   - Clone the repo to your local system

   ```git
   git clone https://github.com/StevenNoronha/mernGoFood
   ```

2. - Front End:
     Install all the dependencies

   ```bash
   cd frontend
   npm install # This will install all the required dependencies for the front-end
   ```

   - Run Front End:

   ```bash
   npm start
   ```

3. - Back End:
     Install all the dependencies

    ```bash
   cd ..
   cd backend/
   npm install # This will install all the required dependencies for the back-end
   ```

   Go to db.js and add ur mongoDB url in
     ```bash
   const mongoURI = 'ADD YOUR URL HERE'
     ```

   - Run Back End:

   ```bash
   nodemon index.js # For Development with nodemon
   ```
   If it shows "Connected successfully" in the terminal your good to go!
   If not add your IP address to your mongoDB server on atlas to access the db server locally from your machine


## Usage
1. Register or Login: Create a new account or login with your existing credentials.
2. Browse Food Items: Explore the available food items dynamically fetched from the database.
3. Place an Order: Select your desired items and place an order.
4. View Previous Orders: Access your order history from your user dashboard.

## Screenshots 
1. Home Page
![image](https://github.com/StevenNoronha/mernGoFood/assets/125193808/c5c7f87e-732c-46ef-b1df-ea2990a79d92)

2. Search Functionality
![image](https://github.com/StevenNoronha/mernGoFood/assets/125193808/d5fbc1b9-d7a3-42bf-9fd0-ba4a945f6054)

3. Orders Page
![image](https://github.com/StevenNoronha/mernGoFood/assets/125193808/a66c7ab0-552a-4277-9380-341f23e05b88)

4. Cart Page
![image](https://github.com/StevenNoronha/mernGoFood/assets/125193808/757a92dd-e22e-42df-ae2c-90c4fd12ab64)

5. Registration Page
![image](https://github.com/StevenNoronha/mernGoFood/assets/125193808/2899b59f-0417-4b3d-aac9-3535c1468e36)

6. Login Page
![image](https://github.com/StevenNoronha/mernGoFood/assets/125193808/d2e135e6-0aee-46b4-bc9c-5a409f3e68cf)



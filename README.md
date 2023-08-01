## Password Encryption 

This repository contains code that demonstrates how to use MySQL and Node.js to encrypt and securely store user passwords. The password encryption is performed using the bcrypt library, and the encrypted passwords are saved in a MySQL database. This code can serve as a starting point for building applications that require secure password handling and user authentication.

### Prerequisites

To run this code, you need to have the following installed:

- Node.js: You can download it from the official Node.js website (https://nodejs.org).

- MySQL: Install and set up a MySQL database on your local machine or remote server. You'll need to create a new database and configure the necessary credentials.


### Getting Started

1. Clone the repository:

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Configure Environment Variables:

   Create a `.env` file in the root directory of the project and provide the following variables:

   ```
   DB_HOST=<your-database-host>
   DB_USER=<your-database-username>
   DB_PASSWORD=<your-database-password>
   DB_NAME=<your-database-name>
   ```

   Replace `<your-database-host>`, `<your-database-username>`, `<your-database-password>`, and `<your-database-name>` with your MySQL database configuration.

4. Set up the MySQL Database:

   Use the provided SQL script (`database.sql`) to create the necessary table for storing user information.

5. Run the Application:

   Start the Node.js application by running:

   ```bash
   npm start
   ```

   The application will start on `http://localhost:3000`.

### How It Works

- The application exposes a single endpoint (`POST /api/users`) that accepts user data (username, email, and password) from a form submission.

- When a user submits the form, the password is securely encrypted using the bcrypt library before being stored in the MySQL database.

- The encrypted password is saved along with the user's other information in the `users` table.

- The application includes error handling for scenarios such as email duplication, network errors, and server-side errors.

### Screenshot of Deployed Application

Launch Page:

![alt text](./public/assets/images/Screenshot%202023-07-31%20at%206.46.11%20PM.png)

Successful Creation: 
![alt text](./public/assets/images/Screenshot%202023-07-31%20at%206.48.11%20PM.png)

Error Handling:
![alt text](./public/assets/images/Screenshot%202023-07-31%20at%206.47.33%20PM.png)

### Future Developments

In the future, this code can be extended to implement user login functionality. By using bcrypt to hash and compare passwords during the login process, developers can ensure secure authentication.

Additionally, features like user account management, password reset, and email verification can be added to create a more comprehensive user authentication system.

### Contribution

Developers are welcome to clone this repository, add their own .env variables to duplicate the setup, and contribute to the project by submitting pull requests. If you encounter any issues or have ideas for improvements, feel free to open an issue on the repository or [email me](mailto:merel.burleigh@gmail.com).

Happy coding!
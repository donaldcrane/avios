# vasiti

vasiti is a platform where buyers meet sellers. Avios wants to allow sellers addvariantstotheir product while uploading. 



# Documentation

API ROUTES CAN BE FOUND IN THE ROUTES FOLDER

**Run Project Locally**

- Clone the project
- cd into the project's folder and run npm install to install dependencies
- Create a .env file and add PORT value, JWT_KEY, COOKIE_KEY, DEV_DATABASE_URL for development

- Run npm run migrate to migrate the database
- Run npm run seed to seed data into the database
- Run npm run dev to start the server

# HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods:

- POST Create a resource
- GET Get a resource or list of resources
- PATCH updates a resource or list of resources
- DELETE deletes a resource or list of resources
- For POST, the body of your request must be a JSON payload.

# HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

- 200 OK Successful request
- 400 Bad Request There was a problem with the request
- 500 Server Error Server error

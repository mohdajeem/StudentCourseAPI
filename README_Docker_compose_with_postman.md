# Student Course API - Docker & Postman Setup Guide

This project is a backend server for managing students, courses, enrollments, and admin operations. You can easily run it using Docker and test the endpoints using the provided Postman collection.



# Running the Project with Docker
## 1. Prerequisites
    Docker
    Docker Compose

## 2. Project Structure
    project-root/
    │
    ├── docker-compose.yml               # Docker configuration
    ├── postman.json                     # Postman collection for testing
    ├── server/                          # Backend server code
    │   ├── .env                         # Contains PORT, MONGO_URI, JWT_SECRET
    │   └── ...

## 3. Run Docker Compose
    In your project root, run:
        docker-compose up --build

    Requirements Handled by Docker
        Backend server (Node.js / Express)
        MongoDB service runs automatically as part of docker-compose.yml
        .env file must be placed in ./server/ directory with the following keys:
            PORT=5000
            MONGO_URI=mongodb://mongo:27017/student-course-api
            JWT_SECRET=your_secret_key

        mongo is the service name defined in docker-compose.yml, so you should use that as the hostname for MONGO_URI.


# Testing API Endpoints with Postman

This section explains how to use the Postman collection to test all features of the Student Course API.

## Setup Instructions for Postman
### 1. Import the Collection

    Open Postman

    Go to File > Import

    Select the file postman.json

### 2️. Set Environment Variables
    Click on the Environment quick switcher (top-right) and set these variables:

    Variable	        Description
    baseUrl	            Your server URL (default: http://localhost:5000)
    jwtToken    	    Bearer token received after login (would be different for all roles work)
    courseId	        MongoDB _id of any created course
    userIdToDelete	    MongoDB _id of the user to be deleted


# Collection Overview
The collection is grouped into 4 main categories:

1. Students
Name	    Method	Description
Signup	    POST	Register a new student or instructor
Login	    POST	Authenticate and receive JWT token
Get Profile	GET	    Fetch logged-in user's profile

2. Courses
Name	                    Method	Description
Create Course	            POST	Create a new course (admin/instructor only)
List Courses	            GET	    View all available courses
All Course by Instructor    GET     Fetch all courses taught by a specific instructor (Authorization required).
Delete Course	            DELETE	Remove course by ID (admin/instructor only)
Update Course	            PUT	    Update course details (admin/instructor only)

3. Enrollments
Name	                    Method	Description
Enroll in Course	        POST	Enroll the logged-in student in a course
View Enrolled Courses	    GET	    View the student's enrolled courses
Get Instructor by Course	GET	    Fetch instructor info for a given course

4. Admin Work
Name	                Method	Description
Signup Admin	        POST	Register an admin user
Admin Login	POST	    Login   as admin
Get All Users	        GET	    Fetch list of all users (admin only)
Remove User from DB	    DELETE	Delete a specific user by ID (admin only)

##  Authorization Guide
For all protected routes, make sure to:

    Login using any user

    Copy the JWT token from response

    Paste it into the jwtToken variable in your environment

    Authorization: Bearer {{jwtToken}}

## Testing Tips
    Always begin by testing Signup and Login to get your token.

    Save the courseId from the course creation response.

    Use that ID for enrolling or updating courses.

    Use userIdToDelete for admin delete operations.

    Admin routes can only be accessed with an admin role token.

## Example Environment Values (important)

    baseUrl         = http://localhost:5000
    jwtToken        = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    courseId        = 665b84fe9dd52f5a711ba053
    userIdToDelete  = 665b855f9dd52f5a711ba054

# Author
Mohd Ajeem
Backend Developer Intern Candidate
mobile no.  ->  [+91-9045308027]
email       ->  [ajeemqureshisd2003@gmail.com] | [mohdajeem2003@gmail.com]
github      ->  [https://github.com/mohdajeem]
linkedIn    ->  [https://www.linkedin.com/in/mohd-ajeem-552822256/]

# Student Course API – Backend (MERN Stack)
    A robust backend API built using the MERN Stack to manage users, courses, and student enrollments with full role-based access control and JWT authentication.

# Project Overview
    This project simulates a basic admission management system for educational institutions. It supports:

    Student, Instructor, and Admin roles

    JWT-based authentication

    Protected and role-restricted routes

    CRUD operations for courses

    Enrollments linking students and courses

    Instructor tracking for each course

# Assumptions
    A single student can enroll in multiple courses

    Only instructors/admins can create, update, or delete courses

    Admins can view and delete any user

    Instructor details are stored inside each course (instructor is a reference to a User with role instructor)

# How to Run the Project from Scratch
## 1. Extract the file and go to the main server
    extract the file as you already did 
    cd server
## 2. install dependecies
    npm install

## 3. Create a .env File
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/student-course-db
    JWT_SECRET=yourSuperSecretKey
## 4. Run the Server
    npm run dev

Make sure MongoDB is running locally or adjust MONGO_URI accordingly.

# Technologies Used
| Layer        | Tech                                            |
| ------------ | ----------------------------------------------- |
| Language     | JavaScript (ES6 Modules)                        |
| Framework    | Node.js + Express.js                            |
| Database     | MongoDB + Mongoose                              |
| Auth         | JWT                                             |
| Middleware   | express-validator, custom auth/role middlewares |
| Testing Tool | Postman                                         |

# API Endpoints
## 1. User APIs
    | Method | Endpoint             | Description                       | Auth Required  |
    | ------ | -------------------- | --------------------------------- | -------------  |
    | POST   | `/api/users/signup`  | Register student/instructor/admin | No             |
    | POST   | `/api/users/login`   | Login and receive JWT             | No             |
    | GET    | `/api/users/profile` | Get logged-in user profile        | Yes            |
    | GET    | `/api/users/getAll`  | Admin: Get all users              | Admin Only     |
    | DELETE | `/api/users/:userId` | Admin: Delete any user            | Admin Only     |


## 2. Course APIs
    | Method| Endpoint                               | Description                     | Auth Role            |
    | ------| ------------------------------------   | ------------------------------- |--------------------- |
    | POST  | `/api/courses`                         | Create a new course             | Admin/Instructor     |
    | GET   | `/api/courses`                         | Get all courses                 | Public               |
    | GET   | `/api/courses/:courseId/instructor`    | Get instructor of a course      | Any Logged-in User   |
    | GET   | `/api/courses/instructor/:instructorId`| Get all courses by instructor   | Any Logged-in User   |
    | PUT   | `/api/courses/:courseId`               | Update a course                 | Admin/Instructor     |
    | DELETE| `/api/courses/:courseId`               | Delete a course                 | Admin/Instructor     |

## 3. Enrollment APIs
    | Method | Endpoint                     | Description           | Auth Role |
    | ------ | ---------------------------- | --------------------- | --------- |
    | POST   | `/api/admissions/enroll`     | Enroll in a course    | Student   |
    | GET    | `/api/admissions/my-courses` | View enrolled courses | Student   |

# Postman Collection
A fully structured Postman collection is included:
### Student_Course_API.postman_collection.json along with instruction README_Postman_Instructions.md

## Use it to:

-> Test all routes

### Inject dynamic variables like {{jwtToken}}, {{courseId}}

-> Try out Student, Admin, and Instructor flows


# Author
Mohd Ajeem
Backend Developer Intern Candidate
mobile no.  ->  [+91-9045308027]
email       ->  [ajeemqureshisd2003@gmail.com] | [mohdajeem2003@gmail.com]
github      ->  [https://github.com/mohdajeem]
linkedIn    ->  [https://www.linkedin.com/in/mohd-ajeem-552822256/]







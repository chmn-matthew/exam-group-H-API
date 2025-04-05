# exam-group-H-API
# Contributors

- **Member 1**: Added `GET /exams` endpoint that returns a hardcoded list of exams.
- **Member 2**: Added `POST /exams` endpoint that adds a new exam to an array.
- **Member 3**: Added `PUT /exams/:id` endpoint that updates an existing exam.
# API Documentation

## 1. GET /exams
- **Description**: Returns a list of exams.
- **Request**: `GET /exams`
- **Response**:
  ```json
  [
      { "id": 1, "name": "Math Exam", "date": "2025-05-10" },
      { "id": 2, "name": "History Exam", "date": "2025-05-12" },
      { "id": 3, "name": "Science Exam", "date": "2025-05-15" }
  ]
# Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Start the server: `node app.js`

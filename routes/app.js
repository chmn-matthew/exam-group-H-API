
const express = require('express');
const app = express();
const port = 3000;

// Placeholder route
app.get('/exam-group', (req, res) => {
    res.json({ message: "Group <your_group> API" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.use('/exam-group', examGroupRoute);
app.use('/exams', examsRoute); 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

console.log("Leader's update to app.js");

// Add POST /exams endpoint to the same file
router.post('/', (req, res) => {
    const newExam = req.body; // Assume the new exam is sent in the request body
    exams.push(newExam); // Add it to the exams array
    res.status(201).json(newExam); // Return the newly added exam
});
app.use(express.json()); // This is necessary for POST requests to handle JSON data

//this is conflict
console.log("Leader's update to app.js");
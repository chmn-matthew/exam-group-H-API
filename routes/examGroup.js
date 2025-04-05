const express = require('express');
const app = express();
const port = 3000;
const examGroupRoute = require('./routes/examGroup'); // Add this line

app.use('/exam-group', examGroupRoute); // Update this line to use the route

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require('express');
const router = express.Router();

const exams = [
    { id: 1, name: 'Math Exam', date: '2025-05-10' },
    { id: 2, name: 'History Exam', date: '2025-05-12' },
    { id: 3, name: 'Science Exam', date: '2025-05-15' }
];

router.get('/', (req, res) => {
    res.json(exams);
});

module.exports = router;
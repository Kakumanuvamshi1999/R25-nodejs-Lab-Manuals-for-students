const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

const SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3ODUyMzQyMDEsImV4cCI6MTc4NTQwNzAwMX0.Z30w_XM_WKiwPvYyYEV4ZG7X2_-6INGNrEoQIs7l-qo";

app.use(express.json());

// ---------------- Database ----------------
const db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err)
        console.log(err.message);
    else
        console.log("Connected to the SQLite database.");
});

// Create table if it doesn't exist
db.run(`
CREATE TABLE IF NOT EXISTS students(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    grade TEXT
)
`);

// ---------------- Home ----------------
app.get("/", (req, res) => {
    res.send("Server running successfully");
});

// ---------------- JWT Middleware ----------------
function authenticateToken(req, res, next) {

    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: "Access Denied: No Token Provided"
        });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {

        if (err) {
            return res.status(403).json({
                message: "Invalid or Expired Token"
            });
        }

        req.user = user;
        next();

    });

}

// ---------------- Login ----------------
app.post('/login', (req, res) => {

    const { username } = req.body;

    if (!username) {
        return res.status(400).json({
            message: "Username required"
        });
    }

    const token = jwt.sign(
        { name: username },
        SECRET_KEY,
        { expiresIn: '48h' }
    );

    console.log("Generated Token:", token);

    return res.json({ token });

});

// ---------------- Get Students ----------------
app.get('/students', authenticateToken, (req, res) => {

    db.all("SELECT * FROM students", [], (err, rows) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        return res.json(rows);

    });

});

// ---------------- Add Student ----------------
app.post('/students', authenticateToken, (req, res) => {

    const { name, age, grade } = req.body;

    db.run(
        "INSERT INTO students(name,age,grade) VALUES(?,?,?)",
        [name, age, grade],
        function (err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            return res.status(201).json({
                id: this.lastID,
                message: "Student added successfully"
            });

        }
    );

});

// ---------------- Server ----------------
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
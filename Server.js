import express from "express";
import mysql from "mysql";

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Shopping_db",
});

connection.connect((error) => {
    if (error) {
        console.error("Connection to database failed:", error);
    } else {
        console.log("Connected to database");
    }
});

app.post("/login", (req, res) => {
    console.log("Request received:", req.body); // Log request body
    const { name, email, password } = req.body;
    const sql = "INSERT INTO users (Name, Email, Password) VALUES (?, ?, ?)";
    connection.query(
        sql,
        [name, email, password],
        (queryError) => {
            if (queryError) {
                console.error("Error executing query:", queryError);
                res.status(500).json({ success: false, message: "Login failed" });
            } else {
                console.log("User successfully logged in:", email); // Log successful login
                res.json({ success: true, message: "Login successful" });
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
});

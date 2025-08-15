// ran "npm install express" in terminal
// ran "npm install cors" in terminal

// we aren't creating these files, just importing
import express from "express";
import cors from "cors";

// creating this file
import reviews from "./api/reviews.route.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/reviews", reviews);
app.use("*", (req, res) => res.status(404).json({error: "not found"}));

export default app;

import "dotenv/config.js"
import express from "express";
import registerRouter from "./routes/registration.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3010;

// For parsing json data
app.use(express.json());
// Use express.urlencoded() for parsing URL-encoded data
app.use(express.urlencoded({extended: false}));
// Applying Cors for applying CORS policy
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// For handeling Registration
app.use("/registration",registerRouter);

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
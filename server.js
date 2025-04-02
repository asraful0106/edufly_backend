import "dotenv/config.js"
import express from "express";
import registerRouter from "./routes/registration.route.js";

const app = express();
const PORT = process.env.PORT || 3010;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// For handeling Registration
app.use("/registration",registerRouter);

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
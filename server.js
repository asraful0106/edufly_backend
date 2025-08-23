import "dotenv/config.js"
import express from "express";
import cors from "cors";
import registerRouter from "./routes/registration.route.js";
import searchRouter from "./routes/search.route.js";
import postRouter from "./routes/post.route.js";
import imageRouter from "./routes/image.rotue.js";
import iTeacherRouter from "./routes/i_teacher.route.js";
import iStudentRouter from "./routes/i_student.route.js";
import iBatchRoute from "./routes/i_batch.route.js";

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
// For handeling Search
app.use("/search", searchRouter);
// For handeling Post
app.use("/post", postRouter);
// For handeling the iamge or video serving
app.use("/image", imageRouter);
// For handeling teacher
app.use("/teacher", iTeacherRouter);
// For handeling student
app.use("/student", iStudentRouter);
// For handeling Batch
app.use("/batch", iBatchRoute);

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
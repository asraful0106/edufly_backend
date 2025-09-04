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
import iCourseRouter from "./routes/i_course.router.js";
import iClassRouter from "./routes/i_class.route.js";
import iSectionRouter from "./routes/i_section.route.js";
import resultRouter from "./routes/i_resutl.route.js";
import iStudentAttandance from "./routes/i_studentAttandance.js";
import iTeacherResult from "./routes/i_teacher_results.routes.js";

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
// For handeling Course
app.use("/courses", iCourseRouter);
// For handeling the class
app.use("/classes", iClassRouter);
// For handeling the sections
app.use("/sections", iSectionRouter);
// For handeling result
app.use("/results",resultRouter);
// For handeling teacher attandance
app.use("/attendance", iStudentAttandance)
// For handeling teacher result publising
app.use("/teacher-results", iTeacherResult)

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
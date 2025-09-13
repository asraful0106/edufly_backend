// import { Router } from "express";
// import { iStudentController } from "../controllers/i_student.controller.js";

// const iStudentRouter = Router();

// // Getting student profile
// iStudentRouter.get("/me", iStudentController.getMe);
// // For getting uniqe status of student id
// iStudentRouter.get("/is-available", iStudentController.getStudentAvaiability);
// // For Getting all the Student
// iStudentRouter.get("/:institution_id", iStudentController.getAllStudent);
// //For creating student
// iStudentRouter.post("/:institution_id",iStudentController.uploadStudentFiles, iStudentController.createStudent);
// //For creating student
// iStudentRouter.delete("/delete/:student_id", iStudentController.deleteStudent);
// // For updating placement
// iStudentRouter.patch("/:id/placement", iStudentController.updatePlacement);


// export default iStudentRouter;


import { Router } from "express";
import { iStudentController } from "../controllers/i_student.controller.js";

const iStudentRouter = Router();

// Specific routes first
iStudentRouter.get("/me", iStudentController.getMe);
iStudentRouter.get("/is-available", iStudentController.getStudentAvaiability);

// Placement + record updates
iStudentRouter.patch("/:id/placement", iStudentController.updatePlacement);
iStudentRouter.patch("/:id", iStudentController.updateStudent);

// Hard delete (optional; not used by ManageStudent for clearing placement)
iStudentRouter.delete("/delete/:student_id", iStudentController.deleteStudent);

// Collection routes by institution
iStudentRouter.get("/:institution_id", iStudentController.getAllStudent);
iStudentRouter.post("/:institution_id", iStudentController.uploadStudentFiles, iStudentController.createStudent);

export default iStudentRouter;

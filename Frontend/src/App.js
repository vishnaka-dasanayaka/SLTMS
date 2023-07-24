import Home from "./pages/Home/Home";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About/About";
import SignUp from "./pages/SignUp/SignUp";
import TeacherSignUp from "./pages/TeacherSignUp/TeacherSignUp";
import TeacherDashboard from "./pages/CourseCRUD/TeacherDashboard";
import StudentDashboard from "./pages/StudentPage/StudentDashboard";
import CourseCRUD from "./pages/CourseCRUD/CourseCRUD";
import TeacherPay from "./pages/CourseCRUD/TeacherPay";
import TeacherProfile from "./pages/CourseCRUD/TeacherProfile";
import TeacherHelp from "./pages/CourseCRUD/TeacherHelp";
import StudentSignUp from "./pages/StudentSignUp/StudentSignUp";
import StudentCourses from "./pages/StudentPage/StudentCourses";
import StudentProfile from "./pages/StudentPage/StudentProfile";
import SpecificTeacher from "./pages/StudentPage/SpecificTeacher";
import SpecificCourse from "./pages/StudentPage/SpecificCourse";
import SignIn from "./pages/SignIn/SignIn";

function App() {

  const basename = '/grp8';
  return (
    <div>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/teachersignup" element={<TeacherSignUp />} />
        <Route path="/studentsignup" element={<StudentSignUp />} />
        <Route path="/teacherDashboard" element={<TeacherDashboard />}/>
        <Route path="/studentDashboard" element={<StudentDashboard />}/>
        <Route path="/courseCRUD" element={<CourseCRUD />} />
        <Route path="/teacherHelp" element={<TeacherHelp />} />
        <Route path="/teacherPay" element={<TeacherPay />} />
        <Route path="/teacherProfile" element={<TeacherProfile />} />
        <Route path="/studentCourses" element={<StudentCourses />} />
        <Route path="/studentProfile" element={<StudentProfile />} />
        <Route path="/specificTeacher" element={<SpecificTeacher />} />
        <Route path="/specificCourse" element={<SpecificCourse />} />
      </Routes>
    </BrowserRouter></div>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
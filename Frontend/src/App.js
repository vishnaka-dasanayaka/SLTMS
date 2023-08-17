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
import UploadLesson from "./pages/CourseCRUD/UploadLesson";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from './app/store';

function App() {

  //const basename = '/grp8';
  return (
    <div>
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Provider store={store}><Home /></Provider>} />
        <Route path="/about" element={<Provider store={store}><About /></Provider>} />
        <Route path="/signup" element={<Provider store={store}><SignUp /></Provider>} />
        <Route path="/signin" element={<Provider store={store}><SignIn /></Provider>} />
        <Route path="/teachersignup" element={<Provider store={store}><TeacherSignUp /></Provider> } />
        <Route path="/studentsignup" element={<Provider store={store}><StudentSignUp /></Provider>} />
        <Route path="/teacherDashboard" element={<Provider store={store}><TeacherDashboard /></Provider>}/>
        <Route path="/studentDashboard" element={<Provider store={store}><StudentDashboard /></Provider>}/>
        <Route path="/courseCRUD" element={<Provider store={store}><CourseCRUD /></Provider>} />
        <Route path="/teacherHelp" element={<Provider store={store}><TeacherHelp /></Provider>} />
        <Route path="/teacherPay" element={<Provider store={store}><TeacherPay /></Provider>} />
        <Route path="/teacherProfile" element={<Provider store={store}><TeacherProfile /></Provider>} />
        <Route path="/studentCourses" element={<Provider store={store}><StudentCourses /></Provider>} />
        <Route path="/studentProfile" element={<Provider store={store}><StudentProfile /></Provider>} />
        <Route path="/specificTeacher" element={<Provider store={store}><SpecificTeacher /></Provider>} />
        <Route path="/specificCourse" element={<Provider store={store}><SpecificCourse /></Provider>} />
        <Route path="/uploadLesson" element={<Provider store={store}><UploadLesson /></Provider>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </div>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
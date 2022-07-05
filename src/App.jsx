import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { CONTACT_PATH, COURSE_DETAIL_PATH, COURSE_PATH, HOME_PATH, PROFILE_COIN_PATH, PROFILE_COURSE_PATH, PROFILE_PATH, PROFILE_PAYMENT_PATH, PROFILE_PROJECT_PATH, PROJECT_PATH, REGISTER_PATH, TEAM_PATH } from "./constants/path"
import { PageProvider } from "./hooks/usePage"
import MainLayout from "./layouts/MainLayout"
import ProfileLayout from "./layouts/ProfileLayout"
import Contact from "./pages/Contact"
import Course from "./pages/course/Index"
import CourseDetail from "./pages/course/[slug][id]"
import Home from "./pages"
import NotFound from "./pages/NotFound"
import Profile from "./pages/profile"
import Coin from "./pages/profile/Coin"
import CourseProfile from "./pages/profile/Course"
import Payment from "./pages/profile/Payment"
import ProjectProfile from "./pages/profile/Project"
import Project from "./pages/Project"
import Register from './pages/Register'
import Team from "./pages/Team"


function App() {
  const [toDoList, setToDoList] = useState([
    {
      isCompleted: false,
      content: "Job A"
    },
    {
      isCompleted: true,
      content: "Job B"
    }
  ])
  return (
    <div>
      {/* <CountDownBox></CountDownBox> */ }
      {/* <ToDoList toDoList={ toDoList }></ToDoList> */ }
      <PageProvider>
        <Routes >
          <Route element={ <MainLayout /> }>
            <Route index path={ HOME_PATH } element={ <Home /> } />
            <Route path={ REGISTER_PATH } element={ <Register /> } />
            <Route path={ CONTACT_PATH } element={ <Contact /> } />
            <Route path={ PROJECT_PATH } element={ <Project /> } />
            <Route path={ TEAM_PATH } element={ <Team /> } />
            <Route path={ COURSE_PATH } >
              <Route index element={ <Course /> } />
              <Route path={ COURSE_DETAIL_PATH } element={ <CourseDetail /> } />
            </Route>
            <Route element={ <ProfileLayout /> }>
              <Route index path={ PROFILE_PATH } element={ <Profile /> } />
              <Route path={ PROFILE_COIN_PATH } element={ <Coin /> } />
              <Route path={ PROFILE_COURSE_PATH } element={ <CourseProfile /> } />
              <Route path={ PROFILE_PAYMENT_PATH } element={ <Payment /> } />
              <Route path={ PROFILE_PROJECT_PATH } element={ <ProjectProfile /> } />
            </Route>
            <Route path="*" element={ <NotFound /> } />
          </Route>
        </Routes>
      </PageProvider>


    </div>
  )
}

export default App

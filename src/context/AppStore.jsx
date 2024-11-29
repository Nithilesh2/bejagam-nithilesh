import React, { useRef, useState } from "react"
import AppContext from "./AppContext"
import { useNavigate } from "react-router-dom"
import { useIdleTimer } from "react-idle-timer"

const AppStore = (props) => {
  const [minimizeResume, setMinimizeResume] = useState(true)
  const [closeResume, setCloseResume] = useState(true)
  const [screenSizeResume, setScreenSizeResume] = useState(true)

  const [minimizeSkills, setMinimizeSkills] = useState(true)
  const [closeSkills, setCloseSkills] = useState(true)
  const [screenSizeSkills, setScreenSizeSkills] = useState(true)

  const [minimizeProjects, setMinimizeProjects] = useState(true)
  const [closeProjects, setCloseProjects] = useState(true)
  const [screenSizeProjects, setScreenSizeProjects] = useState(true)

  const [minimizeStudy, setMinimizeStudy] = useState(true)
  const [closeStudy, setCloseStudy] = useState(true)
  const [screenSizeStudy, setScreenSizeStudy] = useState(true)

  const [minimizeSchool, setMinimizeSchool] = useState(true)
  const [closeSchool, setCloseSchool] = useState(true)
  const [screenSizeSchool, setScreenSizeSchool] = useState(true)

  const [minimizeIntermediate, setMinimizeIntermediate] = useState(true)
  const [closeIntermediate, setCloseIntermediate] = useState(true)
  const [screenSizeIntermediate, setScreenSizeIntermediate] = useState(true)

  const [minimizeBtech, setMinimizeBtech] = useState(true)
  const [closeBtech, setCloseBtech] = useState(true)
  const [screenSizeBtech, setScreenSizeBtech] = useState(true)

  const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState("")
  const userNameRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()

  const [userActivityStatus, setUserActivityStatus] = useState(false)

  const [name, setName] = useState([])

  const fileIconUrl =
    "https://64.media.tumblr.com/d519f7393d9ee25a0a8a0835ef93c488/8e467617da3b8b01-63/s540x810/ba5279820e44357b83ac1fdb6824e5a52ec4162f.png"

  const resumeDownload = () => {
    const link = document.createElement("a")
    link.href = "./assets/nithileshResume.pdf"
    link.setAttribute("download", "Nithilesh Resume.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resumeDoubleClick = () => {
    setCloseResume(!closeResume)
    setMinimizeResume(false)
    setName((prev) => [{ ...prev, name: "Resume" }])
  }
  const taskBarResumeClose = () => {
    setCloseResume(true)
  }

  //Skills
  const skillsDoubleClick = () => {
    setCloseSkills(!closeSkills)
    setMinimizeSkills(false)
    setName((prev) => [{ ...prev, name: "Skills" }])
  }
  const taskBarSkillsClose = () => {
    setCloseSkills(true)
  }

  //Projects
  const projectsDoubleClick = () => {
    setCloseProjects(!closeProjects)
    setMinimizeProjects(false)
    setName((prev) => [{ ...prev, name: "Projects" }])
  }

  const taskBarProjectsClose = () => {
    setCloseProjects(true)
  }

  //Study
  const studyDoubleClick = () => {
    setCloseStudy(!closeStudy)
    setMinimizeStudy(false)
    setName((prev) => [{ ...prev, name: "Study" }])
  }
  const taskBarStudyClose = () => {
    setCloseStudy(true)
  }

  //School
  const schoolDoubleClick = () => {
    setCloseSchool(!closeSchool)
    setMinimizeSchool(false)
    setName((prev) => [{ ...prev, name: "School" }])
  }
  const taskBarSchoolClose = () => {
    setCloseSchool(true)
  }

  //Intermediate
  const intermediateDoubleClick = () => {
    setCloseIntermediate(!closeIntermediate)
    setMinimizeIntermediate(false)
    setName((prev) => [{ ...prev, name: "Intermediate" }])
  }
  const taskBarIntermediateClose = () => {
    setCloseIntermediate(true)
  }

  //Btech
  const btechDoubleClick = () => {
    setCloseBtech(!closeBtech)
    setMinimizeBtech(false)
    setName((prev) => [{ ...prev, name: "Btech" }])
  }
  const taskBarBtechClose = () => {
    setCloseBtech(true)
  }

  //logout page
  const okBtnClicked = () => {
    setUserName(userNameRef.current.value)
    if (userNameRef.current.value === "") {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        alert("User name is required...")
      }, 2000)
      return
    } else if (passwordRef.current.value === "") {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        alert("Password is required...")
      }, 3000)
      return
    }
    if (
      userNameRef.current.value === "admin" ||
      userNameRef.current.value === "Admin"
    ) {
      if (passwordRef.current.value === "123") {
        setLoading(true)
        setTimeout(() => {
          navigate("/main")
          setLoading(false)
        }, 5000)
      }
      if (passwordRef.current.value !== "123") {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          alert("Wrong password...")
        }, 2000)
      }
    } else {
      setLoading(true)
      setTimeout(() => {
        navigate("/main")
        setLoading(false)
      }, 3000)
    }
  }

  //user Activity
  const handleOnIdle = () => {
    setUserActivityStatus(true)
  }

  useIdleTimer({
    timeout: 10000,
    onIdle: handleOnIdle,
  })

  return (
    <AppContext.Provider
      value={{
        minimizeResume,
        setMinimizeResume,
        closeResume,
        setCloseResume,
        screenSizeResume,
        setScreenSizeResume,
        fileIconUrl,
        resumeDownload,
        resumeDoubleClick,
        taskBarResumeClose,
        skillsDoubleClick,
        taskBarSkillsClose,
        minimizeSkills,
        setMinimizeSkills,
        closeSkills,
        setCloseSkills,
        screenSizeSkills,
        setScreenSizeSkills,
        name,
        setName,
        projectsDoubleClick,
        screenSizeProjects,
        setScreenSizeProjects,
        minimizeProjects,
        setMinimizeProjects,
        taskBarProjectsClose,
        setCloseProjects,
        closeProjects,
        studyDoubleClick,
        taskBarStudyClose,
        minimizeStudy,
        setMinimizeStudy,
        screenSizeStudy,
        setScreenSizeStudy,
        closeStudy,
        setCloseStudy,
        minimizeSchool,
        setMinimizeSchool,
        closeSchool,
        setCloseSchool,
        screenSizeSchool,
        setScreenSizeSchool,
        schoolDoubleClick,
        taskBarSchoolClose,
        minimizeIntermediate,
        setMinimizeIntermediate,
        closeIntermediate,
        setCloseIntermediate,
        screenSizeIntermediate,
        setScreenSizeIntermediate,
        intermediateDoubleClick,
        taskBarIntermediateClose,
        minimizeBtech,
        setMinimizeBtech,
        closeBtech,
        setCloseBtech,
        screenSizeBtech,
        setScreenSizeBtech,
        btechDoubleClick,
        taskBarBtechClose,
        //,
        loading,
        setLoading,
        userName,
        setUserName,
        userNameRef,
        passwordRef,
        okBtnClicked,
        //,
        userActivityStatus,
        setUserActivityStatus,
        handleOnIdle,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppStore

import React, { useContext, useEffect, useState } from "react"
import styles from "../App.module.css"
import CustomCursor from "./CustomCursor"
import {
  IoCloseOutline,
  IoPerson,
  IoRemoveOutline,
  IoSquareOutline,
} from "react-icons/io5"
import TaskBar from "./TaskBar"
import AppContext from "../context/AppContext"
import UiSkills from "./UiSkills"
import {
  FaBookOpen,
  FaGraduationCap,
  FaLightbulb,
  FaRegFileAlt,
  FaSchool,
} from "react-icons/fa"
import UiProjects from "./UiProjects"
import Draggable from "react-draggable"
import StudyDetaild from "./StudyDetaild"
import SleepPage from "./SleepPage"
import "../styles/SleepPage.module.css"
import resumeImage from "../assets/resumePic.png"
import wikipediaImage from "../assets/Wikipedia-logo.png"

const Home = () => {
  const {
    resumeDoubleClick,
    closeResume,
    screenSizeResume,
    setScreenSizeResume,
    setCloseResume,
    fileIconUrl,
    resumeDownload,
    setMinimizeResume,
    minimizeResume,
    minimizeSkills,
    closeSkills,
    setCloseSkills,
    setMinimizeSkills,
    screenSizeSkills,
    setScreenSizeSkills,
    skillsDoubleClick,
    name,
    projectsDoubleClick,
    minimizeProjects,
    closeProjects,
    screenSizeProjects,
    setMinimizeProjects,
    setScreenSizeProjects,
    setCloseProjects,
    studyDoubleClick,
    minimizeStudy,
    closeStudy,
    screenSizeStudy,
    setMinimizeStudy,
    setScreenSizeStudy,
    setCloseStudy,
    schoolDoubleClick,
    minimizeSchool,
    closeSchool,
    screenSizeSchool,
    setMinimizeSchool,
    setScreenSizeSchool,
    setCloseSchool,
    intermediateDoubleClick,
    minimizeIntermediate,
    closeIntermediate,
    screenSizeIntermediate,
    setMinimizeIntermediate,
    setScreenSizeIntermediate,
    setCloseIntermediate,
    btechDoubleClick,
    minimizeBtech,
    closeBtech,
    screenSizeBtech,
    setMinimizeBtech,
    setScreenSizeBtech,
    setCloseBtech,
  } = useContext(AppContext)

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <SleepPage />
      <div className={styles.desktop}>
        <div className={styles.leftOne}>
          <div
            className={styles.resumeFolder}
            onDoubleClick={resumeDoubleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
              alt="resume"
            />
            <div className={styles.resume}>My Resume</div>
          </div>
          {minimizeResume ? (
            ""
          ) : (
            <>
              {isDesktop ? (
                <Draggable onMouseDown={(e) => e.stopPropagation()}>
                  <div
                    className={
                      closeResume
                        ? styles.myResumeBoxDeActive
                        : screenSizeResume
                        ? styles.myResumeBoxActiveBig
                        : styles.myResumeBoxActiveSmall
                    }
                  >
                    <div className={styles.myResumeTop}>
                      <div className={styles.myResumeTopLeft}>
                        <IoPerson className={styles.myResumeTopLeftUser} />
                        <p>Nithilesh's Resume</p>
                      </div>
                      <div className={styles.myResumeTopRight}>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => {
                            setMinimizeResume(!minimizeResume)
                          }}
                        >
                          <IoRemoveOutline />
                        </button>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => setScreenSizeResume(!screenSizeResume)}
                        >
                          <IoSquareOutline />
                        </button>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => {
                            setCloseResume(true)
                          }}
                        >
                          <IoCloseOutline />
                        </button>
                      </div>
                    </div>
                    <div className={styles.myResumeCenter}>
                      <div className={styles.resumeDownload}>
                        <img
                          src={fileIconUrl}
                          alt="i"
                          title="Click to download"
                          onClick={resumeDownload}
                        />
                        <div>Resume Download</div>
                      </div>
                      <img
                        src={resumeImage}
                        alt="resume"
                        className={styles.resumeImage}
                      />
                    </div>
                    <div className={styles.myResumeBottom}>
                      <p>1 Object(s)</p>
                    </div>
                  </div>
                </Draggable>
              ) : (
                <div
                  className={
                    closeResume
                      ? styles.myResumeBoxDeActive
                      : screenSizeResume
                      ? styles.myResumeBoxActiveBig
                      : styles.myResumeBoxActiveSmall
                  }
                >
                  <div className={styles.myResumeTop}>
                    <div className={styles.myResumeTopLeft}>
                      <IoPerson className={styles.myResumeTopLeftUser} />
                      <p>Nithilesh's Resume</p>
                    </div>
                    <div className={styles.myResumeTopRight}>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => {
                          setMinimizeResume(!minimizeResume)
                        }}
                      >
                        <IoRemoveOutline />
                      </button>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => setScreenSizeResume(!screenSizeResume)}
                      >
                        <IoSquareOutline />
                      </button>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => {
                          setCloseResume(true)
                        }}
                      >
                        <IoCloseOutline />
                      </button>
                    </div>
                  </div>
                  <div className={styles.myResumeCenter}>
                    <div className={styles.resumeDownload}>
                      <img
                        src={fileIconUrl}
                        alt="i"
                        title="Click to download"
                        onClick={resumeDownload}
                      />
                      <div>Resume</div>
                    </div>
                  </div>
                  <div className={styles.myResumeBottom}>
                    <p>1 Object(s)</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.leftTwo}>
          <div
            className={styles.resumeFolder}
            onDoubleClick={skillsDoubleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
              alt="resume"
            />
            <div className={styles.resume}>Skills</div>
          </div>

          {minimizeSkills ? (
            ""
          ) : (
            <>
              {isDesktop ? (
                <Draggable onMouseDown={(e) => e.stopPropagation()}>
                  <div
                    className={
                      closeSkills
                        ? styles.myResumeBoxDeActive
                        : screenSizeSkills
                        ? styles.myResumeBoxActiveBig
                        : styles.myResumeBoxActiveSmall
                    }
                  >
                    <div className={styles.myResumeTop}>
                      <div className={styles.myResumeTopLeft}>
                        <FaLightbulb className={styles.myResumeTopLeftUser} />
                        <p>Skills</p>
                      </div>
                      <div className={styles.myResumeTopRight}>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => {
                            setMinimizeSkills(!minimizeSkills)
                          }}
                        >
                          <IoRemoveOutline />
                        </button>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => setScreenSizeSkills(!screenSizeSkills)}
                        >
                          <IoSquareOutline />
                        </button>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => {
                            setCloseSkills(true)
                          }}
                        >
                          <IoCloseOutline />
                        </button>
                      </div>
                    </div>
                    <div className={styles.myResumeCenter}>
                      <div className={styles.skillsBox}>
                        <h2>Skills</h2>
                        <UiSkills />
                      </div>
                    </div>
                    <div className={styles.myResumeBottom}>
                      <p>1 Object(s)</p>
                    </div>
                  </div>
                </Draggable>
              ) : (
                <div
                  className={
                    closeSkills
                      ? styles.myResumeBoxDeActive
                      : screenSizeSkills
                      ? styles.myResumeBoxActiveBig
                      : styles.myResumeBoxActiveSmall
                  }
                >
                  <div className={styles.myResumeTop}>
                    <div className={styles.myResumeTopLeft}>
                      <FaLightbulb className={styles.myResumeTopLeftUser} />
                      <p>Skills</p>
                    </div>
                    <div className={styles.myResumeTopRight}>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => {
                          setMinimizeSkills(!minimizeSkills)
                        }}
                      >
                        <IoRemoveOutline />
                      </button>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => setScreenSizeSkills(!screenSizeSkills)}
                      >
                        <IoSquareOutline />
                      </button>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => {
                          setCloseSkills(true)
                        }}
                      >
                        <IoCloseOutline />
                      </button>
                    </div>
                  </div>
                  <div className={styles.myResumeCenter}>
                    <div className={styles.skillsBox}>
                      <h2>Skills</h2>
                      <UiSkills />
                    </div>
                  </div>
                  <div className={styles.myResumeBottom}>
                    <p>1 Object(s)</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.leftThree}>
          <div
            className={styles.resumeFolder}
            onDoubleClick={projectsDoubleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
              alt="projects"
            />
            <div className={styles.resume}>Projects</div>
          </div>

          {minimizeProjects ? (
            ""
          ) : (
            <>
              {isDesktop ? (
                <Draggable onMouseDown={(e) => e.stopPropagation()}>
                  <div
                    className={
                      closeProjects
                        ? styles.myResumeBoxDeActive
                        : screenSizeProjects
                        ? styles.myResumeBoxActiveBig
                        : styles.myResumeBoxActiveSmall
                    }
                  >
                    <div className={styles.myResumeTop}>
                      <div className={styles.myResumeTopLeft}>
                        <FaRegFileAlt className={styles.myResumeTopLeftUser} />
                        <p>Projects</p>
                      </div>
                      <div className={styles.myResumeTopRight}>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => {
                            setMinimizeProjects(!minimizeProjects)
                          }}
                        >
                          <IoRemoveOutline />
                        </button>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() =>
                            setScreenSizeProjects(!screenSizeProjects)
                          }
                        >
                          <IoSquareOutline />
                        </button>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => {
                            setCloseProjects(true)
                          }}
                        >
                          <IoCloseOutline />
                        </button>
                      </div>
                    </div>
                    <div className={styles.myResumeCenter}>
                      <div className={styles.skillsBox}>
                        <h2>Projects</h2>
                        <UiProjects />
                      </div>
                    </div>
                    <div className={styles.myResumeBottom}>
                      <p>7 Object(s)</p>
                    </div>
                  </div>
                </Draggable>
              ) : (
                <div
                  className={
                    closeProjects
                      ? styles.myResumeBoxDeActive
                      : screenSizeProjects
                      ? styles.myResumeBoxActiveBig
                      : styles.myResumeBoxActiveSmall
                  }
                >
                  <div className={styles.myResumeTop}>
                    <div className={styles.myResumeTopLeft}>
                      <FaRegFileAlt className={styles.myResumeTopLeftUser} />
                      <p>Projects</p>
                    </div>
                    <div className={styles.myResumeTopRight}>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => {
                          setMinimizeProjects(!minimizeProjects)
                        }}
                      >
                        <IoRemoveOutline />
                      </button>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() =>
                          setScreenSizeProjects(!screenSizeProjects)
                        }
                      >
                        <IoSquareOutline />
                      </button>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => {
                          setCloseProjects(true)
                        }}
                      >
                        <IoCloseOutline />
                      </button>
                    </div>
                  </div>
                  <div className={styles.myResumeCenter}>
                    <div className={styles.skillsBox}>
                      <h2>Projects</h2>
                      <UiProjects />
                    </div>
                  </div>
                  <div className={styles.myResumeBottom}>
                    <p>7 Object(s)</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.leftFour}>
          <div className={styles.resumeFolder} onDoubleClick={studyDoubleClick}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
              alt="projects"
            />
            <div className={styles.resume}>My Study</div>
          </div>

          {minimizeStudy ? (
            ""
          ) : (
            <>
              {isDesktop ? (
                <Draggable onMouseDown={(e) => e.stopPropagation()}>
                  <div
                    className={
                      closeStudy
                        ? styles.myResumeBoxDeActive
                        : screenSizeStudy
                        ? styles.myResumeBoxActiveBig
                        : styles.myResumeBoxActiveSmall
                    }
                  >
                    <div className={styles.myResumeTop}>
                      <div className={styles.myResumeTopLeft}>
                        <FaRegFileAlt className={styles.myResumeTopLeftUser} />
                        <p>Study</p>
                      </div>
                      <div className={styles.myResumeTopRight}>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => {
                            setMinimizeStudy(!minimizeStudy)
                          }}
                        >
                          <IoRemoveOutline />
                        </button>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => setScreenSizeStudy(!screenSizeStudy)}
                        >
                          <IoSquareOutline />
                        </button>
                        <button
                          className={styles.myResumeTopRightButton}
                          onClick={() => {
                            setCloseStudy(true)
                          }}
                        >
                          <IoCloseOutline />
                        </button>
                      </div>
                    </div>
                    <div className={styles.myResumeCenter}>
                      {/* edit */}
                      <div className={styles.skillsBox}>
                        <div
                          className={styles.resumeFolder}
                          onDoubleClick={schoolDoubleClick}
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
                            alt="projects"
                          />
                          <div className={styles.resume}>School</div>
                        </div>

                        {minimizeSchool ? (
                          ""
                        ) : (
                          <>
                            {isDesktop ? (
                              <Draggable
                                onMouseDown={(e) => e.stopPropagation()}
                              >
                                <div
                                  className={
                                    closeSchool
                                      ? styles.myResumeBoxDeActive
                                      : screenSizeSchool
                                      ? styles.myResumeBoxActiveBig
                                      : styles.myResumeBoxActiveSmall
                                  }
                                >
                                  <div className={styles.myResumeTop}>
                                    <div className={styles.myResumeTopLeft}>
                                      <FaSchool
                                        className={styles.myResumeTopLeftUser}
                                      />
                                      <p>School</p>
                                    </div>
                                    <div className={styles.myResumeTopRight}>
                                      <button
                                        className={
                                          styles.myResumeTopRightButton
                                        }
                                        onClick={() => {
                                          setMinimizeSchool(!minimizeSchool)
                                        }}
                                      >
                                        <IoRemoveOutline />
                                      </button>
                                      <button
                                        className={
                                          styles.myResumeTopRightButton
                                        }
                                        onClick={() =>
                                          setScreenSizeSchool(!screenSizeSchool)
                                        }
                                      >
                                        <IoSquareOutline />
                                      </button>
                                      <button
                                        className={
                                          styles.myResumeTopRightButton
                                        }
                                        onClick={() => {
                                          setCloseSchool(true)
                                        }}
                                      >
                                        <IoCloseOutline />
                                      </button>
                                    </div>
                                  </div>
                                  <div className={styles.myResumeCenter}>
                                    <StudyDetaild
                                      type="School"
                                      course="SSC"
                                      name="Sri Siddhartha High School."
                                      address="Srinivasa Nagar, Siddipet, 502103."
                                      standards="1st - 10th"
                                      graduation="2019"
                                    />
                                  </div>
                                  <div className={styles.myResumeBottom}>
                                    <p>6 Object(s)</p>
                                  </div>
                                </div>
                              </Draggable>
                            ) : (
                              <div
                                className={
                                  closeSchool
                                    ? styles.myResumeBoxDeActive
                                    : screenSizeSchool
                                    ? styles.myResumeBoxActiveBig
                                    : styles.myResumeBoxActiveSmall
                                }
                              >
                                <div className={styles.myResumeTop}>
                                  <div className={styles.myResumeTopLeft}>
                                    <FaSchool
                                      className={styles.myResumeTopLeftUser}
                                    />
                                    <p>School</p>
                                  </div>
                                  <div className={styles.myResumeTopRight}>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setMinimizeSchool(!minimizeSchool)
                                      }}
                                    >
                                      <IoRemoveOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() =>
                                        setScreenSizeSchool(!screenSizeSchool)
                                      }
                                    >
                                      <IoSquareOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setCloseSchool(true)
                                      }}
                                    >
                                      <IoCloseOutline />
                                    </button>
                                  </div>
                                </div>
                                <div className={styles.myResumeCenter}>
                                  <StudyDetaild
                                    type="School"
                                    course="SSC"
                                    name="Sri Siddhartha High School."
                                    address="Srinivasa Nagar, Siddipet, 502103."
                                    standards="1st - 10th"
                                    graduation="2019"
                                  />
                                </div>
                                <div className={styles.myResumeBottom}>
                                  <p>6 Object(s)</p>
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        <div
                          className={styles.resumeFolder}
                          onDoubleClick={intermediateDoubleClick}
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
                            alt="projects"
                          />
                          <div className={styles.resume}>Inter</div>
                        </div>

                        {minimizeIntermediate ? (
                          ""
                        ) : (
                          <>
                            {isDesktop ? (
                              <Draggable
                                onMouseDown={(e) => e.stopPropagation()}
                              >
                                <div
                                  className={
                                    closeIntermediate
                                      ? styles.myResumeBoxDeActive
                                      : screenSizeIntermediate
                                      ? styles.myResumeBoxActiveBig
                                      : styles.myResumeBoxActiveSmall
                                  }
                                >
                                  <div className={styles.myResumeTop}>
                                    <div className={styles.myResumeTopLeft}>
                                      <FaBookOpen
                                        className={styles.myResumeTopLeftUser}
                                      />
                                      <p>Intermediate</p>
                                    </div>
                                    <div className={styles.myResumeTopRight}>
                                      <button
                                        className={
                                          styles.myResumeTopRightButton
                                        }
                                        onClick={() => {
                                          setMinimizeIntermediate(
                                            !minimizeIntermediate
                                          )
                                        }}
                                      >
                                        <IoRemoveOutline />
                                      </button>
                                      <button
                                        className={
                                          styles.myResumeTopRightButton
                                        }
                                        onClick={() =>
                                          setScreenSizeIntermediate(
                                            !screenSizeIntermediate
                                          )
                                        }
                                      >
                                        <IoSquareOutline />
                                      </button>
                                      <button
                                        className={
                                          styles.myResumeTopRightButton
                                        }
                                        onClick={() => {
                                          setCloseIntermediate(true)
                                        }}
                                      >
                                        <IoCloseOutline />
                                      </button>
                                    </div>
                                  </div>
                                  <div className={styles.myResumeCenter}>
                                    <StudyDetaild
                                      type="Intermediate"
                                      course="MPC"
                                      name="Impulse Jr. College."
                                      address="Pragathi Nagar, Hyderabad, 500043."
                                      standards="11th - 12th"
                                      graduation="2021"
                                    />
                                  </div>
                                  <div className={styles.myResumeBottom}>
                                    <p>6 Object(s)</p>
                                  </div>
                                </div>
                              </Draggable>
                            ) : (
                              <div
                                className={
                                  closeIntermediate
                                    ? styles.myResumeBoxDeActive
                                    : screenSizeIntermediate
                                    ? styles.myResumeBoxActiveBig
                                    : styles.myResumeBoxActiveSmall
                                }
                              >
                                <div className={styles.myResumeTop}>
                                  <div className={styles.myResumeTopLeft}>
                                    <FaBookOpen
                                      className={styles.myResumeTopLeftUser}
                                    />
                                    <p>Intermediate</p>
                                  </div>
                                  <div className={styles.myResumeTopRight}>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setMinimizeIntermediate(
                                          !minimizeIntermediate
                                        )
                                      }}
                                    >
                                      <IoRemoveOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() =>
                                        setScreenSizeIntermediate(
                                          !screenSizeIntermediate
                                        )
                                      }
                                    >
                                      <IoSquareOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setCloseIntermediate(true)
                                      }}
                                    >
                                      <IoCloseOutline />
                                    </button>
                                  </div>
                                </div>
                                <div className={styles.myResumeCenter}>
                                  <StudyDetaild
                                    type="Intermediate"
                                    course="MPC"
                                    name="Impulse Jr. College."
                                    address="Pragathi Nagar, Hyderabad, 500043."
                                    standards="11th - 12th"
                                    graduation="2021"
                                  />
                                </div>
                                <div className={styles.myResumeBottom}>
                                  <p>6 Object(s)</p>
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        <div
                          className={styles.resumeFolder}
                          onDoubleClick={btechDoubleClick}
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
                            alt="projects"
                          />
                          <div className={styles.resume}>B-Tech</div>
                        </div>

                        {minimizeBtech ? (
                          ""
                        ) : (
                          <>
                            {isDesktop ? (
                              <Draggable
                                onMouseDown={(e) => e.stopPropagation()}
                              >
                                <div
                                  className={
                                    closeBtech
                                      ? styles.myResumeBoxDeActive
                                      : screenSizeBtech
                                      ? styles.myResumeBoxActiveBig
                                      : styles.myResumeBoxActiveSmall
                                  }
                                >
                                  <div className={styles.myResumeTop}>
                                    <div className={styles.myResumeTopLeft}>
                                      <FaGraduationCap
                                        className={styles.myResumeTopLeftUser}
                                      />
                                      <p>Btech</p>
                                    </div>
                                    <div className={styles.myResumeTopRight}>
                                      <button
                                        className={
                                          styles.myResumeTopRightButton
                                        }
                                        onClick={() => {
                                          setMinimizeBtech(!minimizeBtech)
                                        }}
                                      >
                                        <IoRemoveOutline />
                                      </button>
                                      <button
                                        className={
                                          styles.myResumeTopRightButton
                                        }
                                        onClick={() =>
                                          setScreenSizeBtech(!screenSizeBtech)
                                        }
                                      >
                                        <IoSquareOutline />
                                      </button>
                                      <button
                                        className={
                                          styles.myResumeTopRightButton
                                        }
                                        onClick={() => {
                                          setCloseBtech(true)
                                        }}
                                      >
                                        <IoCloseOutline />
                                      </button>
                                    </div>
                                  </div>
                                  <div className={styles.myResumeCenter}>
                                    <StudyDetaild
                                      type="B-Tech"
                                      course="CSE"
                                      name="IARE college."
                                      address="Dundigal, Hyderabad, 500043."
                                      standards="Ist - IVth Year"
                                      graduation="2025"
                                    />
                                  </div>
                                  <div className={styles.myResumeBottom}>
                                    <p>6 Object(s)</p>
                                  </div>
                                </div>
                              </Draggable>
                            ) : (
                              <div
                                className={
                                  closeBtech
                                    ? styles.myResumeBoxDeActive
                                    : screenSizeBtech
                                    ? styles.myResumeBoxActiveBig
                                    : styles.myResumeBoxActiveSmall
                                }
                              >
                                <div className={styles.myResumeTop}>
                                  <div className={styles.myResumeTopLeft}>
                                    <FaGraduationCap
                                      className={styles.myResumeTopLeftUser}
                                    />
                                    <p>Btech</p>
                                  </div>
                                  <div className={styles.myResumeTopRight}>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setMinimizeBtech(!minimizeBtech)
                                      }}
                                    >
                                      <IoRemoveOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() =>
                                        setScreenSizeBtech(!screenSizeBtech)
                                      }
                                    >
                                      <IoSquareOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setCloseBtech(true)
                                      }}
                                    >
                                      <IoCloseOutline />
                                    </button>
                                  </div>
                                </div>
                                <div className={styles.myResumeCenter}>
                                  <StudyDetaild
                                    type="B-Tech"
                                    course="CSE"
                                    name="IARE college."
                                    address="Dundigal, Hyderabad, 500043."
                                    standards="Ist - IVth Year"
                                    graduation="2025"
                                  />
                                </div>
                                <div className={styles.myResumeBottom}>
                                  <p>6 Object(s)</p>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div className={styles.myResumeBottom}>
                      <p>3 Object(s)</p>
                    </div>
                  </div>
                </Draggable>
              ) : (
                <div
                  className={
                    closeStudy
                      ? styles.myResumeBoxDeActive
                      : screenSizeStudy
                      ? styles.myResumeBoxActiveBig
                      : styles.myResumeBoxActiveSmall
                  }
                >
                  <div className={styles.myResumeTop}>
                    <div className={styles.myResumeTopLeft}>
                      <FaRegFileAlt className={styles.myResumeTopLeftUser} />
                      <p>Study</p>
                    </div>
                    <div className={styles.myResumeTopRight}>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => {
                          setMinimizeStudy(!minimizeStudy)
                        }}
                      >
                        <IoRemoveOutline />
                      </button>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => setScreenSizeStudy(!screenSizeStudy)}
                      >
                        <IoSquareOutline />
                      </button>
                      <button
                        className={styles.myResumeTopRightButton}
                        onClick={() => {
                          setCloseStudy(true)
                        }}
                      >
                        <IoCloseOutline />
                      </button>
                    </div>
                  </div>
                  <div className={styles.myResumeCenter}>
                    {/* edit */}
                    <div className={styles.skillsBox}>
                      <div
                        className={styles.resumeFolder}
                        onDoubleClick={schoolDoubleClick}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
                          alt="projects"
                        />
                        <div className={styles.resume}>School</div>
                      </div>

                      {minimizeSchool ? (
                        ""
                      ) : (
                        <>
                          {isDesktop ? (
                            <Draggable onMouseDown={(e) => e.stopPropagation()}>
                              <div
                                className={
                                  closeSchool
                                    ? styles.myResumeBoxDeActive
                                    : screenSizeSchool
                                    ? styles.myResumeBoxActiveBig
                                    : styles.myResumeBoxActiveSmall
                                }
                              >
                                <div className={styles.myResumeTop}>
                                  <div className={styles.myResumeTopLeft}>
                                    <FaSchool
                                      className={styles.myResumeTopLeftUser}
                                    />
                                    <p>School</p>
                                  </div>
                                  <div className={styles.myResumeTopRight}>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setMinimizeSchool(!minimizeSchool)
                                      }}
                                    >
                                      <IoRemoveOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() =>
                                        setScreenSizeSchool(!screenSizeSchool)
                                      }
                                    >
                                      <IoSquareOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setCloseSchool(true)
                                      }}
                                    >
                                      <IoCloseOutline />
                                    </button>
                                  </div>
                                </div>
                                <div className={styles.myResumeCenter}>
                                  <StudyDetaild
                                    type="School"
                                    course="SSC"
                                    name="Sri Siddhartha High School."
                                    address="Srinivasa Nagar, Siddipet, 502103."
                                    standards="1st - 10th"
                                    graduation="2019"
                                  />
                                </div>
                                <div className={styles.myResumeBottom}>
                                  <p>6 Object(s)</p>
                                </div>
                              </div>
                            </Draggable>
                          ) : (
                            <div
                              className={
                                closeSchool
                                  ? styles.myResumeBoxDeActive
                                  : screenSizeSchool
                                  ? styles.myResumeBoxActiveBig
                                  : styles.myResumeBoxActiveSmall
                              }
                            >
                              <div className={styles.myResumeTop}>
                                <div className={styles.myResumeTopLeft}>
                                  <FaSchool
                                    className={styles.myResumeTopLeftUser}
                                  />
                                  <p>School</p>
                                </div>
                                <div className={styles.myResumeTopRight}>
                                  <button
                                    className={styles.myResumeTopRightButton}
                                    onClick={() => {
                                      setMinimizeSchool(!minimizeSchool)
                                    }}
                                  >
                                    <IoRemoveOutline />
                                  </button>
                                  <button
                                    className={styles.myResumeTopRightButton}
                                    onClick={() =>
                                      setScreenSizeSchool(!screenSizeSchool)
                                    }
                                  >
                                    <IoSquareOutline />
                                  </button>
                                  <button
                                    className={styles.myResumeTopRightButton}
                                    onClick={() => {
                                      setCloseSchool(true)
                                    }}
                                  >
                                    <IoCloseOutline />
                                  </button>
                                </div>
                              </div>
                              <div className={styles.myResumeCenter}>
                                <StudyDetaild
                                  type="School"
                                  course="SSC"
                                  name="Sri Siddhartha High School."
                                  address="Srinivasa Nagar, Siddipet, 502103."
                                  standards="1st - 10th"
                                  graduation="2019"
                                />
                              </div>
                              <div className={styles.myResumeBottom}>
                                <p>6 Object(s)</p>
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      <div
                        className={styles.resumeFolder}
                        onDoubleClick={intermediateDoubleClick}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
                          alt="projects"
                        />
                        <div className={styles.resume}>Inter</div>
                      </div>

                      {minimizeIntermediate ? (
                        ""
                      ) : (
                        <>
                          {isDesktop ? (
                            <Draggable onMouseDown={(e) => e.stopPropagation()}>
                              <div
                                className={
                                  closeIntermediate
                                    ? styles.myResumeBoxDeActive
                                    : screenSizeIntermediate
                                    ? styles.myResumeBoxActiveBig
                                    : styles.myResumeBoxActiveSmall
                                }
                              >
                                <div className={styles.myResumeTop}>
                                  <div className={styles.myResumeTopLeft}>
                                    <FaBookOpen
                                      className={styles.myResumeTopLeftUser}
                                    />
                                    <p>Intermediate</p>
                                  </div>
                                  <div className={styles.myResumeTopRight}>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setMinimizeIntermediate(
                                          !minimizeIntermediate
                                        )
                                      }}
                                    >
                                      <IoRemoveOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() =>
                                        setScreenSizeIntermediate(
                                          !screenSizeIntermediate
                                        )
                                      }
                                    >
                                      <IoSquareOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setCloseIntermediate(true)
                                      }}
                                    >
                                      <IoCloseOutline />
                                    </button>
                                  </div>
                                </div>
                                <div className={styles.myResumeCenter}>
                                  <StudyDetaild
                                    type="Intermediate"
                                    course="MPC"
                                    name="Impulse Jr. College."
                                    address="Pragathi Nagar, Hyderabad, 500043."
                                    standards="11th - 12th"
                                    graduation="2021"
                                  />
                                </div>
                                <div className={styles.myResumeBottom}>
                                  <p>6 Object(s)</p>
                                </div>
                              </div>
                            </Draggable>
                          ) : (
                            <div
                              className={
                                closeIntermediate
                                  ? styles.myResumeBoxDeActive
                                  : screenSizeIntermediate
                                  ? styles.myResumeBoxActiveBig
                                  : styles.myResumeBoxActiveSmall
                              }
                            >
                              <div className={styles.myResumeTop}>
                                <div className={styles.myResumeTopLeft}>
                                  <FaBookOpen
                                    className={styles.myResumeTopLeftUser}
                                  />
                                  <p>Intermediate</p>
                                </div>
                                <div className={styles.myResumeTopRight}>
                                  <button
                                    className={styles.myResumeTopRightButton}
                                    onClick={() => {
                                      setMinimizeIntermediate(
                                        !minimizeIntermediate
                                      )
                                    }}
                                  >
                                    <IoRemoveOutline />
                                  </button>
                                  <button
                                    className={styles.myResumeTopRightButton}
                                    onClick={() =>
                                      setScreenSizeIntermediate(
                                        !screenSizeIntermediate
                                      )
                                    }
                                  >
                                    <IoSquareOutline />
                                  </button>
                                  <button
                                    className={styles.myResumeTopRightButton}
                                    onClick={() => {
                                      setCloseIntermediate(true)
                                    }}
                                  >
                                    <IoCloseOutline />
                                  </button>
                                </div>
                              </div>
                              <div className={styles.myResumeCenter}>
                                <StudyDetaild
                                  type="Intermediate"
                                  course="MPC"
                                  name="Impulse Jr. College."
                                  address="Pragathi Nagar, Hyderabad, 500043."
                                  standards="11th - 12th"
                                  graduation="2021"
                                />
                              </div>
                              <div className={styles.myResumeBottom}>
                                <p>6 Object(s)</p>
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      <div
                        className={styles.resumeFolder}
                        onDoubleClick={btechDoubleClick}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
                          alt="projects"
                        />
                        <div className={styles.resume}>B-Tech</div>
                      </div>

                      {minimizeBtech ? (
                        ""
                      ) : (
                        <>
                          {isDesktop ? (
                            <Draggable onMouseDown={(e) => e.stopPropagation()}>
                              <div
                                className={
                                  closeBtech
                                    ? styles.myResumeBoxDeActive
                                    : screenSizeBtech
                                    ? styles.myResumeBoxActiveBig
                                    : styles.myResumeBoxActiveSmall
                                }
                              >
                                <div className={styles.myResumeTop}>
                                  <div className={styles.myResumeTopLeft}>
                                    <FaGraduationCap
                                      className={styles.myResumeTopLeftUser}
                                    />
                                    <p>Btech</p>
                                  </div>
                                  <div className={styles.myResumeTopRight}>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setMinimizeBtech(!minimizeBtech)
                                      }}
                                    >
                                      <IoRemoveOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() =>
                                        setScreenSizeBtech(!screenSizeBtech)
                                      }
                                    >
                                      <IoSquareOutline />
                                    </button>
                                    <button
                                      className={styles.myResumeTopRightButton}
                                      onClick={() => {
                                        setCloseBtech(true)
                                      }}
                                    >
                                      <IoCloseOutline />
                                    </button>
                                  </div>
                                </div>
                                <div className={styles.myResumeCenter}>
                                  <StudyDetaild
                                    type="B-Tech"
                                    course="CSE"
                                    name="IARE college."
                                    address="Dundigal, Hyderabad, 500043."
                                    standards="Ist - IVth Year"
                                    graduation="2025"
                                  />
                                </div>
                                <div className={styles.myResumeBottom}>
                                  <p>6 Object(s)</p>
                                </div>
                              </div>
                            </Draggable>
                          ) : (
                            <div
                              className={
                                closeBtech
                                  ? styles.myResumeBoxDeActive
                                  : screenSizeBtech
                                  ? styles.myResumeBoxActiveBig
                                  : styles.myResumeBoxActiveSmall
                              }
                            >
                              <div className={styles.myResumeTop}>
                                <div className={styles.myResumeTopLeft}>
                                  <FaGraduationCap
                                    className={styles.myResumeTopLeftUser}
                                  />
                                  <p>Btech</p>
                                </div>
                                <div className={styles.myResumeTopRight}>
                                  <button
                                    className={styles.myResumeTopRightButton}
                                    onClick={() => {
                                      setMinimizeBtech(!minimizeBtech)
                                    }}
                                  >
                                    <IoRemoveOutline />
                                  </button>
                                  <button
                                    className={styles.myResumeTopRightButton}
                                    onClick={() =>
                                      setScreenSizeBtech(!screenSizeBtech)
                                    }
                                  >
                                    <IoSquareOutline />
                                  </button>
                                  <button
                                    className={styles.myResumeTopRightButton}
                                    onClick={() => {
                                      setCloseBtech(true)
                                    }}
                                  >
                                    <IoCloseOutline />
                                  </button>
                                </div>
                              </div>
                              <div className={styles.myResumeCenter}>
                                <StudyDetaild
                                  type="B-Tech"
                                  course="CSE"
                                  name="IARE college."
                                  address="Dundigal, Hyderabad, 500043."
                                  standards="Ist - IVth Year"
                                  graduation="2025"
                                />
                              </div>
                              <div className={styles.myResumeBottom}>
                                <p>6 Object(s)</p>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className={styles.myResumeBottom}>
                    <p>3 Object(s)</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.leftFive}>
          <div
            className={styles.resumeFolder}
            // onDoubleClick={projectsDoubleClick}
            onDoubleClick={() => {
              alert("In Progress")
            }}
          >
            <img src={wikipediaImage} alt="wikipedia" />
            <div className={styles.resume}>Wikipedia</div>
          </div>
        </div>
      </div>
      <TaskBar />
      {name.map((data) => (
        <TaskBar key="index" source={fileIconUrl} />
      ))}
    </>
  )
}

export default Home

import React from "react"
import styles from "../styles/StudyDetaild.module.css"

const StudyDetaild = (props) => {
  return (
    <>
      <div className={styles.main}>
        <h1>{props.type}</h1>
        <div className={styles.dottedLine}></div>
        <div className={styles.studyName}>
          <h3>{props.type} Name :</h3> <h3>{props.name}</h3>
        </div>
        <div className={styles.studyCourse}>
          <h3>Course :</h3> <h3>{props.course}</h3>
        </div>
        <div className={styles.studyAddress}>
          <h3>{props.type} Address :</h3> <h3>{props.address}</h3>
        </div>
        <div className={styles.studyStandard}>
          <h3>Standard :</h3> <h3>{props.standards}</h3>
        </div>
        <div className={styles.studyGraduation}>
          <h3>Graduation year :</h3> <h3>{props.graduation}</h3>
        </div>
      </div>
    </>
  )
}

export default StudyDetaild

import React, { useContext, useEffect, useRef, useState } from "react"
import Clock from "react-clock"
import "react-clock/dist/Clock.css"
import styles from "../styles/SleepPage.module.css"
import AppContext from "../context/AppContext"

const SleepPage = () => {
  const { userActivityStatus, setUserActivityStatus } = useContext(AppContext)
  const [value, setValue] = useState(new Date())
  const today = new Date()
  const divRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus()
    }
  }, [])

  const keyPressed = (eve) => {
    if (eve.key) {
      setUserActivityStatus(false)
    }
  }

  return (
    <div
      className={
        userActivityStatus ? styles.clockMainActive : styles.clockMainDeActive
      }
      onClick={() => {
        setUserActivityStatus(false)
      }}
      ref={divRef}
      onKeyDown={keyPressed}
      tabIndex="0"
    >
      <Clock value={value} />
      <div className={styles.todayDate}>{`${today.getDate()}/${(
        today.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${today.getFullYear()}`}</div>
    </div>
  )
}

export default SleepPage

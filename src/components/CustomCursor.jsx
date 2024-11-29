import React, { useEffect, useState } from "react"
import styles from "../App.module.css"

const CustomCursor = () => {
  const [cursorVisible, setCursorVisible] = useState(true)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.pageX, y: e.pageY })
      if (
        e.pageX + 30 >= window.innerWidth ||
        e.pageY + 30 >= window.innerHeight ||
        e.pageY <= 0
      ) {
        setCursorVisible(false)
      } else {
        setCursorVisible(true)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const cursorStyle = {
    display: cursorVisible ? "block" : "none",
    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
  }

  return (
    <>
      <div className={styles.customCursor} style={cursorStyle}></div>
    </>
  )
}

export default CustomCursor

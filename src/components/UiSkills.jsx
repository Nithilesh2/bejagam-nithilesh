import React from "react"
import Rating from "./Rating"
import styles from "../styles/UiSkills.module.css"

const UiSkills = () => {
  return (
    <>
      <ul className={styles.ul}>
        <li>
          HTML
          <span className={styles.rating}>
            <Rating rating="5" />
          </span>
        </li>
        <li>
          CSS
          <span className={styles.rating}>
            <Rating rating="4" />
          </span>
        </li>
        <li>
          JavaScript
          <span className={styles.rating}>
            <Rating rating="4" />
          </span>
        </li>
        <li>
          React
          <span className={styles.rating}>
            <Rating rating="4" />
          </span>
        </li>
        <li>
          React-Native
          <span className={styles.rating}>
            <Rating rating="2" />
          </span>
        </li>
        <li>
          Node.js
          <span className={styles.rating}>
            <Rating rating="3" />
          </span>
        </li>
        <li>
          Astro
          <span className={styles.rating}>
            <Rating rating="4" />
          </span>
        </li>
        <li>
          Git
          <span className={styles.rating}>
            <Rating rating="3" />
          </span>
        </li>
        <li>
          Java
          <span className={styles.rating}>
            <Rating rating="4" />
          </span>
        </li>
        <li>
          Python
          <span className={styles.rating}>
            <Rating rating="3" />
          </span>
        </li>
        <li>
          C
          <span className={styles.rating}>
            <Rating rating="2" />
          </span>
        </li>
      </ul>
    </>
  )
}

export default UiSkills

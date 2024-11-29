import React from "react"
import styles from "../styles/UiProjects.module.css"

const UiProjects = () => {
  return (
    <>
      <ul>
        <li>
          E-Commerce website
          <span className={styles.projects}>
            (link :&nbsp;
            <p
              onClick={() => {
                window.open("https://24exclusive.netlify.app")
              }}
              title="click to open 24exclusive link"
            >
              https://24exclusive.netlify.app
            </p>
            )
          </span>
        </li>
        <li>
          Snake, Water and Gun game
          <span className={styles.projects}>
            (link :
            <p
              onClick={() => {
                window.open("https://snake-water-gun-and-game.netlify.app/")
              }}
              title="click to open game link"
            >
              https://snake-water-gun-and-game.netlify.app
            </p>
            )
          </span>
        </li>
        <li>
          TODO'S
          <span className={styles.projects}>
            (link :&nbsp;
            <p
              onClick={() => {
                window.open("https://todo-2024.netlify.app/")
              }}
              title="click to open todo's link"
            >
              https://todo-2024.netlify.app/
            </p>
            )
          </span>
        </li>
        <li>
          Budget PLanner
          <span className={styles.projects}>
            (link :&nbsp;
            <p
              onClick={() => {
                window.open("https://2024-budgetplanner.netlify.app/")
              }}
              title="click to open budget planner link"
            >
              https://2024-budgetplanner.netlify.app/
            </p>
            )
          </span>
        </li>
        <li>
          Recipe Finder
          <span className={styles.projects}>
            (link :&nbsp;
            <p
              onClick={() => {
                window.open("https://2024-recipefinder.netlify.app/")
              }}
              title="click to open recipe finder link"
            >
              https://2024-recipefinder.netlify.app
            </p>
            )
          </span>
        </li>
        <li>
          Build IT
          <span className={styles.projects}>
            (link :&nbsp;
            <p
              onClick={() => {
                window.open("https://builditiare.netlify.app/")
              }}
              title="click to open buildit  link"
            >
              https://builditiare.netlify.app/
            </p>
            )
          </span>
        </li>
        <li>
          Credit Card{" "}
          <span className={styles.projects}>
            (link :&nbsp;
            <p
              onClick={() => {
                window.open("https://card-payment.netlify.app/")
              }}
              title="click to open payment card link"
            >
              https://card-payment.netlify.app/
            </p>
            )
          </span>
        </li>
      </ul>
    </>
  )
}

export default UiProjects

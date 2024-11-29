import React, { useContext } from "react"
import styles from "../styles/LogonPage.module.css"
import CustomCursor from "./CustomCursor"
import ReactLoading from "react-loading"
import AppContext from "../context/AppContext"

const LogonPage = () => {
  const { userNameRef, passwordRef, okBtnClicked, loading } =
    useContext(AppContext)

  return (
    <>
      <CustomCursor />
      <div className={styles.logonPage}>
        <div className={styles.logonBox}>
          <div className={styles.logonBoxTop}>Enter Password</div>
          <div className={styles.logonBoxCenter}>
            <img
              src="https://cdn2.steamgriddb.com/logo/72750ee512b0ef9c77aa7e84765a8173.png"
              alt="windows nt 5.0"
              className={styles.LogonBoxCenterIcon}
            />
          </div>
          <div className={styles.logonBoxBottom}>
            <div className={styles.logonBoxBottomUserNameBox}>
              <label className={styles.logonBoxBottomUserName}>
                User name :
              </label>
              <input
                type="text"
                className={styles.userName}
                ref={userNameRef}
              />
            </div>
            <div className={styles.logonBoxBottomPasswordBox}>
              <label className={styles.logonBoxBottomPassword}>
                Password :
              </label>
              <input
                type="password"
                className={styles.password}
                ref={passwordRef}
              />
            </div>
          </div>
          <div className={styles.bottomDown}>
            <button className={styles.bottomDownOk} onClick={okBtnClicked}>
              Ok
            </button>
            <button className={styles.bottomDownCancel}>Cancel</button>
            <button className={styles.bottomDownShutdown}>Shutdown...</button>
          </div>
          <div
            className={styles.forgotPassword}
            onClick={() => {
              alert("User Name: 'admin' or 'Admin'\nPassword: '123'")
            }}
          >
            forgot password?
          </div>
        </div>
        {loading ? (
          <ReactLoading
            type={"spinningBubbles"}
            color={"blue"}
            height={"60px"}
            width={"60px"}
          />
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default LogonPage

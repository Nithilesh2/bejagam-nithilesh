import React from "react"
import { IoStarOutline } from "react-icons/io5"

const Rating = (props) => {
  return (
    <>
      {props.rating === "5" ? (
        <>
          <IoStarOutline />
          <IoStarOutline />
          <IoStarOutline />
          <IoStarOutline />
          <IoStarOutline />
        </>
      ) : props.rating === "4" ? (
        <>
          <IoStarOutline />
          <IoStarOutline />
          <IoStarOutline />
          <IoStarOutline />
        </>
      ) : props.rating === "3" ? (
        <>
          <IoStarOutline />
          <IoStarOutline />
          <IoStarOutline />
        </>
      ) : props.rating === "2" ? (
        <>
          {" "}
          <IoStarOutline />
          <IoStarOutline />
        </>
      ) : props.rating === "1" ? (
        <>
          <IoStarOutline />
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default Rating


import { useEffect } from "react"

export default function Home(){

useEffect(()=>{
  localStorage.setItem("responsemsg","logged out")
})

    return(
      <div>
        <h1>Welcome to Petty Cash Management for Corporates.</h1>
      </div>
    )
  }
import { useState } from "react"

const Loading = () => {

    const [dots,setDots] = useState();
  return (
    <div className="w-36 h-20 flex flex-row">
        <img src="/logo.png" alt=""/>
        <img src="/loading_icon.gif" alt=""/>
    </div>
  )
}

export default Loading
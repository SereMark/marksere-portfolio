import React, {useRef,useEffect} from "react"
import ReactDOM from "react-dom/client"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"
import "./styles/index.css"
import App from "./App"
const Root=()=>{
  const scrollRef=useRef(),locoScroll=useRef()
  useEffect(()=>{
    if(!scrollRef.current)return
    locoScroll.current=new LocomotiveScroll({el:scrollRef.current,smooth:true,multiplier:1,lerp:0.1})
    const update=()=>locoScroll.current.update()
    window.addEventListener("resize",update)
    const imgs=scrollRef.current.querySelectorAll("img")
    Promise.all([...imgs].map(img=>img.complete?Promise.resolve():new Promise(r=>{img.onload=r;img.onerror=r}))).then(update)
    window.addEventListener("refreshScroll",update)
    return()=>{
      window.removeEventListener("resize",update)
      window.removeEventListener("refreshScroll",update)
      locoScroll.current?.destroy()
    }
  },[])
  return <div id="main-container" data-scroll-container ref={scrollRef}><App/></div>
}
ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode><Root/></React.StrictMode>)
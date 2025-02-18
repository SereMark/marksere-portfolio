import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import './styles/index.css'
import App from './App'

const Root = () => {
  const scrollRef = useRef(null)
  const locoScroll = useRef(null)
  const [currentPage, setCurrentPage] = useState('home')
  
  useEffect(() => {
    if (scrollRef.current) {
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        lerp: 0.1
      })
      const updateScroll = () => locoScroll.current.update()
      window.addEventListener('resize', updateScroll)
      const imgs = scrollRef.current.querySelectorAll('img')
      Promise.all(
        Array.from(imgs).map(img =>
          img.complete ? Promise.resolve() : new Promise(r => { img.onload = r; img.onerror = r })
        )
      ).then(updateScroll)
      window.addEventListener('refreshScroll', updateScroll)
      return () => {
        window.removeEventListener('resize', updateScroll)
        window.removeEventListener('refreshScroll', updateScroll)
        locoScroll.current?.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (locoScroll.current) {
      locoScroll.current.scrollTo(0, { duration: 0, disableLerp: true })
      locoScroll.current.update()
    }
  }, [currentPage])

  return (
    <div id="main-container" data-scroll-container ref={scrollRef}>
      <App currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
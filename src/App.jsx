import { useEffect, useState, useRef } from 'react'
import './App.css'

import { Navbar, Footer, Contact, Section } from "./componentes/elements/index"
import { Intro, Hero, Projects, Technologies } from "./componentes/sections/index"

function App() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false);


  const moveCursor = (event) => {
    const posX = event.clientX;
    const posY = event.clientY;

    cursorDotRef.current.style.left = `${posX}px`;
    cursorDotRef.current.style.top = `${posY}px`;

    cursorOutlineRef.current.animate({
      top: `${posY}px`,
      left: `${posX}px`
    }, { duration: 500, fill: "forwards" });
  }

  const handleScroll = () => {
    extendCursor();
    setTimeout(() => {
      setIsScrolling(false);
    }, 300)
  }

  const extendCursor = () => {
    setIsScrolling(true);
    cursorDotRef.current.style.height = "25px";
    cursorDotRef.current.style.width = "12px";
    cursorOutlineRef.current.style.height = "25px";
    cursorOutlineRef.current.style.width = "12px";
  }

  const resetCursor = () => {
    cursorDotRef.current.style.height = "12px";
    cursorDotRef.current.style.width = "25px";
    cursorOutlineRef.current.style.height = "12px";
    cursorOutlineRef.current.style.width = "25px";
  }

  useEffect(() => {
    if (!isScrolling) {
      resetCursor();
    }
  }, [isScrolling]);

  return (
      <div className="app" onMouseMove={moveCursor} onScroll={handleScroll}>
        <div className="cursor-dot" ref={cursorDotRef}></div>
        <div className="cursor-outline" ref={cursorOutlineRef}></div>
        <Contact />
        <Intro />
        <Hero />
        <Projects />
        <Technologies />
        <Footer />
        <section className="cta"></section>
      </div>
      )

}

export default App

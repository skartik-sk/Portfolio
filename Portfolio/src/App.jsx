import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Lenis from "@studio-freight/lenis/types";
import Error from "./pages/404";
import Projects from "./project";
// import Projects from './project';

function Container({ children }) {
  return <div className="">{children}</div>;
}
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness of the scroll (0 to 1)
      smooth: true, // Enable smooth scrolling
      // Other options...
    });

    function raf(time) {
      // lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up
  }, []);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console. log (latest);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col ">
          <TopNav />
          <motion.div
            style={{
              scaleX: scrollYProgress,
            }}
            className="fixed z-10 h-1 rounded-full w-full bg-gradient-background"
          ></motion.div>
          <div className="flex-grow mt-16  ">
            <Home />
            {/* <Projects/> */}
            {/* <Error/> */}
          </div>
          {/* <Container children={children}/> */}
          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
}

export default App;

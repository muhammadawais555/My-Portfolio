import "./App.css";
// import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import Menu from "./components/Menus/Menu";
import { useTheme } from "../src/context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme] = useTheme();
  return (
    <>
      {/* <Layout /> */}
      <div id={theme}>
        <ToastContainer />
        <Menu />
        <div className="container">
          <About />
        </div>
        <Education />
        <Techstack />

        <Projects />
        <WorkExp />
        <Contact />
        <Footer />
        <ScrollToTop smooth className="Scroll" />
      </div>
    </>
  );
}

export default App;

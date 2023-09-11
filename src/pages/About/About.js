import React from "react";
import { useTheme } from "../../context/ThemeContext";
import aa from "../../components/Menus/aa.ico";
import "./about.css";
import Typewriter from "typewriter-effect";
import resume from "../../assets/docs/resume.pdf";
import "../Home/home.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
// import ScrollDown from "../../components/Scroll/ScrollDown";
import Fade from "react-reveal/Fade";

const About = () => {
  const [theme, setTheme] = useTheme();
  const handletheme = () => {
    setTheme((prevstate) => (prevstate === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="about" id="about">
        <div className="theme-btn" onClick={handletheme}>
          {theme === "light" ? (
            <BsFillMoonFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <Fade right>
          <div className="home-content">
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Web Developer!", "Jr Mern Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=03365544467"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={resume}
                download="Muhammad_Awais_CV.pdf"
              >
                My Resume
              </a>
            </div>
          </div>
        </Fade>

        <div className="row pic-text">
          <div className="col-md-4  col-xl-4 col-lg-4 col-xs-12 about-img">
            <img src={aa} alt="mypic" />
          </div>
          <div className="col-md-8 col-xl-8 col-lg-8 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Hello there! 👋 As a junior MERN stack developer, I'm on an
              exciting journey of crafting web experiences. My days are filled
              with coding adventures in MongoDB, Express, React, and Node.js.
              I'm passionate about turning ideas into functional and
              user-friendly applications. Eager to learn, grow, and contribute
              my skills to create digital wonders. I thrive on continuous
              learning, constantly leveling up my skills to craft digital
              wonders. Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

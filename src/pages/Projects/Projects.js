import React from "react";
import "./Projects.css";
import enc from "../../assets/images/enc.png";
import kar from "../../assets/images/kar.png";
import mol from "../../assets/images/mol.png";
import men from "../../assets/images/men.png";
import wea from "../../assets/images/wea.png";
import sho from "../../assets/images/sho.png";

const Projects = () => {
  return (
    <>
      <div className="project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="p-3 text-center justify-content">
          👉 Full-stack Ecommerce Web App developed using Node.js, Express,
          React, Redux, and MongoDB for seamless shopping. Cryptography App
          employs Node.js, Express, and MongoDB for secure communication and
          message encryption. Karma Business Website showcases HTML, Tailwind
          CSS, Bootstrap, and JavaScript for a dynamic online presence. Dynamic
          Weather App utilizes Node.js, Express, and weather API for real-time
          weather updates. Restaurant Menu Card, a React project, highlights a
          responsive menu interface with external API integration. Smart Trade
          website, built with HTML, Bootstrap, JavaScript, and Tailwind CSS,
          promotes trading concepts with modern design and dynamics.
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={mol} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Node</span>
                <span className="card-detial-badge">Express</span>
                <span className="card-detial-badge">React</span>
                <span className="card-detial-badge">Redux</span>
                <span className="card-detial-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Ecommerce Web app</h5>
                </div>
                <a className="ad-btn" href="/">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={enc} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Node</span>
                <span className="card-detial-badge">Express</span>
                <span className="card-detial-badge">Handlebars</span>
                <span className="card-detial-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Cryptography App</h5>
                </div>
                <a className="ad-btn" href="/">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front End</span>
                <img src={kar} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Html</span>
                <span className="card-detial-badge">Tailwind</span>
                <span className="card-detial-badge">Bootstrap</span>
                <span className="card-detial-badge">Javascript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Karma Bussiness Website</h5>
                </div>
                <a className="ad-btn" href="/">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={wea} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Node</span>
                <span className="card-detial-badge">Express</span>
                <span className="card-detial-badge">Html</span>
                <span className="card-detial-badge">Weather API</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Dynamic Weather App</h5>
                </div>
                <a className="ad-btn" href="/">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front End</span>
                <img src={men} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">React</span>
                <span className="card-detial-badge">Bootstrap</span>
                <span className="card-detial-badge">Material UI</span>
                <span className="card-detial-badge">Menu API</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Restaurant Menu card</h5>
                </div>
                <a className="ad-btn" href="/">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front End</span>
                <img src={sho} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Html</span>
                <span className="card-detial-badge">Bootstrap</span>
                <span className="card-detial-badge">Java Script</span>
                <span className="card-detial-badge">Tailwind</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Smart Trade</h5>
                </div>
                <a className="ad-btn" href="/">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

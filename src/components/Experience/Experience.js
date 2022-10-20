import React, { useEffect } from "react";
import "./Experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import quora from "../assets/quora.png";
import airbnb from "../assets/airbnb.png";

const Experience = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <h2 className="heading">
        <span className="span" data-aos="fade-down" data-aos-duration="1000">
          Experiences
        </span>
      </h2>

      {/*Google*/}
      <div className="experince-card-div">
        <div
          className="experience-card"
          data-aos="fade-right"
          data-aos-duratiom="2000"
        >
          <div className="experience-banner">
            <div className="experience-blured-div"></div>
            <div className="experience-div-company">
              <svg
                className="logo-svg"
                alt=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 86 28"
              >
                <path
                  fill="#4285F4"
                  d="M10.4,21C4.7,21,0,16.2,0,10.5S4.7,0,10.4,0c3.1,0,5.3,1.3,7,2.9l-1.9,2c-1.2-1.2-2.8-2-5-2
                    c-4.1,0-7.3,3.4-7.3,7.6s3.2,7.6,7.3,7.6c2.7,0,4.2-1.1,5.1-2.1c0.8-0.8,1.3-2,1.5-3.8h-6.6V9.3h9.3c0.1,0.5,0.2,1.1,0.2,1.8
                    c0,2.2-0.5,5-2.4,6.9C15.7,20,13.4,21,10.4,21z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M34.2,14.1c0,3.9-2.9,6.7-6.6,6.7s-6.6-2.8-6.6-6.7s2.9-6.7,6.6-6.7S34.2,10.2,34.2,14.1z M31.4,14.1
                    c0-2.5-1.7-4.1-3.7-4.1c-1.9,0-3.7,1.6-3.7,4.1c0,2.4,1.7,4.1,3.7,4.1C29.6,18.2,31.4,16.5,31.4,14.1z"
                ></path>
                <path
                  fill="#FBBC03"
                  d="M48.4,14.1c0,3.9-2.9,6.7-6.6,6.7s-6.6-2.8-6.6-6.7s2.9-6.7,6.6-6.7S48.4,10.2,48.4,14.1z M45.5,14.1
                    c0-2.5-1.7-4.1-3.7-4.1c-1.9,0-3.7,1.6-3.7,4.1c0,2.4,1.7,4.1,3.7,4.1C43.8,18.2,45.5,16.5,45.5,14.1z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M61.7,7.8V20c0,5-2.7,7-6.1,7c-3.2,0-5-2.2-5.8-4l2.5-1.1c0.4,1.1,1.5,2.4,3.3,2.4c2.1,0,3.4-1.4,3.4-3.9v-1
                    h-0.1c-0.6,0.8-1.8,1.6-3.4,1.6c-3.3,0-6.2-2.9-6.2-6.8s2.9-6.7,6.2-6.7c1.6,0,2.7,0.7,3.4,1.6h0.1V7.8H61.7z M59.2,14.1
                    c0-2.4-1.5-4.1-3.5-4.1c-1.9,0-3.5,1.7-3.5,4.1s1.5,4.1,3.5,4.1C57.7,18.2,59.2,16.5,59.2,14.1z"
                ></path>
                <path fill="#34A853" d="M66.4,1.1v19.8h-2.8V1.1H66.4z"></path>
                <path
                  fill="#EA4335"
                  d="M77.7,16.3l2.2,1.6c-0.7,1.1-2.5,3-5.5,3c-3.7,0-6.5-2.9-6.5-6.7c0-4,2.8-6.7,6.2-6.7c3.4,0,5,2.8,5.6,4.3
                    l0.3,0.7l-8.8,3.7c0.7,1.4,1.7,2,3.2,2S76.9,17.5,77.7,16.3z M70.8,14l5.8-2.5c-0.4-0.8-1.3-1.5-2.4-1.5C72.7,10,70.7,11.3,70.8,14
                    z"
                ></path>
              </svg>
            </div>
            <img className="experience-img" src={google} />
          </div>
          <div className="experience-text-details">
            <h5 className="experience-text-role">Software Engineer</h5>
            <h5 className="experience-text-date"></h5>
            <p className="subTitle experience-text-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus tempore labore saepe?
            </p>
          </div>
        </div>

        {/*Airbnb*/}
        <div
          className="experince-card-div"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="experience-card" data-aos="fade-right">
            <div className="experience-banner"></div>
            <div className="experience-div-company">
              <p
                style={{ height: "29px", width: "100px", padding: "0px" }}
                className="svg"
              >
                Airbnb
              </p>
            </div>
            <img className="experience-img" src={airbnb} alt="airbnb" />
            <div className="experience-text-details">
              <h5 className="experience-text-role">Software Engineer</h5>
              <h5 className="experience-text-date"></h5>
              <p className="subTitle experience-text-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus tempore labore saepe?
              </p>
            </div>
          </div>
        </div>

        {/*Quora*/}
        <div
          className="experince-card-div"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div
            className="experience-card"
            data-aos="fade-right"
            data-aos-duration="15000"
          >
            <div className="experience-banner">
              <div className="experience-blured-div"></div>
              <div className="experience-div-company">
                <svg
                  className="logo-svg"
                  width="512"
                  height="512"
                  viewBox="0 -185 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M72.899 110.5c-4.91-9.664-10.67-19.425-21.906-19.425-2.148 0-4.293.355-6.262 1.254l-3.817-7.64c4.651-3.99 12.168-7.154 21.829-7.154 15.03 0 22.743 7.24 28.867 16.481 3.635-7.89 5.363-18.545 5.363-31.752 0-32.98-10.314-49.915-34.407-49.915-23.741 0-33.999 16.935-33.999 49.915 0 32.807 10.258 49.567 34 49.567 3.773 0 7.19-.415 10.332-1.331Zm5.885 11.51c-5.204 1.395-10.734 2.165-16.218 2.165C30.953 124.175 0 98.95 0 62.265 0 25.23 30.953 0 62.566 0c32.144 0 62.8 25.05 62.8 62.264 0 20.7-9.66 37.522-23.698 48.395 4.536 6.796 9.206 11.31 15.708 11.31 7.096 0 9.958-5.484 10.437-9.785h9.242c.54 5.727-2.325 29.527-28.153 29.527-15.644 0-23.915-9.067-30.118-19.701Zm66.906-31.47V48.13c0-4.83-1.785-6.975-7.332-6.975h-5.906v-11.27h38.587v60.12c0 10.135 5.486 14.604 13.84 14.604 6.855 0 13.713-3.033 17.412-9.958V48.13c0-4.831-1.79-6.976-7.334-6.976h-6.262v-11.27h38.948V92.86c0 6.272 2.324 9.131 9.48 9.131h1.254v11.63l-34.831 5.545V107.18h-.717c-6.738 8.225-16.22 13.775-29.76 13.775-15.21 0-27.38-7.69-27.38-30.415Zm143.347 19.146c13.719 0 18.931-11.935 19.205-35.966.266-23.506-5.486-34.885-19.205-34.885-11.986 0-19.502 11.385-19.502 34.885 0 24.036 7.393 35.966 19.502 35.966Zm0 11.269c-24.81 0-47.181-18.97-47.181-47.235 0-27.735 21.832-46.164 47.18-46.164 26.423 0 47.596 18.783 47.596 46.164 0 28.265-21.173 47.235-47.595 47.235Zm48.394-1.79v-11.271h3.758c9.306 0 10.2-2.683 10.2-10.734V48.13c0-4.83-2.505-6.975-8.229-6.975h-5.01v-11.27h35.364l1.79 18.43h.719c3.937-13.246 14.492-20.224 24.39-20.224 8.17 0 14.55 4.654 14.55 14.08 0 6.559-3.154 13.54-11.983 13.54-7.936 0-9.482-5.371-16.046-5.371-5.842 0-10.378 5.55-10.378 13.716V97.16c0 8.05 1.97 10.734 11.097 10.734h5.187v11.271h-55.41Zm117.73-13.12c11.274 0 15.923-10.675 15.923-21.404v-14.32c-8.228 8.524-27.377 8.824-27.377 24.033 0 7.455 4.418 11.691 11.453 11.691Zm16.463-.061c-4.654 8.945-14.2 14.97-27.556 14.97-15.506 0-25.526-8.235-25.526-22.724 0-29.159 40.614-21.41 52.542-40.73v-2.09c0-14.848-5.845-17.173-12.286-17.173-18.071 0-9.843 19.433-26.483 19.433-7.99 0-11.093-4.823-11.093-10.25 0-10.975 13.123-19.863 37.758-19.863 23.314 0 37.632 6.443 37.632 29.645v37.035c0 5.724 2.089 8.83 7.099 8.83 2.145 0 3.934-.597 5.304-1.552l2.985 7.27c-2.447 3.761-8.95 10.381-21.297 10.381-10.731 0-17.472-5.01-18.368-13.181h-.711Z"
                    fill="#B92B27"
                  />
                </svg>
              </div>

              <img className="experience-img" src={quora} alt="..." />
            </div>
            <div className="experience-text-details">
              <h5 className="experience-text-role">Software Engineer</h5>
              <h5 className="experience-text-date"></h5>
              <p className="subTitle experience-text-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus tempore labore saepe?
              </p>
            </div>
          </div>
        </div>

        {/*Facebook*/}
        <div className="experince-card-div">
          <div
            className="experience-card"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="experience-banner">
              <div className="experience-blured-div"></div>
              <div className="experience-div-company">
                <img
                  src={facebook}
                  className="logo-svg"
                  style={{ width: "127px", height: "auto" }}
                  alt="facebook"
                />
              </div>
              <img
                className="experience-img"
                style={{ background: "black" }}
                src="https://img.icons8.com/fluency/344/meta.png"
                alt="facebook"
              />
            </div>
            <div className="experience-text-details">
              <h5 className="experience-text-role">Software Engineer</h5>
              <h5 className="experience-text-date"></h5>
              <p className="subTitle experience-text-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus tempore labore saepe?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

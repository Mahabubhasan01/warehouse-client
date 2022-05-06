import React from "react";
/* import { useCountUp } from "react-countup";
 */import { Link } from "react-router-dom";
import "./Count.css";

const Count = () => {
  /* const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    ref1: countUpRef,
    start: 0,
    end: 1234567,
    delay: 0,
    duration: 5,
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused or resumed!"),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  }); */
  return (
    <div>
      {/* <div ref={countUpRef} /> */}
      {/*  <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button> */}

      <div className="arrival">
        <div className="container">
          <h1 className="text-center text-2xl mt-5">Overview</h1>
          <div className="hr"></div>
          <div className="row mt-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://clearaction.com/wp-content/uploads/group2-hi5_25902484-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Employee</h3>
                  <h4 className="title"> </h4>
                </div>
                <ul className="social">
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-facebook"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-twitter"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-google-plus"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-linkedin"
                      aria-hidden="true"
                    ></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.jerseyshoremoving.com/wp-content/uploads/2015/04/Moving-Storage-Services-Neptune-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Storage on sold product</h3>
                  <h4 className="title"> </h4>
                </div>
                <ul className="social">
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-facebook"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-twitter"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-google-plus"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-linkedin"
                      aria-hidden="true"
                    ></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://i.ibb.co/vkKHKYK/EFCO-Brochure-Images-2019-5-PUe2019-300x300.jpg"
                    alt=" "
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Deliver on the world</h3>
                  <h4 className="title"> </h4>
                </div>
                <ul className="social">
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-facebook"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-twitter"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-google-plus"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-linkedin"
                      aria-hidden="true"
                    ></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://i.ibb.co/Q9S1Q39/IMG-9873-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="name"> All over outlet</h3>
                  <h4 className="title"> </h4>
                </div>
                <ul className="social">
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-facebook"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-twitter"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-google-plus"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-linkedin"
                      aria-hidden="true"
                    ></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Count;

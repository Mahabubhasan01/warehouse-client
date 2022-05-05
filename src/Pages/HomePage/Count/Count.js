import React from 'react';
import { useCountUp } from 'react-countup';
import { Link } from 'react-router-dom';
import './Count.css'

 const Count = () => {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 1234567,
    delay: 0,
    duration: 5,
    onReset: () => console.log('Resetted!'),
    onUpdate: () => console.log('Updated!'),
    onPauseResume: () => console.log('Paused or resumed!'),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });
  return (
    <div>
      <div ref={countUpRef} />
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>


      <div className="arrival">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img 
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=1027"
                  alt=""
                />
              </div>
              <div className="team-content" ref={countUpRef}>
                <h3 className="name">Michele Miller</h3>
                <h4 className="title">Web Developer</h4>
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
                  src="https://picsum.photos/130/130?image=839"
                  alt=""
                />
              </div>
              <div className="team-content">
                <h3 className="name">Patricia Knott</h3>
                <h4 className="title">Web Developer</h4>
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
                  src="https://picsum.photos/130/130?image=856"
                  alt=" "
                />
              </div>
              <div className="team-content">
                <h3 className="name">Justin Ramos</h3>
                <h4 className="title">Web Developer</h4>
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
                  src="https://picsum.photos/130/130?image=836"
                  alt=""
                />
              </div>
              <div className="team-content">
                <h3 className="name">Mary Huntley</h3>
                <h4 className="title">Web Developer</h4>
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
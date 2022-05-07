import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Profile.css";

const Profile = () => {
  let [user, loading, error] = useAuthState(auth);

  return (
    <div className="profile">
      <div className="profile-box">
        <div className="card border-danger   ">
          <div className="card-header">Hello {user?.displayName}</div>
          <div className="card-body text-danger">
            <h5 className="card-title">{user?.displayName}</h5>
            <p className="card-text">
              <ul>
                <li> Your email {user?.email}</li>
                <li>
                  Your phone no {user ? user?.phoneNumber : "01853452432"}
                </li>
                <li> Jwt have three parts header payload and signature.</li>
                <li>
                  Its secure user single token like script and its maintain
                  individual user or admin.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>Main dashboard</span>
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple active"
            >
              <i className="fas fa-chart-area fa-fw me-3"></i>
              <span>Profile</span>
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-lock fa-fw me-3"></i>
              <span>Password</span>
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-line fa-fw me-3"></i>
              <span>Analytics</span>
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-pie fa-fw me-3"></i>
              <span>SEO</span>
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-bar fa-fw me-3"></i>
              <span>Orders</span>
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-globe fa-fw me-3"></i>
              <span>International</span>
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-building fa-fw me-3"></i>
              <span>Partners</span>
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-calendar fa-fw me-3"></i>
              <span>Calendar</span>
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-users fa-fw me-3"></i>
              <span>Users</span>
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-money-bill fa-fw me-3"></i>
              <span>Sales</span>
            </Link>
          </div>
        </div>
      </nav>

      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <Link className="navbar-brand" to="/">
            <img
              src="https://i.ibb.co/FzfFN76/logo.png"
              style={{ height: "50px", backgroundColor: "black" }}
              alt="MDB Logo"
              loading="lazy"
            />
          </Link>

          <form className="d-none d-md-flex input-group w-auto my-auto">
            <input
              autoComplete="off"
              type="search"
              className="form-control rounded"
              placeholder='Search (ctrl + "/" to focus)'
              style={{ minWidth: "225px" }}
            />
            <span className="input-group-text border-0">
              <i className="fas fa-search"></i>
            </span>
          </form>

          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item dropdown">
              <Link
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    Some news
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another news
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link me-3 me-lg-0" to="/">
                <i className="fas fa-fill-drip"></i>
              </Link>
            </li>

            <li className="nav-item me-3 me-lg-0">
              <Link className="nav-link" to="/">
                <i className="fab fa-github"></i>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                to="/"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="flag-united-kingdom flag m-0"></i>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-united-kingdom flag"></i>English
                    <i className="fa fa-check text-success ms-2"></i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-poland flag"></i>Polski
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-china flag"></i>中文
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-japan flag"></i>日本語
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-germany flag"></i>Deutsch
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-france flag"></i>Français
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-spain flag"></i>Español
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-russia flag"></i>Русский
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-portugal flag"></i>Português
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user?.photoURL}
                  className="rounded-circle"
                  style={{ height: "22px" }}
                  alt="Avatar"
                  loading="lazy"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    My profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Profile;

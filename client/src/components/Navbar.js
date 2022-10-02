import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar(props) {

  let location = useLocation();
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    navigate("/signup");
    props.showAlert("Logged Out!!", "primary");
  };
  return (
    <>
      {!localStorage.getItem("token") ? (
        <></>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/about" ? "active" : ""
                      }`}
                      to="/about"
                    >
                      About
                    </Link></li>
                    <li className="nav-item"><Link
                      className={`nav-link ${
                        location.pathname === "/plan" ? "active" : ""
                      }`}
                      to="/plan"
                    >
                      Plan
                    </Link></li>
                    <li className="nav-item"><Link
                      className={`nav-link ${
                        location.pathname === "/payment" ? "active" : ""
                      }`}
                      to="/payment"
                    >
                      Payment
                    </Link>
                  </li>
                </ul>
                <button className="btn btn-primary mx-1" onClick={handleLogout}>
                  logout
                </button>
              </div>
          </div>
        </nav>
      )}
    </>
  );
}

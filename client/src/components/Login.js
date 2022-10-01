import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Login = (props) => {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // save tha uth and redirect
      localStorage.setItem("role", json.user.role);
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("email", json.user.email);
      navigate("/");
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#1E4C91" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-4">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                <figure class="text-center">
                    <blockquote class="blockquote">
                    <h3>Login to your account</h3>

                    </blockquote>
                  </figure>
                  <div className="form-outline mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={onChange}
                      value={credentials.email}
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      value={credentials.password}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4 ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label mx-2" for="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>

                  <div className="d-grid gap-2">
                    <button className="btn mb-3" type="submit" style={{ backgroundColor: "#1E4C91", color:"white" }}>
                      Login
                    </button>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">New to MyApp?</p>
                    <Link style={{ color: "#508bfc" }} to="/signup">
                      Create new
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

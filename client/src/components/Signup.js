import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Signup = (props) => {
  let navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    const response = await fetch(`http://localhost:5000/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // save tha uth and redirect
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("email", json.user.email);
      navigate("/about");
      props.showAlert("Account Created Succesfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
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
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <figure class="text-center">
                    <blockquote class="blockquote">
                      <h3>Create Account</h3>
                    </blockquote>
                  </figure>

                  <div className="form-outline">
                    <label
                      htmlFor="name"
                      className="form-label"
                      style={{ fontSize: "14px" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      value={credentials.name}
                      onChange={onChange}
                      minLength={3}
                      required
                    />
                  </div>
                  <div className="mb-1">
                    <label
                      htmlFor="email"
                      className="form-label"
                      style={{ fontSize: "14px" }}
                    >
                      Email address
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
                  <div className="mb-1">
                    <label
                      htmlFor="password"
                      className="form-label"
                      style={{ fontSize: "14px" }}
                    >
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
                    <label
                      className="form-check-label mx-2"
                      for="form1Example3"
                    >
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn mb-3"
                      type="submit"
                      style={{ backgroundColor: "#1E4C91", color: "white" }}
                    >
                      Sign Up
                    </button>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Already have an account?</p>
                    <Link style={{ color: "#508bfc" }} to="/login">
                      Login
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

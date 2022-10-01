import React from "react";
import "./HomePage.css";

export const HomePage = () => {
    return (
        <div>

            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                style={{ width: "185px" }}
                                alt="logo"
                            />
                            <h1>Project Maestro</h1>
                            <h2>Project Maestro is a mentoring platform for underprivileged students
                            </h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="/login" className="btn-get-started scrollto">Login</a>
                                <a href="/signup" className="btn-get-started scrollto mx-3">Sign-Up</a>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Plan(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/homepage");
    }
    getUser();
    fetchSubscription();
    // eslint-disable-next-line
  }, []);

  // Separate function to get user details

  async function getUser() {
    const response = await fetch(`http://localhost:5000/api/auth/getUser`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    console.log(data)
    setUserData(data)
    setProfile(data);
  }

  const fetchSubscription = async(req,res) => {
    const response = await fetch(`http://localhost:5000/api/plan/fetchSubscription`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    console.log(data)
  }

  const [userData, setUserData] = useState("");

  return (
    <section className="vh-100" style={{ backgroundColor: "#1E4C91" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-4">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-3">
                <b>Current Plan Details</b> <span class="badge badge-primary text-primary">Active</span> <button type="button" class="btn btn-default align-right">Cancel</button>

                <div className=""><h3>{userData.plan}</h3>
                <h8>{userData.devices}</h8></div>
                <h1><b>{userData.price}</b>/{userData.interval}</h1>
                <Link to ='/about'><button type="button" class="btn btn-default border-primary text-primary mb-2">Change Plan</button></Link>
                <p>Your subscription has started on <b>Jul 11th, 2022</b>and will auto renew on <b>Jul 12th, 2023</b> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
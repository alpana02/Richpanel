import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getUser();
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
    setProfile(data);
  }

  return (
    <section className="vh-100" style={{ backgroundColor: "#1E4C91" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-7 p-3">
                    <h4>Complete Payment</h4>
                    <div id="emailHelp" class="form-text">
                      Enter your credit or Debit card details below
                    </div>
                    <i class="bi bi-credit-card-2-back"></i>
                    <button
                      className="btn mb-3"
                      type="submit"
                      style={{ backgroundColor: "#1E4C91", color: "white" }}
                    >
                      Confirm Payment
                    </button>
                  </div>
                  <div class="col" style={{ backgroundColor: "grey" }}>
                    <table class="table table-sm caption-top">
                      <tbody>
                        <tr>
                          <td>Plan name</td>
                          <td>Basic</td>
                        </tr>
                        <tr>
                          <td>Billing Cycle</td>
                          <td>Monthly</td>
                        </tr>
                        <tr>
                          <td>Plan Price</td>
                          <td>200/mo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

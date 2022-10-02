import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function About(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [yearly, setYearly] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);
  const handleClick = () => {
    setToggleButton(!toggleButton);
    setYearly(!yearly)
    console.log(toggleButton, "value");
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/homepage");
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


  return !yearly ? (
    <div className="container py-6 mt-5">
      <div className="px-5 mt-3">
        <table class="table table-hover table-fixed">
          <thead>
            <tr>
              <th><div className="toggle" onClick={handleClick}>
                  {toggleButton ? (
                    <div className="toggle-left">Monthly</div>
                  ) : (
                    <div className="toggle-right">Yearly</div>
                  )}
                </div></th>
              <th className="text-center">
                <div className="d-flex justify-content-center">
                  <div
                    class="card text-white text-center py-3 px-1"
                    style={{ maxWidth: 120, backgroundColor: "#7893BD" }}
                  >
                    <p></p>
                    <p>&nbsp; &nbsp; Mobile &nbsp; &nbsp;</p>
                  </div>
                </div>
              </th>
              <th>
                <div className="d-flex justify-content-center">
                  <div
                    class="card text-white text-center py-3 px-1"
                    style={{ maxWidth: 120, backgroundColor: "#7893BD" }}
                  >
                    <p></p>
                    <p> &nbsp; &nbsp; &nbsp; Basic &nbsp; &nbsp; &nbsp;</p>
                  </div>
                </div>
              </th>
              <th>
                <div className="d-flex justify-content-center">
                  <div
                    class="card text-white text-center py-3 px-1"
                    style={{ maxWidth: 120, backgroundColor: "#7893BD" }}
                  >
                    <p></p>
                    <p> &nbsp; Standard &nbsp;</p>
                  </div>
                </div>
              </th>
              <th>
                <div className="d-flex justify-content-center">
                  <div
                    class="card text-white text-center py-3 px-1"
                    style={{ maxWidth: 120, backgroundColor: "#7893BD" }}
                  >
                    <p></p>
                    <p> &nbsp; Premium &nbsp; </p>
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">Monthly Price</th>
              <td>
                <div class="text-center">₹ 100</div>
              </td>
              <td>
                <div class="text-center">₹ 300</div>
              </td>
              <td>
                <div class="text-center">₹ 500</div>
              </td>
              <td>
                <div class="text-center">₹ 700</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Video Quality</th>
              <td>
                <div class="text-center">Good</div>
              </td>
              <td>
                <div class="text-center">Good</div>
              </td>
              <td>
                <div class="text-center">Better</div>
              </td>
              <td>
                <div class="text-center">Best</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Resolution</th>
              <td>
                <div class="text-center">480p</div>
              </td>
              <td>
                <div class="text-center">480p</div>
              </td>
              <td>
                <div class="text-center">1080p</div>
              </td>
              <td>
                <div class="text-center">4K+HDR</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Devices you can use to watch</th>
              <td>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div class="text-center">Phone</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Tablet</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div class="text-center">Phone</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Tablet</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Computer</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">TV</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div class="text-center">Phone</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Tablet</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Computer</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">TV</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div class="text-center">Phone</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Tablet</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Computer</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">TV</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
          <Link to ='/payment'>
            <div className="d-grid gap-2">
              
              <button
                className="btn mb-3"
                type="submit"
                style={{ backgroundColor: "#1E4C91", color: "white" }}
              >
                Next
              </button>
            </div>
            </Link>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  ):
  (
    <div className="container py-6 mt-5">
      <div className="px-5 mt-3">
        <table class="table table-hover table-fixed">
          <thead>
            <tr>
              <th><div className="toggle" onClick={handleClick}>
                  {toggleButton ? (
                    <div className="toggle-left">Monthly</div>
                  ) : (
                    <div className="toggle-right">Yearly</div>
                  )}
                </div></th>
              <th className="text-center">
                <div className="d-flex justify-content-center">
                  <div
                    class="card text-white text-center py-3 px-1"
                    style={{ maxWidth: 120, backgroundColor: "#7893BD" }}
                  >
                    <p></p>
                    <p>&nbsp; &nbsp; Mobile &nbsp; &nbsp;</p>
                  </div>
                </div>
              </th>
              <th>
                <div className="d-flex justify-content-center">
                  <div
                    class="card text-white text-center py-3 px-1"
                    style={{ maxWidth: 120, backgroundColor: "#7893BD" }}
                  >
                    <p></p>
                    <p> &nbsp; &nbsp; &nbsp; Basic &nbsp; &nbsp; &nbsp;</p>
                  </div>
                </div>
              </th>
              <th>
                <div className="d-flex justify-content-center">
                  <div
                    class="card text-white text-center py-3 px-1"
                    style={{ maxWidth: 120, backgroundColor: "#7893BD" }}
                  >
                    <p></p>
                    <p> &nbsp; Standard &nbsp;</p>
                  </div>
                </div>
              </th>
              <th>
                <div className="d-flex justify-content-center">
                  <div
                    class="card text-white text-center py-3 px-1"
                    style={{ maxWidth: 120, backgroundColor: "#7893BD" }}
                  >
                    <p></p>
                    <p> &nbsp; Premium &nbsp; </p>
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">Yearly Price</th>
              <td>
                <div class="text-center">₹ 1000</div>
              </td>
              <td>
                <div class="text-center">₹ 3000</div>
              </td>
              <td>
                <div class="text-center">₹ 5000</div>
              </td>
              <td>
                <div class="text-center">₹ 7000</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Video Quality</th>
              <td>
                <div class="text-center">Good</div>
              </td>
              <td>
                <div class="text-center">Good</div>
              </td>
              <td>
                <div class="text-center">Better</div>
              </td>
              <td>
                <div class="text-center">Best</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Resolution</th>
              <td>
                <div class="text-center">480p</div>
              </td>
              <td>
                <div class="text-center">480p</div>
              </td>
              <td>
                <div class="text-center">1080p</div>
              </td>
              <td>
                <div class="text-center">4K+HDR</div>
              </td>
            </tr>
            <tr>
              <th scope="row">Devices you can use to watch</th>
              <td>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div class="text-center">Phone</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Tablet</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div class="text-center">Phone</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Tablet</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Computer</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">TV</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div class="text-center">Phone</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Tablet</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Computer</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">TV</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div class="text-center">Phone</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Tablet</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">Computer</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-center">TV</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
          <Link to ='/payment'>
            <div className="d-grid gap-2">
              <button
                className="btn mb-3"
                type="submit"
                style={{ backgroundColor: "#1E4C91", color: "white" }}
              >
                Next
              </button>
            </div>
            </Link>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  )
  ;

  // return

}
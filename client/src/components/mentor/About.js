import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function About(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/homepage");
    }
    if (localStorage.getItem("role") === "mentee") {
      navigate("*");
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
<div className="px-5">
<h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>
                    About {profile.name}
                  </h2>
                  <table class="table table-hover table-fixed">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th style={{backgroundColor:"blue"}}>Mobile</th>
                        <th>Basic</th>
                        <th>Standard</th>
                        <th>Premium</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <th scope="row">Monthly Plan</th>
                        <td>Monthly Plan</td>
                        <td>Video Quality</td>
                        <td>Resolution</td>
                        <td>Devices you can use to watch</td>
                      </tr>
                      <tr>
                        <th scope="row">Video Quality</th>
                        <td>Video Quality</td>
                        <td>Joplin</td>
                        <td>Poland</td>
                        <td>Warsaw</td>
                      </tr>
                      <tr>
                        <th scope="row">Resolution</th>
                        <td>Resolution</td>
                        <td>Winogrand</td>
                        <td>Germany</td>
                        <td>Berlin</td>
                      </tr>
                      <tr>
                        <th scope="row">Devices you can use to watch</th>
                        <td>Devices you can use to watch</td>
                        <td>Smith</td>
                        <td>USA</td>
                        <td>San Francisco</td>
                      </tr>
                    </tbody>
                  </table>
</div>
                  
                 

  );
}

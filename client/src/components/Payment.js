import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);

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

  return (
    <div className="container py-6 mt-5">
    </div>
  );
}

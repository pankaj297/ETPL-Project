import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const RegistrationForm = () => {

    
    const [name, setName] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {


      e.preventDefault();
      // Perform client-side validation
      try {
        if (email && password) {
          console.log(email, password);
          await axios.post(
            "https://etplnode.onrender.com/api/v1/users/createUser",
            {
              name,
              dateOfBirth,
              email,
              password,
            }
          );
          alert("Account Created");
          navigate("/LoginForm");
        }
      } catch (error) {
        alert(error.response.data.message);
        console.log(error);
      }
    };

  return (
    <>
      <div className="customPadding rounded-2 ">
        <h2 className=" mb-3">User Registration</h2>
        <img className="card-img mb-2 " src="image/person-circle.svg" alt="" />
        <div className="authForm">
          <form onSubmit={handleSubmit}>
            <div className="formInputs">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
              <input
                type="date"
                name="name"
                value={dateOfBirth}
                onChange={(e) => setdateOfBirth(e.target.value)}
                dateformat="YYYY-MM-DD"
                placeholder="Date of Birth"
                required
              />

              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                autoComplete="true"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <Link to="/LoginForm" className="log-btn">
            Log In
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;

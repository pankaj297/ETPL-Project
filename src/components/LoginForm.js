import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () =>{

   
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
     e.preventDefault();
     // Perform client-side validation
     try {
       if (name && password) {
         console.log(name, password);
         await axios.post(
           "https://etplnode.onrender.com/api/v1/users/loginUser",
           {
             name,
             password,
           }
         );
         alert("Login Success");
         navigate("/Tableditels");
       }
     } catch (error) {
       alert(error.response.data.message);
       console.log(error);
     }
   };


  return (
    <>
      <div className="customPadding rounded-2 ">
        <h2 className=" mb-3">Log In</h2>
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
                type="password"
                name="password"
                autoComplete="true"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

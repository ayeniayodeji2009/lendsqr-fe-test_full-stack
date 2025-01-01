import React, { useEffect, useState } from 'react';
import { /*BrowserRouter as Router, Route, Link, , Switch, useParams */useNavigate} from "react-router-dom";
// import { useData } from '../../context_API/DataContext'; //Context API for sharing useSate data Globally
import axios from 'axios';
import { environ } from "../../context_API/baseURLmode";
import "./authentication.scss"

function LoginAdmin() {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  // const { setAdminData } = useData()


  console.log(environ.currentBackendAppEnvironmentStatus)
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${environ.baseURL}/login`, {
        adminName: adminName,
        password: password
      });
      setMessage(response.data.message);

      localStorage.setItem("adminData", JSON.stringify(response.data.adminData))
      // setAdminData(response.data.adminData)

      
      setLoginSuccess(true)
    } catch (error: any) {
      setMessage(error.response.data.error);
    }
  };



  useEffect(() => {
      if (loginSuccess) {
          const timer = setTimeout(() => {
              navigate('/dashboard');
          }, 5000);

          // Clean up the timeout if the component unmounts before navigation
          return () => clearTimeout(timer);
      }
  }, [loginSuccess, navigate]);


  const registerAdmin = () => {
    navigate('/register')
  }

//   const navigateToDashboard = () => {
//     navigate('/dashboard'); // from const navigate above
//   };

//   if (message === "Invalid username or password") {
//      return navigateToDashboard
//   }

  return (
    <div className="login_admin_container">
      {/* <h1>Login and Register</h1> */}
      <input
        type="text"
        placeholder="Username"
        value={adminName}
        onChange={(e) => setAdminName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className='login_admin_container_forget_password_link'>FORGET PASSWORD ?</p>
      <br />
      <button onClick={handleLogin}>LOG IN</button>
      {message === "Login successful" ? <p className="login_admin_container_status" style={{color: "green"}}>{message}</p> : <p className="login_admin_container_status" style={{color: "red"}}>{message}</p>}
      <br />
      <br />
      <p>You don't have an account yet ?. <strong onClick={()=> registerAdmin()}>Register here</strong></p>
    </div>
  );
}
//onClick={() => navigateToCreateUser()
export default LoginAdmin;

import React, { useEffect, useState, ChangeEvent} from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../components/Logo';
import NavBack from '../../components/NavBack';
import axios from 'axios';

const RegisterAdmin: React.FC = () => {
  const [adminName, setAdminName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [picture, setPicture] = useState<string>('');
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [gender, setGender] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        adminName: adminName,
        password: password,
        email: email,
        picture: picture,
        gender: gender
      });
      setMessage(response.data.message);
    } catch (error: any) {
      setMessage(error.response?.data?.error || 'Registration failed');
    }
  };

  // Picture upload handler
  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setPicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (message === "User registered successfully") {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, navigate]);

  return (
    <div className="App">
      <Logo />
      <h1>Admin Registration</h1>
      <NavBack> Back to Login</NavBack>
      <input
        type="text"
        placeholder="Admin name"
        value={adminName}
        onChange={(e) => setAdminName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <div>
        <h3>Input Image URL or Upload Image from computer below:</h3>
        <input
          type="text"
          placeholder="Picture"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
        <br />
        <br />
        <input type="file" accept="image/*" onChange={handleUpload} />
        <br />
        {image && (
          <>
            <img src={image as string} alt="Uploaded or Captured" style={{ width: "20%", height: "20%" }} />
            <p>{image as string}</p>
          </>
        )}
      </div>
      <br />
      <br />
      <input
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleRegister}>Register</button>
      {message === "User registered successfully" ? (
        <p style={{ color: "green" }}>{message}</p>
      ) : (
        <p style={{ color: "red" }}>{message}</p>
      )}
    </div>
  );
};

export default RegisterAdmin;


























// import React, { useEffect, useState } from 'react';
// import { /*BrowserRouter as Router, Route, Link, , Switch, useParams */useNavigate} from "react-router-dom";
// import Logo from '../../components/Logo';
// import NavBack from '../../components/NavBack';
// import axios from 'axios';

// function RegisterAdmin() {
//   const [adminName, setAdminName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('')
//   const [picture, setPicture] = useState('')
//   const [image, setImage] = useState(null);
//   const [gender, setGender] = useState('')
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();


//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/register', {
//         adminName: adminName,
//         password: password,
//         email: email,
//         picture: picture,
//         gender: gender
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response.data.error);
//     }
//   };


//   // Picture 
//     const handleUpload = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setImage(reader.result);
//           setPicture(reader.result)
//         };
//         reader.readAsDataURL(file);
//       }
//     };
  
  

//   useEffect(()=> {
//     if (message === "User registered successfully"){
//       const timer = setTimeout(() => {
//           navigate('/');
//       }, 5000);

//       // Clean up the timeout if the component unmounts before navigation
//       return () => clearTimeout(timer);
//       }
//   }, [message, navigate])

//   return (
//     <div className="App">
//       <Logo />
//       <h1>Admin Registration</h1>
//       <NavBack> Back to Login</NavBack>
//       <input
//         type="text"
//         placeholder="Admin name"
//         value={adminName}
//         onChange={(e) => setAdminName(e.target.value)}
//       />
//       <br />
//       <br />
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <br />
//       {/*<input
//         type="text"
//         placeholder="Picture"
//         value={picture}
//         onChange={(e) => setPicture(e.target.value)}
//       />*/}
//       <div>
//       <h3>Input Image URL or Upload Image from computer below;</h3>
//       <input
//         type="text"
//         placeholder="Picture"
//         value={picture}
//         onChange={(e) => setPicture(e.target.value)}
//       />
//       <br />
//       <br />
//       <input type="file" accept="image/*" onChange={handleUpload} />
//       {/* <input type="file" accept="image/*" capture="camera" onChange={handleCapture} /> */}
//       <br />
//       {image && <><img src={image} alt="Uploaded or Captured" style={{ width: "20%", height: "20%" }} /><p>{image}</p></>}
//       </div>
//       <br />
//       <br />
//       <input
//         type="text"
//         placeholder="Gender"
//         value={gender}
//         onChange={(e) => setGender(e.target.value)}
//       />
//       <br />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <br />
//       <button onClick={handleRegister}>Register</button>
//       {/* <button onClick={handleLogin}>Login</button> */}
//       {message === "User registered successfully" ? <p style={{color: "green"}}>{message}</p> : <p style={{color: "red"}}>{message}</p>}
//     </div>
//   );
// }


// export default RegisterAdmin;








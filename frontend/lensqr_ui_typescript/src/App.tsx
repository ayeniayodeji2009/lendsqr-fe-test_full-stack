import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import UserDetails from './pages/user_details/UserDetails';
import CreateUser from './pages/user_CRUD_page/CreateUser';
import UpdateUserDetails from './pages/user_CRUD_page/UpdateUserDetails';
import DeleteUser from './pages/user_CRUD_page/DeleteUser';
import './App.scss';
import RegisterAdmin from './pages/authentication/RegisterAdmin';

const App: React.FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create_user" element={<CreateUser />} />
          <Route path="/update_user_details" element={<UpdateUserDetails />} />
          <Route path="/user_details" element={<UserDetails />} />
          <Route path="/delete_user" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;












































































// import React, {/* useEffect, useRef, Children, useState, useReducer*/ } from 'react';
// // import { ReactDOM } from 'react-dom';
// import { BrowserRouter, Routes, Route, /*, Switch, useParams*/ } from "react-router-dom";
// //import axios from 'axios';
// import Dashboard from './pages/dashboard/Dashboard';
// import Login from './pages/login/Login';
// // import UserPage from './pages/user/UserPage';
// import UserDetails from './pages/user_details/UserDetails';
// import CreateUser from './pages/user_CRUD_page/CreateUser'
// import UpdateUserDetails from './pages/user_CRUD_page/UpdateUserDetails'
// import DeleteUser from './pages/user_CRUD_page/DeleteUser'



// import './App.scss';
// import RegisterAdmin from './pages/authentication/RegisterAdmin';




// export default function App () {

//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <Routes>
          
//             <Route path="/" exact element={<Login />} />
//             <Route path="/register"  element={<RegisterAdmin />} />
//             <Route path="/dashboard"  element={<Dashboard />} />
//             <Route path="/create_user"  element={<CreateUser />} />
//             <Route path="/update_user_details"  element={<UpdateUserDetails />} />
//             <Route path="/user_details"  element={<UserDetails />} />
//             <Route path="/delete_user"  element={<DeleteUser />} />
          
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }


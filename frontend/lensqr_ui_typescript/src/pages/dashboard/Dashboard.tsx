import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

import Header from "../../components/Header";
import SideBarInside from "../../components/SideBarInside";
import SideBarOutside from "../../components/SideBarOutside";
import Users from "../../components/Users";
import HeaderPersonal from "../../components/HeaderPersonal";

import "./dashboard.scss";

// Define the type for adminData, you can extend it with more fields as necessary
// interface AdminData {
//   name?: string;
//   email?: string;
//   [key: string]: any; // In case there are more fields you haven't listed
// }

interface AdminData {
  picture: string;
  adminName: string;
}

const Dashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Parse adminData from localStorage and cast to AdminData type
  const adminData: AdminData = JSON.parse(
    localStorage.getItem("adminData") || "null"
  );
  console.log(adminData); // Logging admin data for debugging

  return (
    <div className="dashboard_container">
      <div className="dashboard_container_header">
        {/* Pass adminData to the Header component */}
        <Header adminData={adminData} />
      </div>
      <div className="dashboard_container_body">
        {/* Conditionally rendering SideBarInside or SideBarOutside */}
        {isVisible ? (
          <SideBarInside isVisible={isVisible} setIsVisible={setIsVisible} />
        ) : (
          <SideBarOutside isVisible={isVisible} setIsVisible={setIsVisible} />
        )}
        <Users />
      </div>
      {/* Passing adminData to HeaderPersonal with position prop */}
      <HeaderPersonal adminData={adminData} position="mobileview_down" />
    </div>
  );
};

export default Dashboard;


































































// import React, { useState /*, useRef, useEffect ,createContext, useContext*/ } from "react"
// // import { /*BrowserRouter as Router, Route, */Link, /*, Switch, useParams */useNavigate} from "react-router-dom";
// // import ReactDOM from 'react-dom';
// // import ReactPaginate from 'react-paginate';
// // import axios from 'axios';

// import Header from "../../components/Header"
// import SideBarInside from "../../components/SideBarInside"
// import SideBarOutside from "../../components/SideBarOutside"
// import Users from "../../components/Users"
// import HeaderPersonal from "../../components/HeaderPersonal"

// // import { useData } from '../../context_API/DataContext'; //Context API for sharing useSate data Globally
// // import table_icon from "../../images/filter-results-button.png"
// // import user_pic from "../../images/users.png"
// // import active_users_pic from "../../images/active_users.png"
// // import loan_users_pic from "../../images/loan_users.png"
// // import saving_users_pic from "../../images/saving_users.png"
// import "./dashboard.scss"






// export default function Dashboard() {
//     const [isVisible, setIsVisible] = useState(false);
//     const adminData = JSON.parse(localStorage.getItem("adminData"))
//     console.log(adminData) // Save this data to local storage for admin

    

//     return (
//         <div className="dashboard_container">
//             <div className="dashboard_container_header">
//                 <Header adminData={adminData} />
//             </div>
//             <div className="dashboard_container_body">
//                 {/* <button onClick={() => setHideSidebar(!hideSidebar)}>Open sidebar</button>
//                 {hideSidebar && (<SideBar />)} */}

//                 {isVisible ? (
//                     <>
//                         <SideBarInside isVisible={isVisible} setIsVisible={setIsVisible} />
//                     </>
//                 ) : (
//                     <SideBarOutside isVisible={isVisible} setIsVisible={setIsVisible}/>
//                 )}
//                 <Users />
//             </div>
//             <HeaderPersonal adminData={adminData} position={"mobileview_down"} /> 
//         </div>
//     )
// }

















































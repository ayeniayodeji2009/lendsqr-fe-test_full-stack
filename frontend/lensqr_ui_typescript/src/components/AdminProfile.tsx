import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/style_components.scss";

interface AdminProfileProps {
  element: any; // Define a more specific type if possible
  onClose: () => void;
}

const AdminProfile: React.FC<AdminProfileProps> = ({ element, onClose }) => {
  const navigate = useNavigate();

  const logOut = () => {
    const navigateToLogOut = () => {
      navigate('/'); // from const navigate above
    };

    navigateToLogOut();
    localStorage.removeItem("adminData");
    onClose(); // Call onClose after logging out
  };

  return (
    <div className="profile_popup-container">
      <div className="profile_popup">
        <div className="popup-content">    
          <p>Setting</p>
          <p onClick={logOut}>Log Out</p> {/* Added click handler directly */}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;


















// import { /*BrowserRouter as Router, Route, Link, , Switch, useParams */useNavigate} from "react-router-dom";
// import "./style/style_components.scss"


// export default function AdminProfile({ element, onClose }) {

//     // const [showPopup, setShowPopup] = useState(true);

//     const navigate = useNavigate();

//     const logOut = () => {
//         const navigateToLogOut = () => {
//             navigate('/'); // from const navigate above
//         };

//         navigateToLogOut()
//         localStorage.removeItem("adminData");
//     }
    
//     return (
//         <>
//             <div className="profile_popup-container">
//                 <div className="profile_popup">
//                 <div className="popup-content">    
//                     <p>Setting</p>
//                     <p onClick={() => logOut()}>Log Out</p> {/** */}
//                     {/* <button onClick={onClose}>Close</button> */}
//                 </div>
//                 </div>
//             </div>
//         </>
//     )
// }
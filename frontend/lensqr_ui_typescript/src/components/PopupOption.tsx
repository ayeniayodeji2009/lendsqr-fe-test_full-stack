import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import view from "../images/menu_icons/np_view.png";
import del from "../images/menu_icons/np_delete.png";
import user from "../images/menu_icons/np_user.png";
import "./style/style_components.scss";

interface PopupOptionProps {
    element: any; // Adjust the type if you have a specific type for 'element'
    onClose: () => void;
}

const PopupOption: React.FC<PopupOptionProps> = ({ element, onClose }) => {
    const navigate = useNavigate();
    const popupRef = useRef<HTMLDivElement>(null);

    const navigateToUserDetails = () => {
        navigate('/user_details', { state: element });
    };

    const navigateToUpdateUser = () => {
        navigate('/update_user_details', { state: element });
    };

    const navigateToDeleteUser = () => {
        navigate('/delete_user', { state: element });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="popup-container">
            <div className="popup" ref={popupRef}>
                <div className="popup-content">
                    <p onClick={navigateToUserDetails}><img src={view} alt="view" />View Details</p>
                    <p><img src={del} alt="delete" />Blacklist User</p>
                    <p><img src={user} alt="user" />Activate User</p>
                    <p onClick={navigateToUpdateUser}>Update User's Detail</p>
                    <p onClick={navigateToDeleteUser}>Delete User</p>
                </div>
            </div>
        </div>
    );
};

export default PopupOption;







































































































// import React, { /*useState,*/ useRef, useEffect /*,createContext, useContext*/ } from "react"
// import { /*BrowserRouter as Router, Route, Link, Switch, useParams */useNavigate} from "react-router-dom";
// import view from "../images/menu_icons/np_view.png"
// import del from "../images/menu_icons/np_delete.png"
// import user from "../images/menu_icons/np_user.png"
// import "./style/style_components.scss"



// export default function PopupOption ({ element, onClose }) {
//     const navigate = useNavigate();

//     const navigateToUserDetails = () => {
//         navigate('/user_details', { state: element }); // from const navigate above
//     };


//     const navigateToUpdateUser = () => {
//         navigate('/update_user_details', { state: element }); // from const navigate above
//     };


//     const navigateToDeleteUser = () => {
//       navigate('/delete_user', { state: element }); // from const navigate above
//     };


//     // const [showPopup, setShowPopup] = useState(true);
//     const popupRef = useRef(null);
  
//     useEffect(() => {
//       // Add event listener to handle clicks outside the popup container
//       const handleClickOutside = (event) => {
//         if (popupRef.current && !popupRef.current.contains(event.target)) {
//           onClose();
//         }
//       };
  
//       // Add event listener when the component mounts
//       document.addEventListener('mousedown', handleClickOutside);
  
//       // Clean up the event listener when the component unmounts
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }, [onClose]);
  
//     return (
//       <div className="popup-container">
//         <div className="popup" ref={popupRef}>
//           <div className="popup-content">
//             {/* <h2>{element.userName}</h2>
//             <p>{element.status}</p> */}
//             <p onClick={() => navigateToUserDetails()}><img src={view} alt="view" />View Details</p>
//             <p><img src={del} alt="delete" />Blacklist User</p>
//             <p><img src={user} alt="user" />Activate User</p>
//             <p onClick={() => navigateToUpdateUser()}>Update User's Detail</p>
//             <p onClick={() => navigateToDeleteUser()}>Delete User</p>
//             {/* <button onClick={onClose}>Close</button> */}
//           </div>
//         </div>
//       </div>
//     );
//   };
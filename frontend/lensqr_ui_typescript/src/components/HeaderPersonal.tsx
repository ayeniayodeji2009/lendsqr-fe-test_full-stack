import React, { useState } from "react";
import AdminProfile from "./AdminProfile";
import bell_pic from "../images/bell.png";
import "./style/style_components.scss";

interface AdminData {
  picture: string;
  adminName: string;
}

interface HeaderPersonalProps {
  adminData: AdminData;
  position: string;
}

const HeaderPersonal: React.FC<HeaderPersonalProps> = ({ adminData, position }) => {
  const [openAdminProfile, setOpenAdminProfile] = useState(false);
  const [selectedElement, setSelectedElement] = useState<any>(null); // Adjust 'any' if AdminProfile has specific types for the element

  return (
    <div className={`header_personal  ${position}`}>
      <div className="rep_icon"><u>Doc</u></div> 
      <div className="rep_icon"><img src={bell_pic} alt="bell" /></div>
      <img src={adminData.picture} width={"10%"} alt="profile" className="profile_pic" />
      
      {openAdminProfile ? (
        <>
          <div className="rep_icon" onClick={() => setOpenAdminProfile(false)}>
            {adminData.adminName} &#11165;
          </div>
          <AdminProfile element={selectedElement} onClose={() => setSelectedElement(null)} />
        </>
      ) : (
        <div className="rep_icon" onClick={() => setOpenAdminProfile(true)}>
          {adminData.adminName} &#11167;
        </div>
      )}
    </div>
  );
};

export default HeaderPersonal;




























































// import React, { useState /*, useRef, useEffect ,createContext, useContext*/ } from "react"
// import AdminProfile from "./AdminProfile"
// import bell_pic from "../images/bell.png"
// import "./style/style_components.scss"


// export default function HeaderPersonal({adminData, position}) {
//     // `https://th.bing.com/th/id/R.2fc6ecdf7989040501034d7005f2678d?rik=9YXZ4S4tY%2bm2%2bQ&pid=ImgRaw&r=0&sres=1&sresct=1`
//     const [openAdminProfile, setOpenAdminProfile] = useState(false);
//     // console.log("profile - ", openAdminProfile)
//     const [selectedElement, setSelectedElement] = useState(null);


//     return (
//         <div className={`header_personal  ${position}`}>
//             <div className="rep_icon"><u>Doc</u></div> 
//             <div className="rep_icon"><img src={bell_pic} alt={"bell"}/></div>
//             <img src={adminData.picture} width={"10%"} alt="" className="profile_pic" />{/*<div className="rep_icon"></div>*/}
//             {openAdminProfile ? (
//                 <>
//                     <div className="rep_icon" onClick={()=> setOpenAdminProfile(false)}> {adminData.adminName}  &#11165; </div> 
//                     <AdminProfile element={selectedElement} onClose={() => setSelectedElement(null)} />
//                 </>
//             ) : (
//                 <div className="rep_icon" onClick={()=> setOpenAdminProfile(true)}> {adminData.adminName}  &#11167; </div>
//             )}
//         </div>
//     )
// }
import React, { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import SideBarInside from "../../components/SideBarInside";
import SideBarOutside from "../../components/SideBarOutside";
import HeaderPersonal from "../../components/HeaderPersonal";
import NavBack from "../../components/NavBack";
import "./userDetails.scss";

// Define types for the data used in the component
interface UserDetailsProps {
  personalInfo: {
    picture: string;
    userName: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    resident: string;
  };
  education_and_employment: {
    eduQualification: string;
    employmentStatus: string;
    sector: string;
    durationOfEmployment: string;
    officialEmail: string;
    income: number;
    loanPayment: string;
  };
  socialMedia: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor1: Guarantor;
  guarantor2: Guarantor;
  document: string;
  bankDetails: string;
  loan: number;
  saving: string;
  appAndSystem: string;
  tierStar: number;
  id: string;
  customerCode: string;
}

interface Guarantor {
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
}

// interface AdminData {
//   [key: string]: any; // Define structure for `adminData` if available
// }

interface AdminData {
  picture: string;
  adminName: string;
}

const adminData: AdminData = JSON.parse(localStorage.getItem("adminData") || "{}");

export default function UserDetailsPage() {
  const [isVisible, setIsVisible] = useState(false);

  // Get the user data passed via router location state
  const location = useLocation();
  const allDataForUser = location.state as UserDetailsProps;

  return (
    <div className="dashboard_container">
      <div className="dashboard_container_header">
        <Header adminData={adminData} />
      </div>
      <div className="dashboard_container_body">
        {isVisible ? (
          <SideBarInside isVisible={isVisible} setIsVisible={setIsVisible} />
        ) : (
          <SideBarOutside isVisible={isVisible} setIsVisible={setIsVisible} />
        )}
        <User propsA={allDataForUser} />
      </div>
      <HeaderPersonal adminData={adminData} position={"mobileview_down"} />
    </div>
  );
}

interface UserProps {
  propsA: UserDetailsProps;
}

function User({ propsA }: UserProps) {
  const [linkData, setLinkData] = useState<string>("General Details");

  return (
    <div className="users_container">
      <UserTitle />
      <UserDetailHead propsB={propsA} setLinkData={setLinkData} />
      <UserDetailBody propsB={propsA} linkData={linkData} />
    </div>
  );
}

function UserTitle() {
  return (
    <div className="users_container_title">
      <div className="users_container_nav">
        <NavBack>Back to Users</NavBack>
      </div>
      <div className="users_container_title_child">
        <h1>Users Details</h1>
        <div className="users_container_btn">
          <button className="blacklist">BLACKLIST USER</button>
          <button className="activate">ACTIVATE USER</button>
        </div>
      </div>
    </div>
  );
}

interface UserDetailHeadProps {
  propsB: UserDetailsProps;
  setLinkData: (value: string) => void;
}

function UserDetailHead({ propsB, setLinkData }: UserDetailHeadProps) {
  const { id, customerCode, tierStar, personalInfo, loan } = propsB;
  const [currentHead, setCurrentHead] = useState<string>("General Details");

  const userData = [
    { id: 1, userHeaderNav: "General Details", content: personalInfo },
    { id: 2, userHeaderNav: "Document", content: propsB.document },
    { id: 3, userHeaderNav: "Bank Details", content: propsB.bankDetails },
    { id: 4, userHeaderNav: "Loan", content: propsB.loan },
    { id: 5, userHeaderNav: "Savings", content: propsB.saving },
    { id: 6, userHeaderNav: "App and System", content: propsB.appAndSystem },
  ];

  const displayTierStar = (rateNum: number) => {
    return "⭐".repeat(rateNum);
  };

  return (
    <div className="user_detail_highlight_container">
      <div className="user_datail_intro">
        <img src={personalInfo.picture} alt="" className="profile_pic" />
        <div className="user_datail_intro_child">
          <h1>{personalInfo.userName}</h1>
          <p>{customerCode}</p>
        </div>
        <div className="vertical_line"></div>
        <div className="user_datail_intro_child">
          <p>User's Tier</p>
          <span>{displayTierStar(tierStar)}</span>
        </div>
        <div className="vertical_line"></div>
        <div className="user_datail_intro_child">
          <h1>&#8358;{loan.toLocaleString()}.00</h1>
          <p>{id}/providus Bank</p>
        </div>
      </div>
      <div className="user_detail_nav_container">
        {userData.map((item) => (
          <div
            key={item.id}
            className={`user_detail_nav ${item.userHeaderNav === currentHead ? "active" : ""}`}
            onClick={() => {
              setLinkData(item.userHeaderNav);
              setCurrentHead(item.userHeaderNav);
            }}
          >
            <p>{item.userHeaderNav}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface UserDetailBodyProps {
  propsB: UserDetailsProps;
  linkData: string;
}

function UserDetailBody({ propsB, linkData }: UserDetailBodyProps) {
  const { personalInfo, education_and_employment, socialMedia, guarantor1, guarantor2 } = propsB;

  return (
    <div className="user_datail_container">
      {linkData === "General Details" && (
        <Details>
          <div className="user_datail_container_header">
            <h3>Personal Information</h3>
          </div>
          <div className="user_datail_container_body">
            <div>
              <p>FULL NAME</p>
              <h5>{personalInfo.fullName}</h5>
            </div>
            <div>
              <p>PHONE NUMBER</p>
              <h5>{personalInfo.phoneNumber}</h5>
            </div>
            <div>
              <p>EMAIL ADDRESS</p>
              <h5>{personalInfo.email}</h5>
            </div>
            <div>
              <p>BVN</p>
              <h5>{personalInfo.bvn}</h5>
            </div>
            <div>
              <p>GENDER</p>
              <h5>{personalInfo.gender}</h5>
            </div>
            <div>
              <p>Marital Status</p>
              <h5>{personalInfo.maritalStatus}</h5>
            </div>
            <div>
              <p>Children</p>
              <h5>{personalInfo.children}</h5>
            </div>
            <div>
              <p>TYPE OF RESIDENT</p>
              <h5>{personalInfo.resident}</h5>
            </div>
          </div>
          <div className="user_datail_container_header">
            <h3>Education and Employment</h3>
          </div>
          <div className="user_datail_container_body">
            <div>
              <p>LEVEL OF EDUCATION</p>
              <h5>{education_and_employment.eduQualification}</h5>
            </div>
            <div>
              <p>EMPLOYMENT STATUS</p>
              <h5>{education_and_employment.employmentStatus}</h5>
            </div>
            <div>
              <p>SECTOR OF EMPLOYMENT</p>
              <h5>{education_and_employment.sector}</h5>
            </div>
            <div>
              <p>DURATION OF EMPLOYMENT</p>
              <h5>{education_and_employment.durationOfEmployment} year</h5>
            </div>
            <div>
              <p>OFFICE EMAIL</p>
              <h5>{education_and_employment.officialEmail}</h5>
            </div>
            <div>
              <p>MONTHLY INCOME</p>
              <h5>
                &#8358;{education_and_employment.income.toLocaleString()}.00 - &#8358;
                {(education_and_employment.income * 2).toLocaleString()}.00
              </h5>
            </div>
            <div>
              <p>LOAN REPAYMENT</p>
              <h5>&#8358;{education_and_employment.loanPayment}</h5>
            </div>
          </div>
          <div className="user_datail_container_header">
            <h3>Socials</h3>
          </div>
          <div className="user_datail_container_body">
            <div>
              <p>TWITTER</p>
              <h5>{socialMedia.twitter}</h5>
            </div>
            <div>
              <p>FACEBOOK</p>
              <h5>{socialMedia.facebook}</h5>
            </div>
            <div>
              <p>INSTAGRAM</p>
              <h5>{socialMedia.instagram}</h5>
            </div>
          </div>
          <div className="user_datail_container_header">
            <h3>Guarantor</h3>
          </div>
          <div className="user_datail_container_body">
            <div>
              <p>FULL NAME</p>
              <h5>{guarantor1.fullName}</h5>
            </div>
            <div>
              <p>PHONE NUMBER</p>
              <h5>{guarantor1.phoneNumber}</h5>
            </div>
            <div>
              <p>EMAIL ADDRESS</p>
              <h5>{guarantor1.email}</h5>
            </div>
            <div>
              <p>RELATIONSHIP</p>
              <h5>{guarantor1.relationship}</h5>
            </div>
          </div>
          <div className="user_datail_container_body">
            <div>
              <p>FULL NAME</p>
              <h5>{guarantor2.fullName}</h5>
            </div>
            <div>
              <p>PHONE NUMBER</p>
              <h5>{guarantor2.phoneNumber}</h5>
            </div>
            <div>
              <p>EMAIL ADDRESS</p>
              <h5>{guarantor2.email}</h5>
            </div>
            <div>
              <p>RELATIONSHIP</p>
              <h5>{guarantor2.relationship}</h5>
            </div>
          </div>
        </Details>
      )}
      {linkData === "Document" && (
        <>
          <h1>Document</h1>
          <p>{propsB.document}</p>
        </>
      )}
      {linkData === "Bank Details" && (
        <>
          <h1>Bank Details</h1>
          <p>{propsB.bankDetails}</p>
        </>
      )}
      {linkData === "Loan" && (
        <>
          <h1>Loan</h1>
          <p>{propsB.loan}</p>
        </>
      )}
      {linkData === "Savings" && (
        <>
          <h1>Savings</h1>
          <p>{propsB.saving}</p>
        </>
      )}
      {linkData === "App and System" && (
        <>
          <h1>App and System</h1>
          <p>{propsB.appAndSystem}</p>
        </>
      )}
    </div>
  );
}


interface DetailsProps {
    children: ReactNode;
  }
  
  const Details: React.FC<DetailsProps> = ({ children }) => {
    return <>{children}</>;
  };

// const Details: React.FC = ({ children }) => {
//   return <>{children}</>;
// };












































































































































































// import React, { useState, /*useRef, useEffect*/ } from "react"
// import { /*BrowserRouter as Router, Route, Link, Switch, useParams useNavigate,*/ useLocation} from "react-router-dom";
// // import Logo from "../../components/Logo";
// import Header from "../../components/Header"
// import SideBarInside from "../../components/SideBarInside"
// import SideBarOutside from "../../components/SideBarOutside";
// // import Users from "../../components/Users"
// import HeaderPersonal from "../../components/HeaderPersonal"
// import NavBack from "../../components/NavBack"
// import "./userDetails.scss"



// const adminData = JSON.parse(localStorage.getItem("adminData"))

// export default function UserDetailsPage() {
//     const [isVisible, setIsVisible] = useState(false);


//     // users Props recieved from dashboard by using useLocation in router
//     const location = useLocation();
//     const allDataForUser = location.state;

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
//                 <User propsA={allDataForUser} />
//             </div>
//             <HeaderPersonal adminData={adminData} position={"mobileview_down"} />
//         </div>
//     )
// }



// function User(propsB) {
//     // const [userUpdatedData, setUserUpdatedData] = useState(null)
//     const [linkData, setLinkData] = useState("General Details");
//     // console.log(propsB.propsA)
//     // console.log(propsB.propsA.userName)
//     return (
//         <div className="users_container">
//             <UserTitle />
//             <UserDetailHead propsB={propsB} setLinkData={setLinkData} />
//             <UserDetailBody propsB={propsB} linkData={linkData} />
//         </div>
//     )
// }


// function UserTitle() {
//     // const navigation = useNavigate();

//     return (
//         <div className="users_container_title">
//             <div className="users_container_nav">
//                 <NavBack> Back to Users</NavBack>
//             </div>
//             <div className="users_container_title_child">
//                 <h1>Users Details</h1>
//                 <div className="users_container_btn">
//                     <button className="blacklist">BLACKLIST USER</button>
//                     <button className="activate">ACTIVATE USER</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function UserDetailHead({propsB, setLinkData}) {
//     // For header
//     // console.log(propsB.propsA)
//     const {id, customerCode, tierStar} = propsB.propsA


//     // For Body Content
//     const {personalInfo, education_and_employment, socialMedia, guarantor1, guarantor2, document, bankDetails, loan, saving, appAndSystem} = propsB.propsA
//     // console.log(propA)
//     // console.log(propsC.propsB.propsA)
//     const [currentHead, setCurrentHead] = useState("General Details");

//     // tierStar
//     function displayTierStar(rateNum) {
//         if (rateNum === 1){
//             return "⭐"
//         } else if (rateNum === 2){
//             return "⭐ ⭐"
//         } else if (rateNum === 3){
//             return "⭐ ⭐ ⭐"
//         } else if (rateNum === 4){
//             return "⭐ ⭐ ⭐ ⭐"
//         } else if (rateNum === 5){
//             return "⭐ ⭐ ⭐ ⭐ ⭐"
//         } else {
//             return ""
//         }
//     }

  

//     // const userDetailNav = ["General Details", "Document", "Bank Details", "Loan", "Savings", "App and System"]
//     const userData = [
//         {
//             id: 1,
//             userHeaderNav: "General Details",
//             content: {personalInfo, education_and_employment, socialMedia, guarantor1, guarantor2}
//         },
//         {
//             id: 2,
//             userHeaderNav: "Document",
//             content: document
//         },
//         {
//             id: 3,
//             userHeaderNav: "Bank Details",
//             content: bankDetails,
//         },
//         {
//             id: 4,
//             userHeaderNav: "Loan",
//             content:  loan,
//         },
//         {
//             id: 5,
//             userHeaderNav: "Savings",
//             content: saving,
//         },
//         {
//             id: 6,
//             userHeaderNav: "App and System",
//             content: appAndSystem,
//         },
//     ]

//     return (
//         <div className="user_detail_highlight_container">
//             <div className="user_datail_intro">
//                 <img src={personalInfo.picture} width={"20%"} alt="" className="profile_pic" />{/*<div className="rep_icon"></div>*/}
//                 <div className="user_datail_intro_child">
//                     <h1>{personalInfo.userName}</h1>
//                     <p>{customerCode}</p>
//                 </div>
//                 <div className= "vertical_line"></div>
//                 <div className="user_datail_intro_child">
//                     <br />
//                     <p>User's Tier</p>
//                     <span>{tierStar} {displayTierStar(tierStar)}</span>
//                 </div>
//                 <div className= "vertical_line"></div>
//                 <div className="user_datail_intro_child">
//                     <h1>&#8358;{loan.toLocaleString()}.00</h1>
//                     <p>{id}/providus Bank</p>
//                 </div>
//             </div>
//             <div className="user_detail_nav_container">
//                 {userData.map((item, index) => (
//                         <div
//                         key={item.id}
//                         className={`user_detail_nav ${item.userHeaderNav === currentHead ? 'active' : ''}`}
//                         onClick={() => {setLinkData(item.userHeaderNav); setCurrentHead(item.userHeaderNav)}}>
//                         <p>{item.userHeaderNav}</p>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     )
// }





// function UserDetailBody({propsB, linkData}) {
//     const {personalInfo, education_and_employment, socialMedia, guarantor1, guarantor2, bankDetails, appAndSystem, loan, saving, document} = propsB.propsA
//     console.log(linkData)
//     // console.log(propA)
//     // console.log(propsC.propsB.propsA)
// //    console.log(userUpdatedData)
//     return (
//         <div className="user_datail_container">
//             {linkData === "General Details" && (
//                     <Details>
//                         <div className="user_datail_container_header">
//                             <h3>Personal Information</h3>
//                         </div>
//                         <div className="user_datail_container_body">
//                             <div>
//                                 <p>FULL NAME</p>
//                                 <h5>{personalInfo.fullName}</h5>
//                             </div>
//                             <div>
//                                 <p>PHONE NUMBER</p>
//                                 <h5>{personalInfo.phoneNumber}</h5>
//                             </div>
//                             <div>
//                                 <p>EMAIL ADDRESS</p>
//                                 <h5>{personalInfo.email}</h5>
//                             </div>
//                             <div>
//                                 <p>BVN</p>
//                                 <h5>{personalInfo.bvn}</h5>
//                             </div>
//                             <div>
//                                 <p>GENDER</p>
//                                 <h5>{personalInfo.gender}</h5>
//                             </div>
//                             <div>
//                                 <p>Marital Status</p>
//                                 <h5>{personalInfo.maritalStatus}</h5>
//                             </div>
//                             <div>
//                                 <p>Children</p>
//                                 <h5>{personalInfo.children}</h5>
//                             </div>
//                             <div>
//                                 <p>TYPE OF RESIDENT</p>
//                                 <h5>{personalInfo.resident}</h5>
//                             </div>
//                         </div>
//                         <div className="user_datail_container_header">
//                             <h3>Education and Employment</h3>
//                         </div>
//                         <div className="user_datail_container_body">
//                             <div>
//                                 <p>LEVEL OF EDUCATION</p>
//                                 <h5>{education_and_employment.eduQualification}</h5>
//                             </div>
//                             <div>
//                                 <p>EMPLOYMENT STATUS</p>
//                                 <h5>{education_and_employment.employmentStatus}</h5>
//                             </div>
//                             <div>
//                                 <p>SECTOR OF EMPLOYMENT</p>
//                                 <h5>{education_and_employment.sector}</h5>
//                             </div>
//                             <div>
//                                 <p>DURATION OF EMPLOYMENT</p>
//                                 <h5>{education_and_employment.durationOfEmployment} year</h5>
//                             </div>
//                             <div>
//                                 <p>OFFICE EMAIL</p>
//                                 <h5>{education_and_employment.officialEmail}</h5>
//                             </div>
//                             <div>
//                                 <p>MONTHLY INCOME</p>
//                                 <h5>&#8358;{education_and_employment.income.toLocaleString()}.00 - &#8358;{(education_and_employment.income * 2).toLocaleString()}.00</h5>
//                             </div>
//                             <div>
//                                 <p>LOAN REPAYMENT</p>
//                                 <h5>&#8358;{education_and_employment.loanPayment}</h5>
//                             </div>
//                         </div>
//                         <div className="user_datail_container_header">
//                             <h3>Socials</h3>
//                         </div>
//                         <div className="user_datail_container_body">
//                             <div>
//                                 <p>TWITTER</p>
//                                 <h5>{socialMedia.twitter}</h5>
//                             </div>
//                             <div>
//                                 <p>FACEBOOK</p>
//                                 <h5>{socialMedia.facebook}</h5>
//                             </div>
//                             <div>
//                                 <p>INSTAGRAM</p>
//                                 <h5>{socialMedia.instagram}</h5>
//                             </div>
//                         </div>
//                         <div className="user_datail_container_header">
//                             <h3>Guarantor</h3>
//                         </div>
//                         <div className="user_datail_container_body">
//                             <div>
//                                 <p>FULL NAME</p>
//                                 <h5>{guarantor1.fullName}</h5>
//                             </div>
//                             <div>
//                                 <p>PHONE NUMBER</p>
//                                 <h5>{guarantor1.phoneNumber}</h5>
//                             </div>
//                             <div>
//                                 <p>EMAIL ADDRESS</p>
//                                 <h5>{guarantor1.email}</h5>
//                             </div>
//                             <div>
//                                 <p>RELATIONSHIP</p>
//                                 <h5>{guarantor1.relationship}</h5>
//                             </div>
//                         </div>
//                         <div className="user_datail_container_body">
//                             <div>
//                                 <p>FULL NAME</p>
//                                 <h5>{guarantor2.fullName}</h5>
//                             </div>
//                             <div>
//                                 <p>PHONE NUMBER</p>
//                                 <h5>{guarantor2.phoneNumber}</h5>
//                             </div>
//                             <div>
//                                 <p>EMAIL ADDRESS</p>
//                                 <h5>{guarantor2.email}</h5>
//                             </div>
//                             <div>
//                                 <p>RELATIONSHIP</p>
//                                 <h5>{guarantor2.relationship}</h5>
//                             </div>
//                         </div>
//                     </Details>
//             )}
//             {linkData === "Document" && (
//                     <>
//                         <h1>Document</h1>
//                         <p>{document}</p>
//                     </>
//             )}
//             {linkData === "Bank Details" && (
//                     <>
//                         <h1>Bank Details</h1>
//                         <p>{bankDetails}</p>
//                     </>
//             )}
//             {linkData === "Loan" && (
//                     <>
//                         <h1>Loan</h1>
//                         <p>{loan}</p>
//                     </>
//             )}
//             {linkData === "Savings" && (
//                     <>
//                         <h1>Savings</h1>
//                         <p>{saving}</p>
//                     </>
//             )}
//             {linkData === "App and System" && (
//                     <>
//                         <h1>App and System</h1>
//                         <p>{appAndSystem}</p>
//                     </>
//             )}
            
//         </div>
//     )
// }


// function Details({children}) {
//     return ( children )
// }

         
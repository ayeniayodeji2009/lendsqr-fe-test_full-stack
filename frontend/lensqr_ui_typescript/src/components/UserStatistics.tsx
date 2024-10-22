import React from "react";
import user_pic from "../images/users.png";
import active_users_pic from "../images/active_users.png";
import loan_users_pic from "../images/loan_users.png";
import saving_users_pic from "../images/saving_users.png";
import "./style/style_components.scss";

// Define the type for the props
interface UserStatisticsProps {
  numUsers: number;
  numActiveUsers: number;
  numUserLoan: number;
  numUserSaving: number;
}

// Functional component with typed props
const UserStatistics: React.FC<UserStatisticsProps> = ({ numUsers, numActiveUsers, numUserLoan, numUserSaving }) => {
  return (
    <div className="users_statistics_container">
      <div className="rep_stats">
        <img src={user_pic} alt="users" />
        <p>USERS</p>
        <h1>{numUsers}</h1>
      </div>
      <div className="rep_stats">
        <img src={active_users_pic} alt="active users" />
        <p>ACTIVE USERS</p>
        <h1>{numActiveUsers}</h1>
      </div>
      <div className="rep_stats">
        <img src={loan_users_pic} alt="loan users" />
        <p>USERS WITH LOAN</p>
        <h1>{numUserLoan}</h1>
      </div>
      <div className="rep_stats">
        <img src={saving_users_pic} alt="saving users" />
        <p>USERS WITH SAVINGS</p>
        <h1>{numUserSaving}</h1>
      </div>
    </div>
  );
};

export default UserStatistics;


































// import user_pic from "../images/users.png"
// import active_users_pic from "../images/active_users.png"
// import loan_users_pic from "../images/loan_users.png"
// import saving_users_pic from "../images/saving_users.png"
// import "./style/style_components.scss"




// //user_pic, active_users_pic, loan_users_pic, saving_users_pic
// export default function UserStatistics({numUsers, numActiveUsers, numUserLoan, numUserSaving}) {
//     return (
//         <div className="users_statistics_container">
//             <div className="rep_stats">
//                 <img src={user_pic} alt={"users"} />
//                 <p>USERS</p>
//                 <h1>{numUsers}</h1>
//             </div>
//             <div className="rep_stats">
//                 <img src={active_users_pic} alt={"active users"} />
//                 <p>ACTIVE USERS</p>
//                 <h1>{numActiveUsers}</h1>
//             </div>
//             <div className="rep_stats">
//                 <img src={loan_users_pic} alt={"loan users"} />
//                 <p>USERS WITH LOAN</p>
//                 <h1>{numUserLoan}</h1>
//             </div>
//             <div className="rep_stats">
//                 <img src={saving_users_pic} alt={"saving users"} />
//                 <p>USERS WITH SAVINGS</p>
//                 <h1>{numUserSaving}</h1>
//             </div>
//         </div>
//     )
// }
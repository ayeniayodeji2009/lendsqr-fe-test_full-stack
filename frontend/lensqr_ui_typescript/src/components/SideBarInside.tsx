import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import "./style/style_components.scss";
import briefcase from "../images/menu_icons/briefcase 1.png";
import home from "../images/menu_icons/home 1.png";
import user_friend from "../images/menu_icons/user-friends 1.png";
import user_1 from "../images/menu_icons/users 1.png";
import sack_1 from "../images/menu_icons/sack 1.png";
import handshake from "../images/menu_icons/handshake-regular 1.png";
import piggy_bank from "../images/menu_icons/piggy-bank 1.png";
import borrower from "../images/menu_icons/Group 104.png";
import user_check from "../images/menu_icons/user-check 1.png";
import user_times from "../images/menu_icons/user-times 1.png";
import bank from "../images/menu_icons/np_bank_148501_000000 1.png";
import coins from "../images/menu_icons/coins-solid 1.png";
import transact from "../images/menu_icons/icon (1).png";
import galaxy from "../images/menu_icons/galaxy 1.png";
import user_cog from "../images/menu_icons/user-cog 1.png";
import scroll from "../images/menu_icons/scroll 1.png";
import chart_bar from "../images/menu_icons/chart-bar 2.png";
import slider from "../images/menu_icons/sliders-h 1.png";
import badge from "../images/menu_icons/badge-percent 1.png";
import clip_board from "../images/menu_icons/clipboard-list 1.png";

interface SideBarInsideProps {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarInside: React.FC<SideBarInsideProps> = ({ isVisible, setIsVisible }) => {
    const navigate = useNavigate();

    const navigateToCreateUser = () => {
        navigate('/create_user');
    };

    return (
        <div className="sidebarInside_container">
            <div className="sidebarInside_toggle_btn" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? (<span>&#88;</span>) : (<span>&#9776;</span>)}
            </div>
            <h4><img src={briefcase} alt="briefcase" /> Switch Organization V</h4>
            <p><img src={home} alt="home" /> Dashboard</p>
            <h4>Customer</h4>
            <p onClick={navigateToCreateUser}><img src={user_friend} alt="user_friend" /> Create a User</p>
            <p><img src={user_friend} alt="user_friend" /> Users</p>
            <p><img src={user_1} alt="user_1" /> Guarantors</p>
            <p><img src={sack_1} alt="sack_1" /> Loans</p>
            <p><img src={handshake} alt="handshake" /> Decision Models</p>
            <p><img src={piggy_bank} alt="piggy_bank" /> Saving</p>
            <p><img src={borrower} alt="borrower" /> Loan Requests</p>
            <p><img src={user_check} alt="user_check" /> Whitelist</p>
            <p><img src={user_times} alt="user_times" /> Karma</p>

            <h4>BUSINESS</h4>
            <p><img src={briefcase} alt="briefcase" /> Organization</p>
            <p><img src={borrower} alt="borrower" /> Loan Product</p>
            <p><img src={bank} alt="bank" /> Saving Products</p>
            <p><img src={coins} alt="coins" /> Fees and Charges</p>
            <p><img src={transact} alt="transact" /> Transactions</p>
            <p><img src={galaxy} alt="galaxy" /> Services</p>
            <p><img src={user_cog} alt="user_cog" /> Services Account</p>
            <p><img src={scroll} alt="scroll" /> Settlements</p>
            <p><img src={chart_bar} alt="chart_bar" /> Reports</p>

            <h4>SETTINGS</h4>
            <p><img src={slider} alt="slider" /> Preferences</p>
            <p><img src={badge} alt="badge" /> Fees and Pricing</p>
            <p><img src={clip_board} alt="clip_board" /> Audit Logs</p>

            <p><Link to="/" style={{ textDecoration: "none" }}>Log out</Link></p>
        </div>
    );
}

export default SideBarInside;






























// import { /*BrowserRouter as Router, Route, */Link, /*, Switch, useParams */useNavigate} from "react-router-dom";
// import "./style/style_components.scss"
// import briefcase from "../images/menu_icons/briefcase 1.png"
// import home from "../images/menu_icons/home 1.png"
// import user_friend from "../images/menu_icons/user-friends 1.png"
// import user_1 from "../images/menu_icons/users 1.png"
// import sack_1 from "../images/menu_icons/sack 1.png"
// import handshake from "../images/menu_icons/handshake-regular 1.png"
// import piggy_bank from "../images/menu_icons/piggy-bank 1.png"
// import borrower from "../images/menu_icons/Group 104.png"
// import user_check from "../images/menu_icons/user-check 1.png"
// import user_times from "../images/menu_icons/user-times 1.png"
// import bank from "../images/menu_icons/np_bank_148501_000000 1.png"
// import coins from "../images/menu_icons/coins-solid 1.png"
// import transact from "../images/menu_icons/icon (1).png"
// import galaxy from "../images/menu_icons/galaxy 1.png"
// import user_cog from "../images/menu_icons/user-cog 1.png"
// import scroll from "../images/menu_icons/scroll 1.png"
// import chart_bar from "../images/menu_icons/chart-bar 2.png"
// import slider from "../images/menu_icons/sliders-h 1.png"
// import badge from "../images/menu_icons/badge-percent 1.png"
// import clip_board from "../images/menu_icons/clipboard-list 1.png" 




// export default function SideBarInside({isVisible, setIsVisible}) {
//     const navigate = useNavigate();
//     const navigateToCreateUser = () => {
//         navigate('/create_user'); // from const navigate above
//     };


//     return (
//         <div className="sidebarInside_container" >
//             <div className="sidebarInside_toggle_btn" onClick={() => setIsVisible(!isVisible)}> {(isVisible) ?  (<span>&#88;</span>) : (<span>&#9776;</span>)}</div>
//             <h4><img src={briefcase}  alt="briefcase" />    Switch Organization V</h4>
//             <p><img src={home}  alt="home" />   Dashboard</p>
//             <h4>Customer</h4>
//             <p onClick={() => navigateToCreateUser()}><img src={user_friend} alt="user_friend" /> Create a User</p>
//             <p><img src={user_friend} alt="user_friend" />  Users</p>
//             <p><img src={user_1} alt="user_1" />  Guarantors</p>
//             <p><img src={sack_1} alt="sack_1" />   Loans</p>
//             <p><img src={handshake} alt="handshake" />   Decision Models</p>
//             <p><img src={piggy_bank} alt="piggy_bank" />   Saving</p>
//             <p><img src={borrower} alt="borrower" />   Loan Requests</p>
//             <p><img src={user_check} alt="user_check" />    Whitelist</p>
//             <p><img src={user_times} alt="user_times" />    Karma</p>

//             <h4>BUSINESS</h4>
//             <p><img src={briefcase} alt="briefcase" />    Organization</p>
//             <p><img src={borrower} alt="borrower" />    Loan Product</p>
//             <p><img src={bank} alt="bank" />    Saving Products</p>
//             <p><img src={coins} alt="coins" />    Fees and Charges</p>
//             <p><img src={transact} alt="transact" />    Transactions</p>
//             <p><img src={galaxy} alt="galaxy" />    Services</p>
//             <p><img src={user_cog} alt="user_cog" />    Services Account</p>
//             <p><img src={scroll} alt="scroll" />    Settlements</p>
//             <p><img src={chart_bar} alt="chart_bar" />    Reports</p>

//             <h4>SETTINGS</h4>
//             <p><img src={slider} alt="slider" />    Preferences</p>
//             <p><img src={badge} alt="badge" />    Fees and Pricing</p>
//             <p><img src={clip_board} alt="clip_board" />    Audit Logs</p>

//             <p><Link to="/" style={{textDecoration: "none"}}>Log out</Link></p>
//         </div>
//     )
// }
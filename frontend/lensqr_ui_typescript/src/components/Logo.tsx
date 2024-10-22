import logo from "../images/logo.png"
import { /*BrowserRouter as Router, Route, Link, Switch, useParams */useNavigate} from "react-router-dom";
// import logo1 from "../images/filter-results-button.png"
import "./style/style_components.scss"



export default function Logo() {
    const navigate = useNavigate();

    const navToHome = () => {
        const navigateToLogOut = () => {
            navigate('/'); // from const navigate above
        };

        navigateToLogOut()
        localStorage.removeItem("adminData");
    }

    return (
            <div onClick={()=> navToHome()}><img src={logo} alt="logo" /></div>
    )
}
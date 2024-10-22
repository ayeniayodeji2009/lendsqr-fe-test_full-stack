import Logo from "../../components/Logo";
import { /*BrowserRouter as Router, Route, Link , Switch, useParams */} from "react-router-dom";
import LoginAdmin from "../authentication/LoginAdmin";
import lenqr_pic from "../../images/lensqr_welcome_pic.png"
import "./login.scss"


export default function Login() {

    return (
        <div className="login_container">
            <div className="logo_conainer_header">
                <Logo />
            </div>
            <div className="login_container_body">
                <Picture />
                <LoginForm />
            </div>
        </div>
    )
}



function Picture() {
    return (
        <>
            {/* <img src={"https://s3-alpha-sig.figma.com/img/d764/31ad/31054d654669dbf388b2a9ec503f6495?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iNJR8WNL2lSgHf8iEu2wiwopCVIOGvlEAXFAS8Q9r5Fcf4GNIgsQf76js8jhCsxHM2N3eO6F4h29hRFPgOB8GFlEysAWgq2Dxy-FiJpNHvBai62bWzmrJT8gbq3WM2KJKD45lVH4DCSpQa7oUDjDcY0bxQIYjSAkQpht22k3Q6g4WacLhyF0EouH6ya1znuyygl8ssmp0NB3kizUkNq5yumOznprl~rCKVBDoBzElSnksllqm60b7vEUuVE3pg1-PpRzVh0UjnstO4aoOhn6f2GInikQ7MseeYmLd5QUqAcl9C3brvvlExfy0lzGLUy1XmEvzhqULanZ-7tiYHVy8w__"} alt={"lensqr welcome"} className={"welcome_pic"} style={{ width: '50%', height: '50%'}}/> */}
            <img src={lenqr_pic} alt="lensqr welcome" className="welcome_pic" style={{ width: '50%', height: '50%'}} />
        </>
    )
}

function LoginForm() {
    return (
        <div className="login_form_container">
            {/* <main>
                <nav>
                    <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/userdetailpage">User Details Page</Link></li>
                    </ul>
                </nav>
            </main> */}
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
            {/* <input placeholder="Email" />
            <br />
            <input placeholder="Password" /> */}
            <LoginAdmin />
        </div>
    )
}
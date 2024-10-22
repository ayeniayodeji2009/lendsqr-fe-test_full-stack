import React from "react";
import { useNavigate } from "react-router-dom";

interface NavBackProps {
  children: React.ReactNode;
}

const NavBack: React.FC<NavBackProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <p onClick={() => navigate(-1)}>
      <span style={{ fontSize: "180%" }}>&larr;</span>
      {children}
    </p>
  );
};

export default NavBack;










// import { /*BrowserRouter as Router, Route, Link, Switch, useParams , useLocation */useNavigate} from "react-router-dom";


// export default function NavBack({children}) {
//     const navigation = useNavigate();


//     return (
//         <p onClick={() => navigation(-1)}><span style={{fontSize: "180%"}}>&larr;</span>{children}</p>
//     )
// }

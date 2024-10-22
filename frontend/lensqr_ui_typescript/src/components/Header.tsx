import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import HeaderPersonal from "./HeaderPersonal";
import { useData } from '../context_API/DataContext'; // Context API for sharing useState data Globally
import "./style/style_components.scss";

interface AdminData {
  picture: string;
  adminName: string;
}

interface HeaderProps {
  adminData: AdminData;
}

const Header: React.FC<HeaderProps> = ({ adminData }) => {
  const { setSearchValue } = useData(); // Destructuring data from Context API because it's only a variable that is needed here

  return (
    <div className="header_container">
      <div className="header_general">
        <Logo />
        <Search setSearchQuery={setSearchValue} />
      </div>
      <HeaderPersonal adminData={adminData} position={"webview_up"} />
    </div>
  );
};

export default Header;





























































// import Logo from "./Logo";
// import Search from "./Search";
// import HeaderPersonal from "./HeaderPersonal"
// import { useData } from '../context_API/DataContext'; //Context API for sharing useSate data Globally
// import "./style/style_components.scss"



// export default function Header({adminData}) {
//     const { setSearchValue } = useData(); // Destructuring data from Context API because its only a variable that is needed here
//     // const [searchValue, setSearchValue] = useData() // alt to the above line

//     return (
//         <div className="header_container">
//             <div className="header_general">
//                 <Logo />
//                 <Search setSearchQuery={setSearchValue} />
//             </div>
//            <HeaderPersonal adminData={adminData} position={"webview_up"} />
//         </div>
//     )
// }
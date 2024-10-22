import React from 'react';
import "./style/style_components.scss";

interface SideBarOutsideProps {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarOutside: React.FC<SideBarOutsideProps> = ({ isVisible, setIsVisible }) => {
    return (
        <div className="sidebarOutside_toggle_btn" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? (<span>&#88;</span>) : (<span>&#9776;</span>)}
        </div>
    );
}

export default SideBarOutside;


























// import "./style/style_components.scss"



// export default function SideBarOutside({isVisible, setIsVisible}) {

//     return (
//         <div className="sidebarOutside_toggle_btn" onClick={() => setIsVisible(!isVisible)}>
//             {isVisible ? (<span>&#88;</span>) : (<span>&#9776;</span>)}
//         </div>
//     )
// }
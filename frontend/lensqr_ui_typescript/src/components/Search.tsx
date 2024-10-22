import React, { useState } from "react";
import search_pic from "../images/seach_icon.png";
import "./style/style_components.scss";

interface SearchProps {
    setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchQuery }) => {
    const [query, setQuery] = useState<string>("");

    const handleSearch = () => {
        setSearchQuery(query);
    };

    return (
        <div className="search_container">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search customers by First name..."
            />
            <button onClick={handleSearch}>
                <img src={search_pic} alt="search" />
            </button>
        </div>
    );
};

export default Search;





















// import React, { useState/*, useRef, useEffect ,createContext, useContext*/ } from "react"
// import search_pic from "../images/seach_icon.png"
// import "./style/style_components.scss"




// export default function Search({ setSearchQuery }) {
//     const [query, setQuery] = useState("");


//     const handleSearch = () => {
//       setSearchQuery(query);
//     };
  
//     return (
//       <div className="search_container">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search customers by First name..."
//         />
//         <button onClick={handleSearch}><img src={search_pic} alt={"search"} /></button>
//       </div>
//     );
// }
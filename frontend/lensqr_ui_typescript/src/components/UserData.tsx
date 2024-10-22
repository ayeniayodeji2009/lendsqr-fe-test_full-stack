import React, { useState, useEffect } from "react";
import axios from 'axios';
import PopupOption from "./PopupOption";
import table_icon from "../images/filter-results-button.png";
import "./style/style_components.scss";

// Define the type for customer data and props
interface CustomerData {
    id: number;
    organization: string;
    personalInfo: {
        userName: string;
        email: string;
        phoneNumber: string;
    };
    dateJoined: string;
    status: string;
    loan: number;
    saving: number;
}

interface UserDataProps {
    total: number;
    page: number;
    size: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    search: string;
    setNumUsers: React.Dispatch<React.SetStateAction<number>>;
    setNumActiveUsers: React.Dispatch<React.SetStateAction<number>>;
    setNumUserLoan: React.Dispatch<React.SetStateAction<number>>;
    setNumUserSaving: React.Dispatch<React.SetStateAction<number>>;
    openUserFilter: boolean;
    setOpenUserFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const tableHeader = ["organization", "username", "email", "phone number", "date joined", "status"];

const UserData: React.FC<UserDataProps> = ({
    total,
    page,
    size,
    setTotal,
    search,
    setNumUsers,
    setNumActiveUsers,
    setNumUserLoan,
    setNumUserSaving,
    openUserFilter,
    setOpenUserFilter
}) => {
    const [selectedElement, setSelectedElement] = useState<CustomerData | null>(null);
    const [customersData, setCustomersData] = useState<CustomerData[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/customers', {
                    params: { page, size, search }
                });

                setCustomersData(response.data.customers);
                setTotal(response.data.total);

                // Statistics
                const statsResponse = await axios.get('http://127.0.0.1:5000/api/customers');
                const userData = statsResponse.data.customers;

                // Num of Users
                setNumUsers(userData.length);

                // Num of Active users
                const countActiveUsers = userData.filter((item: CustomerData) => item.status === "active").length;
                setNumActiveUsers(countActiveUsers);

                // Num of Users with Loan
                const countLoanUsers = userData.filter((item: CustomerData) => item.loan > 0).length;
                setNumUserLoan(countLoanUsers);

                // Num of Users with Savings
                const countSavingUsers = userData.filter((item: CustomerData) => item.saving > 0).length;
                setNumUserSaving(countSavingUsers);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchItems();
    }, [page, size, search, setNumUsers, setNumActiveUsers, setNumUserLoan, setNumUserSaving, setTotal]);

    //status color
    const colorStatus = (status: string) => {
        if (status === "active") {
            return {
                color: "green",
                backgroundColor: "rgb(150, 238, 187)",
                borderRadius: "10px",
                padding: "5px",
                margin: "0px"
            };
        } else if (status === "inactive") {
            return {
                color: "red",
                backgroundColor: "rgb(250, 159, 147)",
                borderRadius: "10px",
                padding: "5px",
                margin: "0px"
            };
        } else if (status === "pending") {
            return {
                color: "rgb(175, 158, 3)",
                backgroundColor: "yellow",
                borderRadius: "10px",
                padding: "5px",
                margin: "0px"
            };
        }
    };

    return (
        <div className="user_data_container">
            <table>
                <thead>
                    <tr>
                        {tableHeader.map((header, id) => (
                            <th key={id}>
                                <span className="table_Header" onClick={() => setOpenUserFilter(!openUserFilter)}>
                                    {header.toUpperCase()}
                                    <img src={table_icon} alt="table icon" className="table_icon_pic" />
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {customersData.map(data => (
                        <tr key={data.id}>
                            <td>{data.organization}</td>
                            <td>{data.personalInfo.userName}</td>
                            <td>{data.personalInfo.email}</td>
                            <td>{data.personalInfo.phoneNumber}</td>
                            <td>{data.dateJoined}</td>
                            <td>
                                <span style={colorStatus(data.status)} className={"style_status"}>
                                    {data.status}
                                </span>
                            </td>
                            <td onClick={() => setSelectedElement(data)}>
                                <strong>:</strong>
                                {selectedElement && selectedElement.id === data.id && (
                                    <PopupOption element={selectedElement} onClose={() => setSelectedElement(null)} />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserData;






































































































// import React, { useState, useEffect/*, useRef,  ,createContext, useContext*/ } from "react"
// import axios from 'axios';
// import PopupOption from "./PopupOption"
// import table_icon from "../images/filter-results-button.png"
// import "./style/style_components.scss"



// const tableHeader = ["organization ", "usename ", "email ", "phone number ", "date joined ", "status "]
    
// export default function UserData({total, page ,size, setTotal, search, setNumUsers, setNumActiveUsers, setNumUserLoan, setNumUserSaving, openUserFilter, setOpenUserFilter}) {
    
//     const [selectedElement, setSelectedElement] = useState(null);
//     const [customersData, setCustomersData] = useState([]);





    

//     useEffect(() => {
//     const fetchItems = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:5000/api/customers', {
//                 params: { page, size, search }
//             });

//             setCustomersData(response.data.customers);
//             // setItems(response.data.items);
//             setTotal(response.data.total);


//             // Statistics
//             const statsResponse = await axios.get('http://127.0.0.1:5000/api/customers');

//             const userData = statsResponse.data.customers
//             // Num of Users
//             // console.log(userData.length)
//             setNumUsers(userData.length)

//             // Num of Active users
//             var countUser = 0
//             userData.forEach(item => item.status === "active" && (countUser = countUser + 1))
//             // console.log(countUser)
//             setNumActiveUsers(countUser)

//             // Num of Users with Loan
//             var countLoan = 0
//             userData.forEach(item => item.loan > 0 && (countLoan = countLoan + 1))
//             // console.log(countLoan)
//             setNumUserLoan(countLoan)
            

//              // Num of Users with Savings
//              var countSaving = 0
//              userData.forEach(item => item.saving > 0 && (countSaving = countSaving + 1))
//             //  console.log(countSaving)
//              setNumUserSaving(countSaving)
            
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     // Function call
//     fetchItems();
//     }, [page, search, setNumActiveUsers, setNumUserLoan, setNumUserSaving, setNumUsers, setTotal, size]); //Take note of setTotal its a stateHook getter

//     console.log(customersData)


   

//     //status color
//     function colorStatus(status) {
//         if (status === "active") {
//             return {
//                 color: "green",
//                 backgroundColor: "rgb(150, 238, 187)",
//                 borderRadius: "10px",
//                 padding: "5px",
//                 margin: "0px"
//             }
//         } else if (status === "inactive") {
//             return {
//                 color: "red",
//                 backgroundColor: "rgb(250, 159, 147)",
//                 borderRadius: "10px",
//                 padding: "5px",
//                 margin: "0px"
//             }
//         }else if (status === "pending") {
//             return {
//                 color: "rgb(175, 158, 3)",
//                 backgroundColor: "yellow",
//                 borderRadius: "10px",
//                 padding: "5px",
//                 margin: "0px"
//             }
//         }
//     }

   
//     return (
//         <div className="user_data_container">
//             <table>
//                 <thead>
//                     <tr>
//                     {tableHeader.map((header, id) => <th key={id}><span className="table_Header" onClick={()=> setOpenUserFilter(!openUserFilter)}>{header.toUpperCase()}<img src={table_icon} alt={"table icon"} className="table_icon_pic"/></span></th>)}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {customersData.map(data =>
//                         <tr key={data.id}>
//                             <td>{data.organization}</td>
//                             <td>{data.personalInfo.userName}</td>
//                             <td>{data.personalInfo.email}</td>
//                             <td>{data.personalInfo.phoneNumber}</td>
//                             <td>{data.dateJoined}</td>
//                             <td><span style={colorStatus(data.status)} className={"style_status"}>{data.status}</span></td>
//                             <td key={data.id} onClick={() => setSelectedElement(data)}>
//                                 <strong>:</strong>
//                             {selectedElement && selectedElement.id === data.id && (
//                             <PopupOption element={selectedElement} onClose={() => setSelectedElement(null)} />
//                             )}
//                             </td>
//                         </tr>
//                         )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }
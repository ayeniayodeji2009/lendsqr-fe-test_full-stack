import React, { useState/*, useRef, useEffect ,createContext, useContext*/ } from "react"
import { useData } from '../context_API/DataContext'; //Context API for sharing useSate data Globally
import UserTitle from "./UserTitle"
import UserStatistics from "./UserStatistics"
import UserData from "./UserData"
import UserFilter from "../pages/user_filter/UserFilter"
import Pagination from "./Pagination"
import "./style/style_components.scss"


export default function Users() {
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    // const [search, setSearch] = useState('');
    // const { query } = useContext(MyContext);
    const { searchValue } = useData();
    // const [searchValue, setSearchValue] = useData()
    // const { setSearchValue } = useData();
    const [numUsers, setNumUsers] = useState(0)
    const [numActiveUsers, setNumActiveUsers] = useState(0)
    const [numUserLoan, setNumUserLoan] = useState(0)
    const [numUserSaving, setNumUserSaving] = useState(0)
    const [openUserFilter, setOpenUserFilter] = useState(false)
    

    return (
        <div className="users_container">
                <UserTitle />
                <UserStatistics numUsers={numUsers} numActiveUsers={numActiveUsers} numUserLoan={numUserLoan} numUserSaving={numUserSaving} />
                <UserData total={total} page={page} size={size} setTotal={setTotal} search={searchValue} setNumUsers={setNumUsers} setNumActiveUsers={setNumActiveUsers} setNumUserLoan={setNumUserLoan} setNumUserSaving={setNumUserSaving} openUserFilter={openUserFilter} setOpenUserFilter={setOpenUserFilter} />
                {openUserFilter && <UserFilter />}
                <Pagination total={total} page={page} size={size} onPageChange={setPage} onSizeChange={setSize} />  
        </div>
    )
}
import { FaRegUserCircle } from "react-icons/fa";

export default function Header(){
    return(
        <>
        <div className="header_container">
        <div className="header_user">
        <FaRegUserCircle size={32}/>
        <div className="profile">User Profile</div>
        </div>
        <div className="header_search">
            <input className="header_input" type="text" placeholder="Search..."></input>
        </div>
        </div>
        
        </>
    )
}
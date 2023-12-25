import { MdOutlineTaskAlt } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";

export default function Sidebar(){
    return(
        <>
        <div className="sidebar_container">
            <div className="sidebar_task">
            <MdOutlineTaskAlt size={32} color="blueviolet" />
            </div>
            <div className="sidebar_calendar">
            <FaCalendarAlt  size={32} color="blueviolet"/>
            </div>
            <div className="sidebar_calendar">
            <MdDeveloperBoard size={32} color="blueviolet"/>

            </div>
        </div>
        
        
        </>
    )
}
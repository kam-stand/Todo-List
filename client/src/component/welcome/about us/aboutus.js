import { RxPerson } from "react-icons/rx";

export default function Aboutus(){
    return(
        <>
        <div className="about_container">
            <div className="founder">
                <RxPerson size={42} color="salmon"/>
            </div>
            <div className="list_info">
                <p>This is my first react project. Please critique it and send any suggestions to me via email or comment them below.</p>
                <p>I am using the popular MERN stack and use some other React UI libraries which are listed in the readme</p>
            </div>
        </div>
        
        </>
    )
}
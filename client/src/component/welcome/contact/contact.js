import { TiContacts } from "react-icons/ti";

export default function Contact(){
    return(
        <>
        <div className="contact_container">
            <div className="founder">
                <TiContacts size={42} color="blueviolet"/>
            </div>
            <div className="list_info">
                <p>kh84590@gmail.com</p>
                <p>Github profile:kamstand</p>
                <p>Resume</p>
            </div>
        </div>
        
        </>
    )
}
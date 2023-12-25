import Footer from "../footer/footer";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

export default function MainPage() {
    return(
        <>
        <div className="Header"><Header/></div>
        <div className="Sidebar"><Sidebar/></div>
        <div className="Footer"><Footer/></div>
        
        </>
    )
}
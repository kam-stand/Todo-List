import EventList from "./event/eventList";

export default function Footer(){
    return(
        <>
        <div className="footer_container">
            <div className="footer_calendar">
                <div>
                    <EventList/>
                </div>
            </div>
        </div>
        </>
    )
}
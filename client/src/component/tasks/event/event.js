import EventForm from "./event_form/eventform";

export default function Event(){
    return(
        <>
        <div className="event">
            <h4>Add an event associated with your task</h4>
        <EventForm/>
        </div>
        
        </>
    )
}
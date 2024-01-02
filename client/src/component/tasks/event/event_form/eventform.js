import React, { useState } from 'react';

export default function EventForm() {
    const [formVisible, setFormVisible] = useState(false);
    const [taskVisible, setTaskVisible] = useState(false);
    const [eventName, setEventName] = useState('');
    const [eventReminder, setEventReminder] = useState('');

    const handleEventNameChange = (e) => {
        setEventName(e.target.value);
    };

    const handleEventReminderChange = (e) => {
        setEventReminder(e.target.value);
    };

    const handleAddEvent = () => {
        setFormVisible(!(formVisible));
    };

    const handleAddToTask = () => {
        setTaskVisible(!(taskVisible));
    };

    return (
        <>
            <h1>Events</h1>
            <p>Create an event to organize your given task</p>
            <button onClick={handleAddEvent}>Add Event!</button>
            {formVisible && (
                <form className='Event_form'>
                    <div className='Event_inp'>
                        <label>Enter event name</label>
                        <input 
                            type='text' 
                            placeholder='name' 
                            value={eventName} 
                            onChange={handleEventNameChange} 
                        />
                    </div>
                    
                    <div className='Event_inp'>
                        <label>Enter event reminder</label>
                        <input 
                            type='date' 
                            placeholder='date' 
                            value={eventReminder} 
                            onChange={handleEventReminderChange} 
                        />
                    </div>
                </form>
            )}
            <button onClick={handleAddToTask}>Add to Task!</button>
            {taskVisible && (
                <div className='Event_form'>
                    <p>Associate your event with a task?</p>
                    <div className='Event_inp'>
                        <label>Search</label>
                        <input type='search' placeholder='select task'></input>
                    </div>
                </div>
            )}
        </>
    );
}

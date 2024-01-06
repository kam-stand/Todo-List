import React, { useState } from "react"
export default function Taskform() {
    const [task, setTask] = useState("");
    const HandleTask = (Event) => {
        setTask(Event.target.value)
    }
    const [date, setDate] = useState("");
    const handleDate = (Event) => {
        setDate(Event.target.value)
    }
    const [rank, setRank] = useState(null);
    const handleRank = (Event) => {
        setRank(Event.target.value)
    }
    console.log(task, date)
    return (
        <>
            <div className="form_task">

                <h3 className="task_name">Add task</h3>
                <input
                    onChange={HandleTask}
                    placeholder="Enter task"
                    value={task}
                    type="text"
                >
                </input>

                <h3>Set due date</h3>
                <input
                    type="date"
                    placeholder="Enter your due date or reminder"
                    value={date}
                    onChange={handleDate}>
                </input>

                <h3>Rank your task</h3>
                <input
                    type="text"
                    onChange={handleRank}
                    value={rank}
                    placeholder="rank 1-5" ></input>

                <div className="task_button">
                    <button className="add_task">add</button>

                </div>

            </div>
            <div className="event">
                <p>Associate your task with an event</p>
                <div className="event_form">
                <label>Event</label>
                <input type="text" placeholder="Event name"></input>
                </div>
            </div>

        </>
    )
}
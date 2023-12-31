export default function Taskform() {
    return (
        <>
            <div className="form_task">
                <h3 className="task_name">Completed?</h3>
                <input type="checkbox"></input>

                <h3 className="task_name">Add task</h3>
                <input
                    placeholder="Enter task"
                    type="text"
                >
                </input>

                <h3>Set reminder/due date</h3>
                <input type="date" placeholder="Enter your due date or reminder"></input>

                <h3>Rank your task</h3>
                <p>1-5</p>
                <input
                    placeholder="Enter rank"
                    type="text"
                >
                </input>
            </div>

        </>
    )
}
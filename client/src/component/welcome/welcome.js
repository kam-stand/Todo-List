import Login from "../login/login";

export default function Welcome() {
    return (
        <>
          <div className="welcome_page">
            <h1>Todo-List</h1>
            <p>Here are some of the features</p>
            <div>
                <ol>
                    <li>Tasks</li>
                    <li>Create notes</li>
                    <li>Event planning</li>
                    <li>Visualize productivity</li>
                </ol>
            </div>
            <div>
                <Login/>
            </div>
          </div>
        </>
    )
}
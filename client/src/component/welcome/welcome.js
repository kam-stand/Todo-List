import Login from "../login/login";
import Signup from "../signup/signup";

export default function Welcome() {
    return (
        <>
        <div className="welcome">
            <div className="title">
            <h1>ProNotion</h1>
            </div>
            <div>
                <p>At ProNotion we offer the most effective event planning online resource.</p>
                <p>ProNotion offers great accesibility and functionality towards keeping tracks of projects, tasks and even reminders.</p>
            </div>
            <div className="feats">
                <h2 className="headfeats">Features</h2>
                <div>
                    <div>Create <b><i>interactive and functional</i></b> tasks</div>
                    <div>Coordinate your tasks with events and <b><i>calendar</i></b></div>
                    <div>Reminders and <b><i>Enforcement</i></b></div>
                    <div>Sort and rank projects and task to <b><i>Visualize</i></b> your productivity</div>
                </div>
            </div>

            <div className="log-sign">
                <Login/>
                <Signup/>
            </div>
            
        </div>
        </>
    )
}
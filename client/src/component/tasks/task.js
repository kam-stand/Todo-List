import axios from "axios";
import { MdIndeterminateCheckBox } from "react-icons/md";

axios.defaults.baseURL = "http://localhost:8000";

export default function Task(){
  return(

    <>
    <div className="wrapper">

      <form className="task">

      <div className="checkwrapper">
        <h1>Complete</h1>
      <input type="checkbox" className="checkbox"></input>
      </div>

      <div className="taskwrapper">
        <h1>Task</h1>
      <input type="text" className="takstext"></input>
      </div>

      <div className="rankwrapper">
        <h1>Rank</h1>
      <input type="number" className="ranknum"></input>
      </div>

      </form>

    </div>
    
    </>
  )
}

import { GrAlarm } from "react-icons/gr";
import { VscTasklist } from "react-icons/vsc";
import { LuListTodo } from "react-icons/lu";
import { ImListNumbered } from "react-icons/im";

import axios from "axios";
import Taskform from "./task_form";
axios.defaults.baseURL = "http://localhost:8000";

export default function Task(){
  
  return(

    <>
      <section className="wrapper">
        <div className="task_comp">
          <div className="task_list">
            <LuListTodo className="icon_t" size={32}/>
          </div>
          <div className="task_list">
              <VscTasklist size={32} className="icon_t"/>
          </div>
          <div className="task_list">
              <GrAlarm className="icon_t" size={32}  />
          </div>
          <div className="task_list">
            <ImListNumbered className="icon_t" size={32}/>
          </div>
        </div>
        <Taskform/>
      </section>
    </>
  )
}

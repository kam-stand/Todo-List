
import IconNotion from "./logo/iconnotion";
import { CiCircleList } from "react-icons/ci";
import { FaProjectDiagram } from "react-icons/fa"
import { RiRoadMapFill } from "react-icons/ri";
import Aboutus from "./about us/aboutus";
import Contact from "./contact/contact";

export default function Welcome() {

  const feat1 = () => {
    return (
      <>
        <p>
          Make <b>events</b> on your <b>calendar</b> <CiCircleList className="floatleftright"
            size={36} color="orange" />
        </p>
      </>
    )
  }

  const feat2 = () => {
    return (
      <>
        <p>Create a project roadmap <RiRoadMapFill size={30} color="blueviolet" className="floating_icon" /> to <i><b>visualize</b></i> your most recent tasks</p>
      </>
    )
  }


  const feat3 = () => {
    return (
      <>
        <p>Add task with reminders that connect to your <i><b>Project</b></i> <FaProjectDiagram className="floatleftright"
          size={30} color="blueviolet" />
        </p>      </>
    )
  }

  return (
    <>
      <div className="welcome">
        <div className="title">
          <h1>Pro<IconNotion />otion</h1>
        </div>

        <div className="information">

          <h1>Features</h1>
          <div className="features">
            <div className="feat-card">
              {feat1()}
            </div>
            <div className="feat-card">
              {feat2()}
            </div>
            <div className="feat-card">
              {feat3()}
            </div>
          </div>
        </div>

      </div>
      <div className="cont">
        <Contact />
      </div>
      <div className="about">
        <Aboutus />
      </div>
    </>
  );
}

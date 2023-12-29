import "./App.css";
import MainPage from "./component/homepage/main/mainpage";
import Task from "./component/tasks/task";
import Welcome from "./component/welcome/welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

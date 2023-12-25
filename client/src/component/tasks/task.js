import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'http://localhost:8000';

export default function Task() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/task');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [tasks]); 

  const renderTask = () => {
    return (
      tasks.map((task) => (
        <div className='task_container' key={task._id}>
          <div className='task_rank'>{task.rank}</div>
          <div className='task_text'>{task.text}</div>
          <div className='task_complete'>{task.completed ? 'Completed': 'incomplete'}</div>
        </div>
      ))
    );
  };

  return (
    <>
      {renderTask()}
    </>
  );
}

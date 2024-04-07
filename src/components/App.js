import Header from "./components/Header"; //we import the header file using the header file path.
import Tasks from "./components/Tasks"; //use if we did not use state to crete the jsx list.
import AddTask from "./components/AddTask";

import { useState } from "react";

const App = () => {
  const [showAddTask, setshowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appoinment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },

    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },

    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //to delete a taskONCLICK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); //filter creates a new array which meets the set condition(when we click icon, create a new array, the objects in the array should have ids not equal to the id of the clicked icon, therefore the click icon is deleted or not stored in the new array set task see to this.)
  };
  console.log(deleteTask);

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(setTasks);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setshowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;

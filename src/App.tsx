import React from "react";
import TaskList from "./component/TaskList";
import CompletedTaskList from "./component/CompletedTask";
import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <div className="todo_app_section">
        <div className="todo_app_container">
          <div className="new_task_list task_list">
            <h2>Task List</h2>
            <div>
              <TaskList />
            </div>
          </div>
          <div className="completed_task task_list">
            <h2>Completed Task</h2>

            <div>
              <CompletedTaskList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

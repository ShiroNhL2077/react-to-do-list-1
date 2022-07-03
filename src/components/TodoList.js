import React, { useState } from "react";
import ListItem from "./ListItem";

export default function TodoList() {
  const getTask = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };
  const [List, setList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.length === 0) {
      alert("cannot insert an empty task");
    } else if (List.includes(newTask)) {
      alert("Duplicated task ! already done");
    } else if (List.length === 5) {
      alert("you can't add more tasks for today");
    } else {
      setList([...List, newTask]);
      document.getElementById("myForm").reset();
    }
  };

  return (
    <div className="container text-center my-3">
      <p className="display-1">TODAY'S TASKS</p>
      <p className="h6 mb-3">( TO DO )</p>
      <form id="myForm" className="mb-5">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="taskLabel"
            placeholder="Task Label"
            onChange={(e) => getTask(e)}
          />
          <label for="taskLabel">Task Label</label>
        </div>
        <button
          type="submit"
          class="btn btn-outline-primary col-12"
          onClick={(key) => addTask(key)}
        >
          Add Task
        </button>
      </form>
      <div className="d-flex justify-content-between">
        <div className="card" style={{ width: "18rem" }}>
          <img src="todo.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="col-4">
          {List &&
            List.map((el) => {
              return (
                <ListItem content={el} key={"zdzd512" + el + "z26z2zdd"} />
              );
            })}
          { List.length === 5 ?
            (<p className="display-1 text-success text-center">GOOD JOB TODAY</p>):
            List.length === 4 ?
            (<p className="display-1 text-success text-center">You still have 1 Tasks to go</p>):
            List.length === 3 ?
            (<p className="display-1 text-success text-center">You still have 2 Tasks to go</p>):
            List.length === 2 ?
            (<p className="display-1 text-success text-center">You still have 3 Tasks to go</p>):
            List.length === 1 ?
            (<p className="display-1 text-success text-center">You still have 4 Tasks to go</p>):
            
            (<p className="display-1 text-success text-center">You still have 5 Tasks to go</p>)
          }
        </div>
      </div>

      {/* {List &&
        List.map((el) => {
          return <ListItem content={el} key={"zdzd512" + el + "z26z2zdd"} />;
        })}
      {List.length === 5 ? (
        <p className="display-1 text-success text-center">GOOD JOB TODAY</p>
      ) : (
        <></>
      )} */}
    </div>

    //     <div>
    //     <header className="container-fluid bg-dark py-3">
    //       <p className="display-1 text-warning text-center fw-bold">To Do List</p>
    //     </header>
    //     <main className="container py-3">
    //       <div>
    //           <p className="display-4 fw-bold text-center">Today's Tasks</p>
    //           <p className="display-5 text-center">(To Do)</p>
    //       </div>
    //       <form id="myForm" className="my-5">
    //           <div class="form-floating mb-3">
    //               <input type="text" class="form-control" id="taskLabel" placeholder="Task Label" onChange={(e) => getTask(e)} />
    //               <label for="taskLabel">Task Label</label>
    //           </div>
    //           <button type="submit" class="btn btn-outline-primary col-12" onClick={(key) => addTask(key)} >Add Task</button>
    //       </form>
    //       <div className="d-flex justify-content-between">
    //           <div className="card" style={{width: '18rem'}}>
    //               <img src="todo.jpg" class="card-img-top" alt="..."/>
    //               <div class="card-body">
    //                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //               </div>
    //           </div>
    //           <div>
    //               <ListItem />
    //           </div>
    //       </div>
    //     </main>
    //   </div>
  );
}

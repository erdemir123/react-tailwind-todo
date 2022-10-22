import React, { useState, useEffect } from "react";
import Complete from "./Complete";
import ListTodo from "./ListTodo";

const Addtodo = ({ dark }) => {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");

  const [newTask, setNewtask] = useState([]);
  const showChange = () => {
    setShow(!show);
    console.log(show);
  };
  const handleClick = () => {
    if (!task && !day) {
      alert("boş bırakılamaz");
    }
    if (task && day) {
      const todo = {
        id: Math.floor(Math.random() * 1000),
        task: task,
        day: day,
        completed: false,
      };
      newTask.push(todo);
      localStorage.setItem("data", JSON.stringify(newTask));
      setNewtask(newTask);
      setDay("");
      setTask("");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const localData = JSON.parse(localStorage.getItem("data")) || [];
    setNewtask(localData);
  };
  return (
    <div
      className={
        dark
          ? "bg-slate-700 w-96 mx-auto rounded-lg px-6 py-16 shadow-md shadow-slate-600"
          : "bg-slate-500 w-96 mx-auto rounded-lg px-6 py-16 shadow-lg shadow-slate-600"
      }
    >
      <button
        className={
          dark
            ? "bg-slate-300 text-slate-500 p-2 rounded-lg text-sm font-bold mb-5"
            : "bg-red-300 p-2 rounded-lg text-sm font-bold mb-5"
        }
        onClick={showChange}
      >
        {show ? "Show Add Task Bar" : "Close Add Task Bar"}
      </button>
      <div>
        {show && (
          <div>
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96 text-left text-md font-bold">
                <label
                  htmlFor="exampleFormControlInput1"
                  className={
                    dark
                      ? "form-label inline-block mb-1 text-slate-300 text-md font-bold ml-2"
                      : "form-label inline-block mb-1 text-gray-700 text-md font-bold ml-2"
                  }
                >
                  Task
                </label>
                <input
                  value={task}
                  type="text"
                  className="
        form-control
        block
        mx-auto
        w-80
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlInput1"
                  placeholder="Example label"
                  onChange={(e) => setTask(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96 text-left">
                <label
                  htmlFor="exampleFormControlInput1"
                  className={
                    dark
                      ? "form-label inline-block mb-1 text-slate-300 text-md font-bold ml-2"
                      : "form-label inline-block mb-1 text-gray-700 text-md font-bold ml-2"
                  }
                >
                  Day&Time
                </label>
                <input
                  value={day}
                  type="date"
                  className="
                  form-control
                  block
                  mx-auto
        w-80
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                  id="exampleFormControlInput1"
                  placeholder="Example label"
                  onChange={(e) => setDay(e.target.value)}
                />
                <button
                  className={
                    dark
                      ? "bg-slate-300 p-1 rounded-md text-slate-500 font-bold mx-auto block mt-3"
                      : "bg-red-300 p-1 rounded-md text-black-100 font-bold mx-auto block mt-3"
                  }
                  onClick={handleClick}
                >
                  Save Task
                </button>
              </div>
            </div>
          </div>
        )}
        <ListTodo newTask={newTask} func={setNewtask} getfunc={getData} />
      </div>
      <Complete newTask={newTask} func={setNewtask} dark={dark}/>
    </div>
  );
};

export default Addtodo;

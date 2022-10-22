import React  from "react";
import { FaCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

const Edit = ({ item, newTask, func,getfunc}) => {
  const [complet, setComplet] = useState(false);
  const deleted = (id) => {
    const newTodo = newTask.filter((item) => item.id != id);
    localStorage.setItem("data", JSON.stringify(newTodo));
    func(newTodo);
  };
  const complete = (id) => {
    setComplet(!complet);
    newTask.map((todo, index) => {
      if(todo.id === id) {
        newTask[index].completed = complet;
        localStorage.setItem("data", JSON.stringify(newTask));
        getfunc()
      }
    });
  };
 
  return (
    <div>
      {item.completed ||
      <div className="flex justify-between border-2 rounded-lg" key={item.id}>
        <div className="text-sm font-bold  flex flex-col text-left  pl-2">
          <div
            className={
              item.completed
                ? " text-blue-500 uppercase decoration-2"
                : "text-red-500"
            }
          >
            {item.task}
          </div>
          <div
            className={
              item.completed
                ? " decoration-slate-900 text-blue-500 decoration-2"
                : "text-red-500"
            }
          >
            {item.day}
          </div>
        </div>
        <div className="flex gap-2">
          <AiFillDelete
            className="text-red-600 mt-4"
            onClick={(e) => deleted(item.id)}
          />
          <FaCheck
            className="text-green-600 mt-4"
            onClick={(e) => {
              complete(item.id);
            }}
          />
        </div>
      </div>}
    </div>
  );
};

export default Edit;

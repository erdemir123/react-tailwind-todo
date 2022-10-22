import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillDelete } from "react-icons/ai";

const Complete = ({newTask,func,dark}) => {
  const changeComplete=(id)=>{
      const remove = newTask.filter((item)=>item.id!=id)
          localStorage.setItem("data", JSON.stringify(remove));
          func(remove)
  }
    const notify = () => {toast.success("Todo Has Been Removed From The List")}
     return (
    <div className="bg-slate-500 rounded-lg">
      <h1 className={dark ? 'bg-slate-500 border-slate-200 text-slate-300 rounded-lg font-bold py-2' : 'bg-red-300 border-slate-200 border-2 rounded-lg font-bold py-2'}>
        👇 COMPLETED 👇
      </h1>
      {newTask.map((item) => {
        return (
          item.completed && (
            <div key={item.id} className="mt-2">
              <div className={dark ? 'flex font-bold bg-slate-300 mt-1 justify-between py-2 rounded-md items-center px-4' : 'flex font-bold bg-slate-300 mt-1 justify-between border-2 border-red-300 rounded-md items-center px-4'}>
                <div className="flex gap-2 font-bold text-slate-500 bg-slate-300 mt-1 justify-around  rounded-md">
                <div>{item.task}</div>
                <div>{item.day}</div>
                </div>
                <AiFillDelete
            className="text-red-600 mt-1" onClick={()=>{changeComplete(item.id); notify()}}/>
            
              </div>
              
            </div>
        
          )
        );
      })}
      <ToastContainer />
    </div>
  );
    }


export default Complete;

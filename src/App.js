
import './App.css';
import './style.css';
import './output.css';
import Addtodo from './component/Addtodo';
import { useState } from 'react';

function App() {
  const [dark,setDark]= useState(false)
  const koyu=()=>{
    setDark(!dark)
    console.log(dark)
  }
  return (
    <div className={dark ? 'App bg-slate-800 text-white h-[100vh]' :'App bg-yellow-100 w-full h-[100vh] select-none'}>
      <h1 className={dark ? 'text-white text-xl font-bold pt-6 mb-5' : 'text-xl font-bold pt-6 mb-5 text-slate-600'}>TASK TRACKER</h1>
      <button onClick={koyu} className={
        dark ? 'absolute top-0 left-5 bg-black text-white px-3 py-1 mt-5 rounded-md shadow-sm shadow-white' : 'absolute top-0 left-5 bg-white text-black px-3 py-1 mt-5 rounded-md shadow-md shadow-black'}>Dark Mode</button>
      <Addtodo dark ={dark}/>
      </div>
  );
}

export default App;

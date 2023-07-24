
import './App.css';
import{useState} from "react"
function App() {
  const [todoList,setTodoList]= useState([])
  const [newTask,setNewTask]=useState("");

    const deleteTask=(id)=>{
      const udpatedTask = todoList.filter((task)=>task.id!==id)
      setTodoList(udpatedTask)
    }
    const addTask = () =>{
      const Task={
      id: Math.random(),
      taskName:newTask,
      } 
      setTodoList([...todoList,Task])
    }
  return (
    <div className="App">


      {/* input change */}
    <div className='task'>
    <input onChange={(event)=>{
    setNewTask(event.target.value)
    }}/>
    {/* Adding task */}
    <button onClick={addTask}>AddTask</button>
    </div>

{/* LIST */}
    <div className='list'>
    {todoList.map((task)=>{
      return(
        <div key={task.id}>
          <h1>{task.taskName}</h1>
          <input type='checkbox'/>

          {/* DELETE BUTTON */}
          <button onClick={()=>deleteTask(task.id)}>X</button>
        </div>
      )
    })}
    </div>
    </div>
  );
}

export default App;

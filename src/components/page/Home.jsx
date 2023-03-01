import axios from "axios"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import AddTask from "../addTask/AddTask"
import TaskList from "../taskList/TaskList"
//task url
const url = "https://63f7293ae40e087c958887d1.mockapi.io/api/tasks"
const Home = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const [text, setText] = useState("Show Task Bar")
    const [tasks, setTasks] = useState([]) 

    
    

    //verileri çekme
    const getTask = async ()=>{
       try {
        const {data} = await axios (url)
        //console.log(data)    
        setTasks(data)    
        
       } catch (error) {
            console.log(error)
       }
    }
    //show task
    const toggle = ()=>{
        setIsOpen(!isOpen)
        const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar"
        setText(buttonText)
    }

    useEffect(() => {
      getTask()
    }, [])

    return (
        <div className="d-flex align-items-center flex-column mt-3">
            <Button variant="success w-75" onClick={toggle}>{text}</Button>
            {isOpen && <AddTask getTask={getTask}  />}
            <TaskList tasks={tasks} getTask = {getTask} url={url} />
        </div>
    )
}
export default Home
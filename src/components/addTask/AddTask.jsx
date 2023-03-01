import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";



const AddTask = ({getTask}) => {
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")


  const handleSubmit = (e)=>{
    e.preventDefault()
    const newTask = {task,date}
    addNewTask(newTask)
    setTask("")
    setDate("")   
  }

  //Task ekleme
  const addNewTask = async (newTask)=>{
    const url ="https://63f7293ae40e087c958887d1.mockapi.io/api/tasks"
    try {
      await axios.post(url, newTask)
    } catch (error) {
      console.log(error)
    }
    getTask()
  }


  return (
    <div className="w-100 mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formText">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter task" value={task} onChange={(e)=>setTask(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        </Form.Group>
        <div className="text-center">
            <Button variant="primary w-75 center" type="submit">
            Submit
            </Button>
        </div>
      </Form>
    </div>
  );
};
export default AddTask;

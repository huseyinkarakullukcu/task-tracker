import axios from "axios"
import {BsFillTrashFill} from "react-icons/bs"
const TaskList = ({tasks,getTask,url}) =>{

    const deleteTask = async (id)=>{
        try {
           await axios.delete(`${url}/${id}`)
            //console.log(`${url}/${id}`)
        } catch (error) {
            console.log(error)
        }
        getTask()
    }


    return(
        <div className="w-100 mb-5">
            {tasks.map((item)=>{
                const {id, task, date} = item
                return (
                    <div className="mt-2 d-flex justify-content-between align-items-center bg-warning rounded-2 p-2" key={id}>
                    <div>
                        <h4>
                            {task}
                        </h4>
                        <p>
                            {date}
                        </p>
                    </div>
                    <div>
                        <BsFillTrashFill style={{fontSize:"2rem", cursor:"pointer"}} onClick={()=>deleteTask(id)} />
                    </div>
                </div>
                )

            })}
        </div>
        
    )
}
export default TaskList
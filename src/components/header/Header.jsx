import TaskPng from "../../assets/TaskPng"

const Header = ()=>{
    return(
        <div className="bg-danger d-flex justify-content-evenly align-items-center text-white p-2 mt-2 rounded-4">
            <TaskPng className="bg-warning" />
            <h1 className="display-5">TASK TRACKER</h1>
        </div>
    )
}
export default Header
import React,{useState} from "react";

function ToDoList(){

    const[tasks,setTasks]=useState([]);
    const [newTasks,setNewTasks]=useState("");

    function handleInputChanges(event){
        setNewTasks(event.target.value);
    }

    function addTasks(){
        if(newTasks.trim()!==""){
            setTasks(t=>[...t,newTasks]);
            setNewTasks("");
        }
    }

    function deleteTasks(index){
        const updatedTask=tasks.filter((_,i)=>i!==index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTask=[...tasks];
            // Array Destructering

            [updatedTask[index],updatedTask[index-1]]=
            [updatedTask[index-1],updatedTask[index]]
            
            setTasks(updatedTask);
        }

    }

    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]]=
            [updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text"
                        value={newTasks}
                        placeholder="Add your Task Here....."
                        onChange={handleInputChanges}
                />
                <button className="add-Task" onClick={addTasks}>
                    Add Task
                </button>      
            </div>

            <ol>
                {
                    tasks.map((task,index)=>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-Task" 
                                onClick={()=>deleteTasks(index)}>
                                    Delete Task
                            </button>
                            
                            <button className="move-button" 
                                    onClick={()=> moveTaskUp(index)}>
                                        Move Task Up
                            </button>

                            <button className="move-button" 
                                    onClick={()=> moveTaskDown(index)}>
                                        Move Task Down
                            </button>


                        </li>
                    )
                }
            </ol>

        </div>
    );
}

export default ToDoList
import React from 'react'
import "./Usertable.css"
import { useState, useEffect } from 'react'
import axios from "axios"

const UserTable = () => {
    const[taskitems, setTaskItems] = useState([]);

    useEffect(()=>{
        const fetchdata = async() =>{
            try{
                const data = await axios.get("http://localhost:5000/app/gettask")
                setTaskItems(data.data);
            }catch(error){
                console.log(error)
            }
        };
        fetchdata();
    },[])


  return (
    <div className='tasktable'>
        <button type="button" class="btn btn-outline-primary">Add Task <br></br>
        <i class="fa-solid fa-square-plus"></i>
        </button>
        <table className="table table-bordered">
            <thead >
                <tr>
                    <th scope='col'>S.No</th>
                    <th scope='col'>Tasks</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Deadline</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {taskitems.map((taskitem, index) => {
                    return(
                        <tr>
                <td>{index+1}</td>
                <td>{taskitem.task}</td>
                <td>{taskitem.category}</td>
                <td>{taskitem.date}</td>
                <td className='actionbutton'>
                <button type="button" className="btn btn-warning">
                <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button type="button" className="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
                </button>
                </td>
                </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default UserTable
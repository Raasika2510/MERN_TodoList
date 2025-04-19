import React from 'react'
import "./Usertable.css"

const UserTable = () => {
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
                <tr>
                <td>1</td>
                <td>Task 1</td>
                <td>Sameple category</td>
                <td>12/12/2024</td>
                <td className='actionbutton'>
                <button type="button" class="btn btn-warning">
                <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button type="button" class="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
                </button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default UserTable
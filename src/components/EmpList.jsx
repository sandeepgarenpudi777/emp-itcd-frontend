import { useEffect, useState } from "react";
import { deleteEmp, getEmps,updateEmp } from "../services/EmpService";

function EmpList(){
    const[emps,setEmps]=useState([]);
    //manual update state

    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[desg,setDesg]=useState("");
    const[salary,setSalary]=useState("");

    const[isEditing,setIsEditing]=useState(false);

    const loadEmps=()=>{
        getEmps()
            .then(res=>setEmps(res.data))
            .catch(error=>console.error(error));
    };
    useEffect(()=>{
        loadEmps();
    },[]);

    //load emp data into manual states
    const editEmp=(emp)=>{
        setId(emp.id);
        setName(emp.name);
        setDesg(emp.desg);
        setSalary(emp.salary);
        setIsEditing(true);
    };
    //update emp
    const updateEmployee=(e)=>{
        e.preventDefault();
        const updatedEmployee={
            id:id,
            name:name,
            desg:desg,
            salary:salary
        };

      updateEmp(id,updatedEmployee)
        .then(()=>{
            alert("Update Successfully...")
            setIsEditing(false);
            loadEmps();
        })
    }
    const handleDelete=(id)=>{
        deleteEmp(id)
        .then(()=>loadEmps())
    };


    return(
        <div>
            <h2>Employees List</h2>
            {
                isEditing &&(
                    <form action="" onSubmit={updateEmployee}>
                        <h3>Update Emp</h3>

                        <input type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Name" /> <br /><br />

                        <input type="text"
                        value={desg}
                        onChange={(e)=>setDesg(e.target.value)}
                        placeholder="Email" /> <br /><br />

                        <input type="number"
                        value={salary}
                        onChange={(e)=>setSalary(e.target.value)}
                        placeholder="salary" />

                        <button type="submit">update</button>


                    </form>
                )
            }

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emps.map(e=>(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.desg}</td>
                                <td>{e.salary}</td>
                                <td>
                                    <button onClick={()=>editEmp(e)}>Edit</button> ||
                                    <button onClick={()=>handleDelete(e.id)}>Delete</button>
                                </td>
                           </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )

}

export default  EmpList;
import { useState } from "react";
import { addEmp } from "../services/EmpService";

function AddEmp(){
    const[name,setName]=useState("");
    const[desg,setDesg]=useState("");
    const[salary,setSalary]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        const emp={name,desg,salary};
        addEmp(emp)
            .then(()=>{
                alert("Employee Added Successfully...");
                setName("");
                setDesg("");
                setSalary("");
            })
            .catch(error=>console.error(error));
    };
    return(
        <form action="" onSubmit={handleSubmit}>
            <h2>Add Employee</h2>

            <label htmlFor="">Emp Name : </label>
            <input type="text" 
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            /> <br /><br />

            <label htmlFor="">Emp Designation : </label>
            <input type="text" 
            placeholder="Enter Designation"
            value={desg}
            onChange={(e)=>setDesg(e.target.value)}
            /> <br /><br />

            <label htmlFor="">Emp Salary : </label>
            <input type="number" 
            placeholder="Enter Salary"
            value={salary}
            onChange={(e)=>setSalary(e.target.value)}
            />  <br /><br />

            <button type="submit">AddEmp</button>
        </form>
    )

}
export default AddEmp;
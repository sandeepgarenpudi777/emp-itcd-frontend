
import axios from "axios";

const API_URL="https://emp-itcd-backend.onrender.com/api/emp";

//post method
export const addEmp=(emp)=>axios.post(API_URL,emp);

//get method
export const getEmps=()=>axios.get(API_URL);

export const updateEmp=(id,emp)=>axios.put(`${API_URL}/update/${id}`,emp);

export const deleteEmp=(id)=>axios.delete(`${API_URL}/delete/${id}`);
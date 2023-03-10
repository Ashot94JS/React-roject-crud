import axios from "axios";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


export  function UserList() {

   const [users , setUsers] = useState([]);
   const navigate = useNavigate();

   useEffect(()=>{
     LoadUsers();
   },[])

   const LoadUsers = async () =>{
    const response = await axios.get("http://localhost:3000/users");
    setUsers(response.data);
    console.log(response.data)

   }

   const DeleteUser = async (id) =>{
     await axios.delete("http://localhost:3000/users/" + id);
     LoadUsers();
   }

  return (
    <div>
      <h2>USER LIST</h2>
      <button onClick={()=>navigate("/user/add")}>ADD NEW USER</button>
      <table style={ {width:"100%"} }>
        <thead>
          <tr>
            <th>ID </th>
            <th>NAME </th>
            <th>USER NAME </th>
            <th>ACTIONS </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(el => <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.username}</td>
              <td>
                <button onClick={()=>navigate("/user/" + el.id)}>detail</button>
                <button onClick={()=>navigate("/user/edit/" + el.id)}>edit</button>
                <button  onClick={()=>DeleteUser(el.id)}>delete</button>
              </td>
            </tr>)
          }
        </tbody>
     
      </table>
    </div>
  )
}

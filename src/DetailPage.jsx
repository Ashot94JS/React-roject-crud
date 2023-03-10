import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"



export  function DetailPage() {

    const [user,setUser] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();


   useEffect(()=>{
     LoadUser();
   },[])


    const LoadUser = async () => {
        const response = await axios.get('http://localhost:3000/users/' + id);
        console.log(response.data)
        setUser(response.data)


    }

  return (
    <div>
        <h2>ID: {user.id}</h2>
        <div>NAME: {user.name}</div>
        <div>USERNAME: {user.username}</div>
        <div>PHONE: {user.phone}</div>
        <div>EMAIL: {user.email}</div>
        <div>WEBSITE : {user.website}</div>
        <button onClick={()=>navigate(-1)}>GO BACK</button>
    </div>
  )
}

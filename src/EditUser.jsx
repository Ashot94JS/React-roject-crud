import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export  function EditUser() {


  const [user,setUser] = useState({
    name : "",
    username:  '',
    website: '',
    phone: '',
    email: ''
  })

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

   const changeHandler = (e) =>{
     e.preventDefault();
     console.log(e.target.name,e.target.value);
     setUser({...user,[e.target.name]: e.target.value })
   }


  const onSubmit = async (e) =>{
    e.preventDefault();
    await axios.put("http://localhost:3000/users/" + id , user);
    navigate("/")

  }



  return (
    <div onSubmit={onSubmit}>
      <h2>EDIT USER</h2>
      <form>
        <div>
            NAME: <input type="text"  value={user.name} name="name" onChange={changeHandler}/>
        </div>
        <div>
            USER NAME: <input type="text"  value={user.username} name="username" onChange={changeHandler}/>
        </div>
        <div>
            WEB SITE: <input type="text"  value={user.website} name="website" onChange={changeHandler}/>
        </div>
        <div>
            EMAIL: <input type="text"  value={user.email} name="email" onChange={changeHandler}/>
        </div>
        <div>
            PHONE: <input type="text"  value={user.phone} name="phone" onChange={changeHandler}/>
        </div>
        <button type="submit">SAVE USER</button>
        

      </form>
    </div>
  )
}

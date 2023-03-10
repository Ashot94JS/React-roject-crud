import { Routes,Route} from "react-router-dom"

import { UserList } from "./UserList"
import { EditUser } from "./EditUser"
import { DeleteUser } from "./DeleteUser"
import { AddUser } from "./AddUser"
import { DetailPage } from "./DetailPage"

export  function App() {
  return (
    
              <Routes>
                <Route path="/" element ={<UserList />} />
                <Route path="/user/add"  element ={<AddUser />} />
                <Route path="/user/edit/:id"  element ={<EditUser />} />
                <Route path="/user/delete/:id"  element ={<DeleteUser />} />
                <Route path="/user/:id" element ={<DetailPage />} />

              </Routes>
    
  )
}

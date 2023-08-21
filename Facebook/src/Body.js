import React, {useState} from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Body.css'
 function Body() {
    const[name,setname]= useState('')
    const[username,setusername]= useState('')
    const[password,setpassword]= useState('')

    function registeruser(event){
        event.preventDefault()
        var users = JSON.parse(localStorage.getItem('users') || "[]")
        var newuser={
            name: name,
            username: username,
            password:password
        }
        users.push(newuser)
        localStorage.setItem('users', JSON.stringify(users))
        
        alert('Registration is Successful')

    }
    
  return <div>
        <div className="row justify-content-centere">
          <div className="col-md-6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UxCFuUsTL8WIhKQwRnf-NFxpvVshgz_q9KG0Skem0PDSDxp9yHh3AU2OGAIjbrOrsxY&usqp=CAU"/>
          </div>
          <div className="col-md-4">
            <h1>Register</h1>
            <form onSubmit={registeruser}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}}/> <br/>
                <input type="text" placeholder="Username"  value={username} onChange={(e)=>{setusername(e.target.value)}}/><br/>
                <input type="Password" placeholder="Password"  value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br/>
                <input type="submit" className="btn btn-primary" value="SIGN UP"/>
            </form>
          </div>

        </div>
    </div>
}
export default Body
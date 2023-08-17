import React, { useState } from "react";
import './login.css';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import swal from 'sweetalert'

function Login(){
    const[username, setusername] = useState('')
    const[password, setpassword] = useState('')

    function validate(event){
        event.preventDefault();
        if(username=='javascript' && password=='react'){
            // alert('Login is successfull')
            swal('Login Successful','Congratulation','success')
        }
        else {
            //alert('Login is failed')
            swal('Login failed','plz check again','error')
        }
    }
    return <div>
        <div class="container">
    <div class="maindiv">
        <div class="form">
            
            <form onSubmit={validate}>
            <h1>User Authentication</h1>
                <input type="text" placeholder="username" class="form-control" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                <br></br>
                <input type="text" placeholder="password" class="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <br/>
                <input type="submit" value="Submit" class="btn" />
            </form>
        </div>
    </div>
</div>

    </div>
}
export default Login;
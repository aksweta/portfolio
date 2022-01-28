import React,{useState}  from "react";
import Customerform from "./Customerform";
import Button from "./Button";



const Form =()=> {


    const [Cusform, setCustomerform] = useState(false);

    const opencustomerform = () => {
        console.log("hello");
        setCustomerform(true);
     }
    return (
       
        <div class="form-popup" >
             {console.log(Cusform)}
        { Cusform ? <Customerform/> : <div class="form-container">
        <h1>Login</h1>
    
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required/>
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
    
        <button type="submit" class="btn" >Login</button>
        <Button handelclick={() => opencustomerform()}>Sign in </Button>
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
      </div>
       }
      </div>
      )

}

export default Form;

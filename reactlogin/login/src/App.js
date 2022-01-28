import React from 'react';
import './App.css';
import three from './images/three.jpg';
import InputField from './components/InputFeild.js';
import Button from './components/Button.js';

function App(){

  const loginclick = () => {}



  return (
     <div>
       <div className="container" style={{ backgroundImage:`url(${three})`}}>

          <h1>Log in</h1>
          <InputField type="text" placeholder="enter your name" label=" User Name : " />
          <InputField type="password" placeholder="enter your Password" label=" PassWord : " />
          <Button onClick={loginclick}>Log In</Button>
         </div>
       <div  className="container2">
          <h1>Not yet registred?</h1>
          <InputField type="text" placeholder="enter your name" label=" User Name : " />
          <InputField type="password" placeholder="enter your Password" label=" PassWord : " />
          <InputField type="email" placeholder="enter your email" label=" E-mail address : " />
          <Button>Create new account</Button>
       </div>
     </div>
    
  )
}

export default App;
import React, { useState } from "react";

export const Register = (props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(email);
    }

    return (
    <div className="auth-form-container">
        <h2>Register</h2>
    <form className="register-form" onSubmit = {handleSubmit}>
        <label htmlFor="name"> Full Name </label>
        <input value={name} onChange={(e)=>setName(e.target.value)} name="name" id="name" placeholder="Full Name" type="name"/>
        <label htmlFor="email">E-Mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your@email.com" id="email" name="email"/>
        <label htmlFor="pass">Password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="pass"placeholder="Password" id="pass"name="pass"/>
        <br></br>
        <button type="submit">Register</button>
        
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Already have an account? Login here..</button>
    </div>
   )
}
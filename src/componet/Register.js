import { Button } from "react-bootstrap";
import {FcGoogle} from 'react-icons/fc'
import login from '../images/image.svg'
import '../register.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext} from "../context/AuthContext"


//test



const Register = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [img,setImg]=useState(null);
    const [password,setPassword]=useState("");
    const {createUserEmail,loginWithGoogle}=useAuthContext();

    const handleSumbit=async(e)=>{
        e.preventDefault();
        try{
            const user=await createUserEmail(email,password,);
            console.log(user.user);
            //handler user from here

        }catch(err){
            console.log(err);
        }
    }


    const googleLogin=async()=>{
        try{
            const result=await loginWithGoogle();
            console.log(result);
            //handler user from here
        }catch(err){
            console.log(err);
        }
    }

    return (
        <section className="login-container">
        <div className="main-head">
            <div className="heading">
                <h1>Register</h1>
                <h2>See your friends</h2>
            </div>
            <div className="button-container">
                <Button onClick={()=>googleLogin()}><FcGoogle/></Button>
            </div>

            <div className="details-container">
                <form onSubmit={(e)=>handleSumbit(e)}>
                    <label htmlFor="name">Name</label>
                    <input type="name" id="name" placeholder="Jhon" onChange={(e)=>setName(e.target.value)} value={name}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="abc@gmail.com" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <label htmlFor="pass">Password</label>
                    <input type="current-password" id="pass" placeholder="Cat@1208" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <input type="file" id="myFile" name="filename" onChange={(e)=>setImg(e.target.value)} />

                    <div className="details-footer">
                        <input type="checkbox" id='id' />
                        <label htmlFor="id">Remember me</label>
                    </div>
                    <Button type="submit">Register</Button>
                </form>

                <div className="login-footer">
                    <label >Have an account? </label>
                    <Link to="/login">LOGIN</Link >
                </div>
            </div>
     
        </div>

        <div className="image-container">
                <img src={login} className="img-fluid" alt="login-people" />
            </div>

    </section>
     );
}
 
export default Register;
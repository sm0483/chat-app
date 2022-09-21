import { useState } from "react";
import { Button } from "react-bootstrap";
import {FcGoogle} from 'react-icons/fc'
import { Link } from "react-router-dom";
import login from '../images/image.svg'
import '../index.css';
import { signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {auth} from '../firebase'





const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [err,setErr]=useState(false);

    const getLogin=async(e)=>{
        e.preventDefault();
        const result=await signInWithEmailAndPassword(auth,email,password);
        console.log(result);       
    }


    const provider=new GoogleAuthProvider();

    const loginWithGoogle=async()=>{
        try{
         const result=await signInWithPopup(auth,provider);
         setErr(false)
        }catch(err){
            setErr(true);
        }
    }

    return (
        <section className="login-container">
            <div className="main-head">
                <div className="heading">
                    <h1>Login</h1>
                    <h2>See your friends</h2>
                </div>
                <div className="button-container">
                    <Button onClick={loginWithGoogle}><FcGoogle/></Button>
                </div>

                <div className="details-container">
                    <form onSubmit={(e)=>getLogin(e)} >
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="abc@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="cat@2001" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <div className="details-footer">
                            <input type="checkbox" id='box' />
                            <label htmlFor="box">Remember me</label>
                            <a href="#forget">Forget Password</a>
                        </div>
                        <Button type="submit">Login</Button>
                    </form>

                    <div className="login-footer">
                        <label >New to Chat? </label>
                        <Link to="/register">SIGN UP</Link>
                    </div>
                </div>
         
            </div>

            <div className="image-container">
                    <img src={login} className="img-fluid" alt="login-people" />
                </div>

        </section>
    );
}
 
export default Login;
import { Button } from "react-bootstrap";
import {FcGoogle} from 'react-icons/fc'
import { Link } from "react-router-dom";
import login from '../images/image.svg'
import '../index.css';





const Login = () => {
    return (
        <section className="login-container">
            <div className="main-head">
                <div className="heading">
                    <h1>Login</h1>
                    <h2>See your friends</h2>
                </div>
                <div className="button-container">
                    <Button><FcGoogle/></Button>
                </div>

                <div className="details-container">
                    <form >
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="abc@gmail.com"/>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="cat@2001"/>
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
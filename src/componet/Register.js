import { Button } from "react-bootstrap";
import {FcGoogle} from 'react-icons/fc'
import login from '../images/image.svg'
import '../register.css';
import { Link } from "react-router-dom";
import {CgProfile} from 'react-icons/cg'

const Register = () => {
    return (
        <section className="login-container">
        <div className="main-head">
            <div className="heading">
                <h1>Register</h1>
                <h2>See your friends</h2>
            </div>
            <div className="button-container">
                <Button><FcGoogle/></Button>
            </div>

            <div className="details-container">
                <form >
                    <label htmlFor="id">Name</label>
                    <input type="name" id="id" placeholder="Jhon"/>
                    <label htmlFor="id">Email</label>
                    <input type="email" id="id" placeholder="abc@gmail.com"/>
                    <label htmlFor="id">Password</label>
                    <input type="password" id="id" placeholder="Cat@1208"/>
                    <div className="image-upload">
                        <form>
                            <input type="file" id="myFile" name="filename"/>
                            <Button type="submit">Upload</Button>
                        </form>
                    </div>    
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
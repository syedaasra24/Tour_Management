import React,{useState} from 'react'
import { Container,Row, Col, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import '../styles/login.css'
import userIcon from '../assets/images/user.png'
const Login =() =>{
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

const handleChange =(e) =>{
    const{name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  }; 
  
const handelSubmit=(e) =>{
    e.preventDefault();
    //logic to handel form submission goes here 
    console.log(formData)
};
  return (
  <section>
    <Container>
      <Row>
        <Col lg='8' className="m-auto">
        <div className="login_container.d-flex.justify-content-between">
          {/* <div className="login_img">
            <img src={loginImg} alt="login" />
          </div> */}

          <div className="login_form">
            <div className="user">
              <img src={userIcon} alt="user" />
            </div>

            <h2>Login</h2>
            <form onSubmit={handelSubmit}>
              <FormGroup>
                <input type="email" placeholder="Email" id="email" Onchange={handleChange} required />
              </FormGroup>

              <FormGroup>
                <input type="password" placeholder="Password" id="password" Onchange={handleChange} required />
              </FormGroup>

              <Button className="btn secondary_btn auth_btn" type="submit">Submit</Button>

            </form>
            <p>Don't have an account?<Link to='/register'>Create</Link></p>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  ); 
}
export default Login;
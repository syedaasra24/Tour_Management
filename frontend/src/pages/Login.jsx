import React from "react"; 
import { Container,Row, Col, From, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import '../styles/login.css'

import loginImg from '../assets/images/login.png'
import usericon from '../assets/images/user.png'







const Login = () => {
  return <section>
    <Container>
      <Row>
        <Col lg='8' className="m-auto">
        <div className="login_container.d-flex.justify-content-between">
          <div className="login_img">
            <img src={loginImg} alt="" />
          </div>

          <div className="login_form">
            <div className="user">
              <img src={userIcon} alt="" />
            </div>
            <h2>Login</h2>

            <form>
              <FormGroup>
                <input type="email" placeholder="Email" required id="email" Onchange={handleChange} />
              </FormGroup>
              <FormGroup>
                <input type="password" placeholder="Password" required id="password" Onchange={handleChange} />
              </FormGroup>
              <Button className="btn secondary_btn auth_btn" type="submit">login</Button>
            </form>
            <p>Don't have an account?<Link to='/register'>Create</Link></p>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  </section> 
    
};

export default Login;
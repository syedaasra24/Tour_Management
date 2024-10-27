import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom'
import '../styles/login.css';

import registerImg from '../assets/images/register3.png';
import userIcon from '../assets/images/user11.png';

import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from "../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

    const handleChange = e => {
      setCredentials(prev=>({...prev, [e.target.id]:e.target.value}));
    };

    const handleClick = async e => {
      e.preventDefault();

      try{
        const res = await fetch(`${BASE_URL}/auth/register`,{
            method: 'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        const result = await res.json()

        if(!res.ok) alert(result.message)

            dispatch({type:'REGISTER_SUCCESS'})
            navigate('/login')
      } catch (err) {
        alert(err.message);
      }
    };

  return  (
  <section>
    <Container>
      <Row>
        <Col lg="8" className= "m-auto">
          <div className="login__container d-flex justify-content-between">
            <div className="logo__img">
              <img src={registerImg} alt=""/>
            </div>

            <div className='login__form'>
              <div className="user">
                <img src={userIcon} alt=""/>
              </div>
              <h2>Register</h2>

              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type="text" placeholder="Username" required id="username"
                  onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder="Email" required id="email"
                  onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <input type="password" placeholder="password" required id="password"
                  onChange={handleChange} />
                </FormGroup>
                <Button className='btn secondary__btn auth__btn'
                type="submit">Create Account</Button>
              </Form>
              <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default Register;












// import React, { useState, useContext } from 'react';
// import { Container, Row, Col, Form, FormGroup, Button, Alert } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/register.css';

// import registerImg from '../assets/images/register3.png';
// import userIcon from '../assets/images/user11.png';

// import { AuthContext } from './../context/AuthContext';
// import { BASE_URL } from "../utils/config";

// const Register = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');
//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
    
//     // Reset error
//     setError('');

//     try {
//       const res = await fetch(`${BASE_URL}/auth/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           Username: credentials.username,
//           email: credentials.email,
//           password: credentials.password,
//         })
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         setError(result.message || "Registration failed. Please try again.");
//         return;
//       }

//       dispatch({ type: 'REGISTER_SUCCESS' });
//       navigate('/login');
//     } catch (err) {
//       setError("An error occurred. Please try again later.");
//     }
//   };

//   const isFormComplete = Object.values(credentials).every(value => value);

//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg="8" className="m-auto">
//             <div className="register__container d-flex justify-content-between">
//               <div className="logo__img">
//                 <img src={registerImg} alt="Register illustration" />
//               </div>

//               <div className="register__form">
//                 <div className="user">
//                   <img src={userIcon} alt="User icon" />
//                 </div>
//                 <h2>Register</h2>

//                 {error && <Alert color="danger">{error}</Alert>}

//                 <Form onSubmit={handleClick}>
//                   <FormGroup>
//                     <input type="text" placeholder="UserName" required id="username"
//                       onChange={handleChange} />
//                   </FormGroup>
//                   <FormGroup>
//                     <input type="email" placeholder="Email" required id="email"
//                       onChange={handleChange} />
//                   </FormGroup>
//                   <FormGroup>
//                     <input type="password" placeholder="Password" required id="password"
//                       onChange={handleChange} />
//                   </FormGroup>
//                   <Button
//                     className={`btn auth__btn ${isFormComplete ? 'filled' : 'empty'}`}
//                     type="submit"
//                   >
//                     Create Account
//                   </Button>
//                 </Form>
//                 <p>Already have an account? <Link to='/login'>Login</Link></p>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Register;

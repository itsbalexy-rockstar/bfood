import React, { useState } from "react";
import styled from "styled-components";
import bgImage from "../../assets/img/bg.png";
import loginImage from "../../assets/img/login.png";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";
const urlUserAuth = 'http://localhost:3001/users'

const cookies = new Cookies()
const Login = () => {
  const nameRestaurant = '<bFood />'
  const initialForm = {
    email: '',
    password: ''
  }
  const [form, setForm] = useState(initialForm);
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const loginUser = async() => {
    await axios.get(urlUserAuth, {params: {email: form.email, password: md5(form.password)}})
    .then(response => {return response.data})
    .then(response => {
      if (response.length > 0){
        let answer = response[0]
        cookies.set('id', answer.id, {path: '/'})
        cookies.set('email', answer.email, {path: '/'})
        alert('Welcome')
        window.location.href="./home"
      } else{
        alert('Usuario y/o contraseña incorrecto')
      }
    })
    .catch(error => {console.log(error);})
  }
  return (
    <LoginStyled>
        <div className="form">
          <img src={loginImage} alt="" />
          <h1>Welcome to {nameRestaurant}</h1>
          <input 
          type="text" 
          placeholder="Email" 
          name="email"
          onChange={handleForm}
          />
          <input 
          type="text" 
          placeholder="Password" 
          name="password"
          onChange={handleForm}
          />
          <button onClick={loginUser}>Login</button>
        </div>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  background-image: url(${bgImage});
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  border: 1px solid black;
  margin: 1rem;
  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10rem;
    height: 300px;
    img{
      width: 50px;
      margin-bottom: .5rem;
    }
    h1{
      margin-bottom: 2.5rem;
    }
    input{
      margin-bottom: .5rem;
      border: none;
      outline: 0px;
      background-color: transparent;
      border-bottom: 1px solid #253859;
    }
    button{
      margin-top: 2rem;
      border-radius: 10px;
      padding: .2rem 1rem;
      border: 1px solid #253859;
      background-color: #253859;
      color: #eeeeee;
      &:hover{
        background-color: #e09538;
        border: 1px solid #e09538;
        color: #253859;
        cursor: pointer;
      }
    }
  }
  
`;

export default Login;

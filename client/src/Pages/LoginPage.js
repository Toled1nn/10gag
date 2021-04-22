import React,{useState,useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {Login} from '../Utils/api';

export default function LoginPage() {
    const[Email, setEmail] = useState('');
    const[Password, setPassword] = useState('');
    
    let history = useHistory();

    useEffect(() => {
        let email = localStorage.getItem("userEmail");
        if(email){
            localStorage.removeItem("userEmail");
        }

    },[])

    const login = async (ev) => {
        ev.preventDefault();
       
        await Login(Email,Password)
        .then( res => {
            localStorage.setItem('userEmail', Email);
            alert("Bem-vindo")
            history.push("/");
        })
        .catch(err => {
            alert("Senha incorreta")
        })
    }

  return(
    <div style={{
            backgroundImage: 'url("https://wallpapercave.com/wp/wp1930400.jpg")',
            backgroundBlendMode: 'multiply',
            backgroundColor: '#232425ba',
            minHeight:'100vh',
            width: '100vw',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
            }}>
        <div style={{color: 'white',textAlign:'center'}}>
            <h1>Central Memes Br</h1>
            <h2>10gag</h2>
        </div>
        <Form onSubmit={login} style={{color: 'white',display:'flex',borderRadius: '5%',flexDirection:'column',width: '35vw',border:'1px solid gray',padding: '1vh 1vw'}}>
            <Form.Group controlId="loginEmail">
                <Form.Label>Endereço de Email</Form.Label>
                <Form.Control type="email"
                    value={Email}
                    onChange={ev => (setEmail(ev.target.value))}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId="loginPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password"
                    value={Password}
                    onChange={ev => (setPassword(ev.target.value))}
                ></Form.Control>
                <a style={{color: 'white'}} href="">Esqueci minha senha</a>
            </Form.Group>
            <Button style={{alignSelf: 'flex-end', margin: '1vw'}} variant="success" type="submit">
                Entrar
            </Button>
        </Form> 
    </div>
     
)}

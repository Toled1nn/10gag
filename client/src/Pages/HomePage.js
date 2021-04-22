import React, {useEffect,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Image,Card} from 'react-bootstrap';
import './home.css';
import {memes} from '../Utils/api';
import Perfil from '../Assets/Perfil.jpg';


export default function HomePage() {
    let history = useHistory();
    const [MemeArry, setMemeArry] = useState([]);
    const [Email, setEmail] = useState('')
    useEffect(() => {
        let email = localStorage.getItem("userEmail");
        if(!email){
            alert('Você precisa estar logado para acessar essa pagina!')
            history.push("/login"); 
        }else{
            setEmail(email)
        }
        memes()
        .then(res => {
            console.log (res)
            let memes = res.data;
            setMemeArry(memes);
        })
        .catch(err =>{console.log(err)})
    })
  return(
      <div style={{minHeight:'100vh',minWidth:'100vw',display:'flex',flexDirection:'row'}}>
          <div className="sidebar">
            <Image src= {Perfil} roundedCircle />
            {Email}
            <Link className="logout" to="/login">Sair</Link>
          </div>
          <div className="feed">
            {MemeArry.map(ar => (
                <Card key={ar.id}>
                    <Card.Img variant="top" src={ar.img}/>
                    <Card.Body>
                        <Card.Title>{ar.title}</Card.Title>
                        <Card.Text>
                            {ar.desc} 
                        </Card.Text>
                    </Card.Body>
                   
                </Card>
            ))}
          </div>
      </div>
  );
}


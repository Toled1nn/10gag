import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Image, Card, Modal, button } from 'react-bootstrap';
import './home.css';
import { memes, postagem } from '../Utils/api';
import Perfil from '../Assets/Perfil.jpg';




export default function HomePage() {
    let history = useHistory();
    const [MemeArry, setMemeArry] = useState([]);
    const [Email, setEmail] = useState('')
    const [Title, setTitle] = useState('')
    const [Desc, setDesc] = useState('')
    const [Img, setImg] = useState('')
    const [Show, setShow] = useState(false)
    useEffect(() => {
        let email = localStorage.getItem("userEmail");
        if (!email) {
            alert('Você precisa estar logado para acessar essa pagina!')
            history.push("/login");
        } else {
            setEmail(email)
        }
        memes()
            .then(res => {
                console.log(res)
                let memes = res.data;
                setMemeArry(memes);
            })
            .catch(err => { console.log(err) })
    },[])
    const enviarPostagem = async(event) => {
        event.preventDefault();
        
        postagem(Title, Desc, Img)
            .then(res => {


                alert("O meme foi postado com sucesso!")
                
            })
            .catch(err => {console.log(err)})
        }
        

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <div style={{ minHeight: '100vh', minWidth: '100vw', display: 'flex', flexDirection: 'row' }}>
                <div className="sidebar">
                    <Image src={Perfil} roundedCircle />
                    {Email}
                    <button type="" onClick ={handleShow}>Publicar</button>
                    <Link className="logout" to="/login">Sair</Link>
                </div>
                <div className="feed">

                    <Modal  show={Show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Publique o seu meme</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <form onSubmit={enviarPostagem}>
                                Title: <input type="text" onChange={(event => setTitle(event.target.value))}></input>
                                Desc: <input type="text"  onChange={(event => setDesc(event.target.value))}></input>
                                Img: <input type="text"  onChange={(event => setImg(event.target.value))}></input>
                                <button type="submit">Publicar</button>

                            </form>
                        </Modal.Body>
                    </Modal>
                    {MemeArry.map(ar => (
                        <Card key={ar.id}>
                            <Card.Img variant="top" src={ar.img} />
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

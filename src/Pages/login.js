import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css'

const Login = () =>{
    //useState fournit la valeur actuelle de la variable que nous souhaitons stocker dans l'état et une fonction pour la modifier
    //setEmail pour enregistrer ce que l'utilisateur remplit(e.target.value)
    const[email, setEmail] = useState;
    const[password, setPassword]=useState;

    const validatForm=()=>{
        return email.length>0 && password.length>0;
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    return(
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlld="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group size="lg" controlld="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button block size="lg" type="submit" disable={!validatForm}>Login</Button>
            </Form>
        </div>
    )
}
export default Login;

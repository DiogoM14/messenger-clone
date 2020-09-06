import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import FlipMove from 'react-flip-move';
import './App.css';

import Message from './components/Message';
import db from './services/firebase';
import firebase from 'firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: 'Diogo', message: 'Olá pessoal'}]);
  const [username, setUsername] = useState('');

  // useState = variavel do react
  // useEffect = rodar código sobre uma condição no react

  useEffect(() => { //Sempre que o app inicia, é feito um map os documents da db
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    }) 
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (event) => {
    // toda a lógica para enviar uma mensagem

    event.preventDefault(); //Desativa o refresh do form

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); //Sempre que enviamos a msg, o input fica vazio
  }
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Bem vindo {username}</h2>

      <form>

        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={ event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
        
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        } 
      </FlipMove>
    </div>
  );
}

export default App;

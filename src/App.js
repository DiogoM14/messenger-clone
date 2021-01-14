import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import FlipMove from 'react-flip-move';
import './App.css';

import Message from './components/Message';
import db from './services/firebase';
import firebase from 'firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: '', message: ''}]);
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

    db.collection('messages').add({ // Adiciona a mensagem à db
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); //Sempre que enviamos a msg, o input fica vazio
  }
  
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100" />
      <h1>Facebook Messenger</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message...</InputLabel>
          <Input className="app__input" value={input} onChange={ event => setInput(event.target.value)} />
          <IconButton className="app__button" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
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

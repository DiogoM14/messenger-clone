import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';

import Message from './components/Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: 'Diogo', text: 'Olá pessoal'}]);
  const [username, setUsername] = useState('');

  // useState = variavel do react
  // useEffect = rodar código sobre uma condição no react

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    // toda a lógica para enviar uma mensagem

    event.preventDefault(); //Desativa o refresh do form
    setMessages([...messages, {username: username, text: input}]);
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

      {
        messages.map(message => (
          <Message username={message.username} text={message.text} />
        ))
      }
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'hi']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    // toda a lógica para enviar uma mensagem

    event.preventDefault(); //Desativa o refresh do form
    setMessages([...messages, input]);
    setInput(''); //Sempre que enviamos a msg, o input fica vazio
  }
  
  return (
    <div className="App">
      <h1>Hello</h1>

      <form>

        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={ event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
        
      </form>

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;

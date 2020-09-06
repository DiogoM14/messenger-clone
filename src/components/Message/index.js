import React from 'react'

import { CardContent, Typography, Card } from '@material-ui/core';
import './styles.css';

export default function index({ message, username }) {
  const isUser = username === message.username;

  
  return (
    <div className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser? "message__userCard" : "message__gestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

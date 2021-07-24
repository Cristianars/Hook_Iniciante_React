import { useState } from "react";
import "./styles.css";
import React from 'react'

export default function App (propos) {
  const [text, setText] = useState('State INICIAL AQUI')
  
  return (
    <div>
       <p>{text}</p>
       <button onClick={() =>
          setText('CLICADO')} >CLICK</button>
    </div>
  )
}

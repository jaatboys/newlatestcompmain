import React from 'react'
import { useParams } from 'react-router-dom'
import Code from './compiler/index.tsx';

function Compiler() {
  const {id} = useParams();
  
  return (
    <Code language={id}/>
  )
}

export default Compiler
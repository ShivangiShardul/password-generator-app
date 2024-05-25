// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC,UC,NC,SC } from './Data/PassChar'
 
function App() {
  let [uppercase,setUppercase]=useState(false) 
  let [lowercase,setLowercase]=useState(false) 
  let [number,setNumber]=useState(false) 
  let [symbols,setSymbols]=useState(false) 
  let [passlen,setPassLen]=useState(10)
  let [fpass,setPass]=useState('')

  let createPassword=()=>{
    let finalPass=''
    let charSet=''
    if(uppercase || lowercase || number || symbols){
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbols) charSet+=SC;

      for(let i=0;i<passlen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setPass(finalPass)
    }
    else{
      alert("Please select at least one checkbox...")
    }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
      <div className='passwordBox'>
        <h2>Password Generator</h2>

        <div className='passwordBoxin'>
          <input type='text' value={fpass} readOnly/> <button onClick={copyPass}>Copy</button>
        </div>

        <div className='passLength'>
          <label>Password Length</label>
          <input type='number' max={20} min={8} value={passlen} onChange={(event)=>setPassLen(event.target.value)}/>
        </div>

        <div className='passLength'>
          <label>Include Uppercase Letters</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>

        <div className='passLength'>
          <label>Include Lowwercase Letters</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
        </div>

        <div className='passLength'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={number} onChange={()=>setNumber(!number)} />
        </div>

        <div className='passLength'>
          <label>Include Symbols</label>
          <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)} />
        </div>

        <button className='btn' onClick={createPassword}>Generate Password</button>

        </div>
    </>
  );
}

export default App;


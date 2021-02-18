
import React from 'react';
import './App.css';



function Card() {
  return <div className="flash-card">Orszag neve</div>;
    
}


export default function App(){
  return (
    <div className="App">
      <h1> MemoCards</h1>
      <h2> Kattints a kártyára az ország fővárosának megtekintéséhez</h2>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

import React from 'react';
import Card from "./cards";

var orszagok = [
  {orszag:"Magyarorszag",
   fovaros:"dddd"},

   {orszag:"MO",
   fovaros:"dddd"},

   {orszag:"MO",
   fovaros:"dddd"},
  
];

export default function App(){



  return (
    <div className="App">
      <h1> MemoCards</h1>
      <h2> Kattints a kártyára az ország fővárosának megtekintéséhez</h2>
      <section className="cards">
        <article className="card">
          {orszagok.map((item) => <Card orszag={ item.orszag} fovaros={item.fovaros} />)}
        </article>
        

      </section>
        
      
    </div>
  );
}

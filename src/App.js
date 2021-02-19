import React from 'react';
import Card from "./cards";


export default function App(){
  return (
    <div className="App">
      <h1> MemoCards</h1>
      <h2> Kattints a kártyára az ország fővárosának megtekintéséhez</h2>
      <section className="cards">
        <article class="card">
          <Card />    
        </article>

        <article class="card">
          <Card orszag = "Romania" fovaros = "Bukarest" />    
        </article>

        <article class="card">
          <Card orszag = "Magyaroszag" fovaros = "Budapest" />    
        </article>

        <article class="card">
          <Card  orszag = "Nemetorszag" fovaros = "Berlin" />    
        </article>

        <article class="card">
          <Card />    
        </article>

        <article class="card">
          <Card />    
        </article>

        <article class="card">
          <Card />    
        </article>

        <article class="card">
          <Card />    
        </article>

        <article class="card">
          <Card />    
        </article>

        <article class="card">
          <Card />    
        </article>
      </section>
        
      
    </div>
  );
}

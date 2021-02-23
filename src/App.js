import React from 'react';
import Card from "./cards";
import ReactDOM from "react-dom";


const persons =[
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"},
    {firstname : "Jayne", lastname: "Cobb"},
    {firstname : "Jayne", lastname: "Cobb"},
    {firstname : "Jayne", lastname: "Cobb"},
    {firstname : "Jayne", lastname: "Cobb"},
    {firstname : "Jayne", lastname: "Cobb"}
];




export default function App(){

  return (
    <React.Fragment>
    <div className="App">
      <h1> MemoCards</h1>
      <h2> Kattints a kártyára az ország fővárosának megtekintéséhez</h2>
    </div>
    <div className="cardContainer">
      <div className="cards">
        {persons.map((item, index) => {
          return (
          <div class="card"> 
            <div className="text">{item.firstname}</div>
          </div>
      );
      })}
        </div>
      </div>
      </React.Fragment>

  );
}

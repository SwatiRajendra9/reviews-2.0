import React from "react";
import App from './App.css';
import { ReactDOM } from "react";



function Reviews(props) {
  return(
    
        <div id='card'>
          <img id='image' src={props.image}></img>
          <p id='name'>{props.name}</p>
          <p id='designation'>{props.designation}</p>
          <p id='description'>{props.description}</p>
          <div id='right-left-keys'>
            <button id='left' onClick={leftClick} >&lt;</button>
            <button id='right' onClick={rightClick}>&gt;</button>
          </div>
          <button id='surprise' onClick={clickOnSurprise}>Surprise</button>


        </div>
      
  )

  function rightClick() {
    props.handleRightClick();
  }

  function leftClick() {
    props.handleLeftClick();
  }

  function clickOnSurprise() {
    props.handleSurprise();
  }

}

export default Reviews;

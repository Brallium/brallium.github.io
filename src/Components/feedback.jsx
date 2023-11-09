import React from 'react'
import {useState} from 'react'
import axios from 'axios'

//Feedback Form Component

export const Feedback = () => {

  var [sat_level,setSatLevel]=useState()
  var [ser_level,setSerLevel]=useState()
  var [feedback,setFeedback]=useState()
    
  const sat_level_update=(event)=>{ // Dealing with name field changes to update our state
    setSatLevel(event.target.value)
  }

  const ser_level_update=(event)=>{ // Dealing with name field changes to update our state
    setSerLevel(event.target.value)
  }

  const feedback_update=(event)=>{ // Dealing with name field changes to update our state
    setFeedback(event.target.value)
  }

  //to be used to submit form contents to backend upon user submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/feedback', {
      product_satisfication_level: sat_level,
      service_satisfication_level: ser_level,
      feedback: feedback,
      //any additional fields
    })
    .then(() => {
      alert("Thank you for submitting your valuable feedback!");
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Satisfied?</label>
        <input required onChange={sat_level_update}></input>
        <input required onChange={ser_level_update}></input>
        <input required onChange={feedback_update}></input>
        <button type = 'submit'> Submit</button>
      </form>
    </div>
  )
}

export default Feedback;

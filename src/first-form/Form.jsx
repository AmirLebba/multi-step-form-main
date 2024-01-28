import React from 'react'
import './Form-1.css'

function Form() {
  return (
    <form action="">
      <h1>Personal info</h1>
      <p>Please provide your name,email address, and phone number</p>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" /> <br />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" /> <br />
      <label htmlFor="phone">Phone</label>
      <input type="tel" name="phone" />
    </form>

  )
}

export default Form
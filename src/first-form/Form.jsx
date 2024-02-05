import React from 'react'
import './Form-1.css'

function Form() {
  return (
    <>
      <h1>Personal info</h1>
      <p>Please provide your name,email address, and phone number</p>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="e.g. Stephen King" /> <br />
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" placeholder="e.g. StephenKing@lorem.com" />{" "}
        <br />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="phone" placeholder="e.g. +1 234 567 890" />
      </form>
    </>
  );
}

export default Form
import React from 'react'
import { Link } from 'react-router-dom'
import './e404.css'
function E404() {
  return (
    <div class="flex-container">
  <div class="text-center">
    <h1>
      <span class="fade-in" id="digit1">4</span>
      <span class="fade-in" id="digit2">0</span>
      <span class="fade-in" id="digit3">4</span>
    </h1>
    <h3 class="fadeIn">PAGE NOT FOUND</h3>
    <button type="button" name="button"><Link to='/'>Return To Home</Link></button>
  </div>
</div>
  )
}

export default E404
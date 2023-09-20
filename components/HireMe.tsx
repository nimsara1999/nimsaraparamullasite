import React from 'react'
import './HireMe.css'

export default function HireMe() {
  return (
      <div className="hire-me">
        <ul>
            <li className="title">
                <h2>Hi! I'm Nimsara.</h2>
                <h3>Embedded Systems Based Web Developer</h3>
            </li>
            <li className="description">
                <p>I'm your go-to for affordable IoT solutions. I've completed numerous projects with microcontrollers and live web dashboards using MQTT and Firebase. Let's make your IoT vision a reality!</p>
            </li>
            <li className='button-hire'>
                <button className="hire-me-button">Hire Me</button>
            </li>
        </ul>
      </div>
  )
}

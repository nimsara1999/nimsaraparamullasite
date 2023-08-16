import React from 'react'
import './IntroBox.css'

export default function IntroBox(props: { title: string, description: string}) {
  return (
    <div>
      <div className="intro-box">
        <ul>
            <li className="intro-box-title">{props.title}</li>
            <li className="intro-box-description">
                <p>{props.description}</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

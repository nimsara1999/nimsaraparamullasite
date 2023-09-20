import React, { useState } from 'react'
import './SkillBar.css'
import {SkillData1} from './SkillBarData'
import {SkillData2} from './SkillBarData'

export default function SkillBar() {

  const [toggle,setToggle]=useState(2); //create state variable
  function updateToggle(id: React.SetStateAction<number>){
    setToggle(id)
  }

  return (
    <>
      <div className='tabs'>
      <ul className='d-flex'>
        <li className={toggle===1?'flex-fill-select' : 'flex-fill'} onClick={()=>updateToggle(1)}>Web Designing</li>
        <li className={toggle===2?'flex-fill-select' : 'flex-fill'} onClick={()=>updateToggle(2)}>IOT Development</li>
      </ul>
      </div>

      <div className={toggle === 1 ? "togcontainer" : 'togcontainer-hide'}>
      {SkillData1.map((item:any)=>{
          return(
              <div className='skill-box'>
                <span className='title'>{item.skill_title}</span>
                <div className='skill-bar'>
                    <span className={item.percentage==="90%" ? 'skill-per ninty':item.percentage==="80%" ?'skill-per eiety':item.percentage==="70%" ? 'skill-per seventy':item.percentage==="60%" ?'skill-per sixty':'skill-per non'}>
                        <span className='tooltip'>{item.percentage}</span>
                    </span>
                </div>
              </div>
          );
      })}
      </div>

      <div className={toggle === 2 ? "togcontainer" : 'togcontainer-hide'}>
      {SkillData2.map((item:any)=>{
          return(
              <div className='skill-box'>
                <span className='title'>{item.skill_title}</span>
                <div className='skill-bar'>
                    <span className={item.percentage==="90%" ? 'skill-per ninty':item.percentage==="80%" ?'skill-per eiety':item.percentage==="70%" ? 'skill-per seventy':item.percentage==="60%" ?'skill-per sixty':'skill-per non'}>
                        <span className='tooltip'>{item.percentage}</span>
                    </span>
                </div>
              </div>
          );
      })}
      </div>

      
    </>
  )
}

import React from 'react'
import './SkillBar.css'
import {SkillData} from './SkillBarData'

export default function SkillBar() {
  return (
    <>
    <div className='container'>
    <h1 className='title-text'>Skill Levels</h1>
    {SkillData.map((item:any)=>{
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

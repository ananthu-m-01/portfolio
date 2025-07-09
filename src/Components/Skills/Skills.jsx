import React from 'react'
import skillsData from '../../data/skillsData'
import './Skills.css'
function Skills() {
  return (
    <div id='skills' className='skills'>
      <h1>SKILLS</h1>
      <div className="skills-container">
        {
          skillsData.map((item,index)=>{
            return(
              <div key={index} className='skills-card'>
                <img src={item.s_image} alt="Skills Image" className='skill-img' />
                <h3>{item.s_name}</h3>
                <p>{item.s_description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills

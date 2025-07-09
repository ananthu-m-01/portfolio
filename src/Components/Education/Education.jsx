import React from 'react'
import educationData from '../../data/educationData'
import './Education.css'
function Education() {
  return (
    <div id='education' className='education'>
      <h1>Education</h1>
      <div className="education-container">
        {
            educationData.map((item,index)=>{
                return(
                    <div key={index} className='education-card'>
                        <h3>{item.e_name}</h3>
                        <h4>{item.e_university}</h4>
                        <p>{item.e_college}</p>
                        <p>{item.e_year}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Education

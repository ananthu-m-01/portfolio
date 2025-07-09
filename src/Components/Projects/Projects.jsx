import gitLogo from '../../assets/github.png'
import projectsData from '../../data/projectsData'
import './Projects.css'
function Projects() {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>PROJECTS</h1>
      </div>
      <div className="project-container">
        {
          projectsData.map((item,index)=>{
            return(
              <div key={index} className='project-card'>
                <img src={item.p_image} className="bg-image" alt="Project Image" />
                <h3>{item.p_name}</h3>
                <p>{item.p_description}</p>
                <div className="project-output">
                  <p className='project-code'>Code</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='more-projects'>
        <p>Show More on</p>
        <img src={gitLogo} alt="" className='more-img' />
      </div>
    </div>
  )
}

export default Projects

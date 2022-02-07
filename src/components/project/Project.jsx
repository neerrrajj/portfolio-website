import './Project.css'

const Project = props => {
  return (
    <div className="app__project">
      <div className="app__project-img">
        <img src={props.url} alt="project" />
      </div>
      <div className="app__project-title">
        <p>{props.title}</p>
        <p>❯</p>
      </div>
    </div>
  )
}

export default Project

import './Project.css'

const Project = props => {
  return (
    <div className="app__project">
      <img src={props.url} alt='project' />
      <p>{props.url}</p>
      <p>{props.title}</p>
    </div>
  )
}

export default Project

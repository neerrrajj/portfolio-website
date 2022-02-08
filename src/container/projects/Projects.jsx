import { Heading } from '../../components'
import { Project } from '../../components'

import projectThumbnail from '../../assets/projectThumbnail.png'

import './Projects.css'

const figmaDesigns = [
  {
    url: projectThumbnail,
    title: 'Admin Dashboard',
    id: 1,
  },
  {
    url: projectThumbnail,
    title: 'Landing page',
    id: 2,
  },
  {
    url: projectThumbnail,
    title: 'Graphic Design studio website',
    id: 3,
  },
]

const figmaToReact = [
  {
    url: projectThumbnail,
    title: 'Portfolio website',
    id: 4,
  },
  {
    url: projectThumbnail,
    title: 'AI Startup website',
    id: 5,
  },
  {
    url: projectThumbnail,
    title: 'Restaurant website',
    id: 6,
  },
]

const Projects = () => {
  return (
    <div className="app__projects">
      <Heading sub="What have I done?" title="Projects" />
      <div className="app__projects-figma_designs">
        <p className="app__projects-headings">Figma Designs</p>
        <div className="app__projects-project_list">
          {figmaDesigns.map(project => {
            return (
              <Project
                title={project.title}
                url={project.url}
                key={project.id}
              />
            )
          })}
        </div>
      </div>
      <div className="app__projects-figma_to_react">
        <p className="app__projects-headings">Figma to React</p>
        <div className="app__projects-project_list">
          {figmaToReact.map(project => {
            return (
              <Project
                title={project.title}
                url={project.url}
                key={project.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects

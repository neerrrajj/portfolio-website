import { Heading } from '../../components'
import { Project } from '../../components'

import './Projects.css'

const figmaDesigns = [
  {
    url: '../../assets/figmadesign.png',
    title: 'Admin Dashboard',
    id: 1
  },
  {
    url: '../../assets/figmadesign.png',
    title: 'Landing page',
    id: 2
  },
  {
    url: '../../assets/figmadesign.png',
    title: 'Graphic Design studio website',
    id: 3
  },
]

const figmaToReact = [
  {
    url: '../../assets/figmadesign.png',
    title: 'Portfolio website',
    id: 4
  },
  {
    url: '../../assets/figmadesign.png',
    title: 'AI Startup website',
    id: 5
  },
  {
    url: '../../assets/figmadesign.png',
    title: 'Restaurant website',
    id: 6
  },
]

const Projects = () => {
  return (
    <div className="app__projects">
      <Heading sub="What have I done?" title="Projects" />
      <p className="headings">Figma Designs</p>
      <div className="projects">
        {figmaDesigns.map(project => {
          return <Project title={project.title} url={project.url} key={project.id} />
        })}
      </div>
      <p className="headings">Figma to React</p>
      <div className="projects">
        {figmaToReact.map(project => {
          return <Project title={project.title} url={project.url} key={project.id} />
        })}
      </div>
    </div>
  )
}

export default Projects

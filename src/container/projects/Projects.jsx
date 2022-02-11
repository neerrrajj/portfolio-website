import { Heading, Project } from '../../components'

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
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    tech: ['React', 'CSS', 'BEM'],
    id: 4,
  },
  {
    url: projectThumbnail,
    title: 'AI Startup website',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    tech: ['React', 'CSS', 'BEM'],
    id: 5,
  },
  {
    url: projectThumbnail,
    title: 'Restaurant website',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    tech: ['React', 'CSS', 'BEM'],
    id: 6,
  },
]

const Projects = () => {
  return (
    <div className="app__projects" id='projects'>
      <Heading sub="What have I done?" title="Projects" />
      <div className="app__projects-figma_designs">
        <p className="app__projects-headings">Figma Designs</p>
        <div className="app__projects-project_list">
          {figmaDesigns.map(project => {
            return (
              <Project
                type="figma"
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
                type="figmaToReact"
                title={project.title}
                url={project.url}
                description={project.description}
                tech={project.tech}
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

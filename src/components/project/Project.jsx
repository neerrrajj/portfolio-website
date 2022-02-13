import { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'

import { Modal } from '../'
import './Project.css'

const Project = props => {
  const [showModal, setShowModal] = useState(false)

  const showModalHandler = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModalHandler = () => {
    setShowModal(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <Fragment>
      <div className="app__project" onClick={showModalHandler}>
        <div className="app__project-img">
          <div className="app__project-img-overlay" />
          <img src={props.thumbnail} alt="project" />
        </div>
        <div className="app__project-title">
          <p>{props.title}</p>
          <p>❯</p>
        </div>
      </div>
      {showModal &&
        ReactDOM.createPortal(
          <Modal
            onClose={closeModalHandler}
            title={props.title}
            url={props.url}
            type={props.type}
            image={props.image}
            download = {props.download}
            thumbnail={props.thumbnail}
            description={props.description}
            tech={props.tech}
            github={props.github}
            link={props.link}
          />,
          document.getElementById('modal')
        )}
    </Fragment>
  )
}

export default Project

import { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'

import { Modal } from '../'
import './Project.css'

const Project = props => {
  const [showModal, setShowModal] = useState(false)

  const showModalHandler = () => {
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  return (
    <Fragment>
      <div className="app__project" onClick={showModalHandler}>
        <div className="app__project-img">
          <img src={props.url} alt="project" />
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
          />,
          document.getElementById('modal')
        )}
    </Fragment>
  )
}

export default Project

import { Fragment } from 'react'
import { Heading } from '../'

import './Modal.css'

const ModalContent = props => {
  return (
    <Fragment>
      {props.type === 'figmaDesigns' && (
        <div className="modal__overlay-img">
          <img src={props.image} />
        </div>
      )}
      {props.type === 'designToCode' && (
        <div className="modal__overlay-content">
          <div className="modal__overlay-content-main">
            <img src={props.thumbnail} />
            <div className="modal__overlay-content-tech">
              {props.tech.map(tech => {
                return (
                  <span className="subtext" key={Math.random()}>
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>
          <p>{props.description}</p>
        </div>
      )}
    </Fragment>
  )
}

const Modal = props => {
  return (
    <div className="modal">
      <div className="backdrop" onClick={props.onClose} />
      <div className="modal__overlay">
        <p className="modal__overlay-close" onClick={props.onClose}>
          X
        </p>
        <Heading
          sub={props.type === 'figmaDesigns' ? "Figma Designs" : "Design to Code"}
          title={props.title}
          type={props.type}          
          download = {props.download}
          github={props.github}
          link={props.link}
        />
        <ModalContent
          type={props.type}
          url={props.url}
          image={props.image}
          thumbnail={props.thumbnail}
          description={props.description}
          tech={props.tech}
        />
      </div>
    </div>
  )
}

export default Modal

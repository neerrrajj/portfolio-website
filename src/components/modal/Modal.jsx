import { Fragment } from 'react'
import { Heading } from '../'

import figma1 from '../../assets/figma1.png'
import './Modal.css'

const ModalContent = props => {
  return (
    <Fragment>
      {props.type == 'figma' && (
        <div className="modal__overlay-img">
          <img src={figma1} />
        </div>
      )}
      {props.type === 'figmaToReact' && (
        <div className="modal__overlay-content">
          <div className="modal__overlay-content-main">
            <img src={props.url} />
            <div className="modal__overlay-content-tech">
              {props.tech.map(tech => {
                return <span className='subtext' key={Math.random()}>{tech}</span>
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
        <Heading sub="Figma Designs" title={props.title} type={props.type} />
        <ModalContent
          type={props.type}
          url={props.url}
          description={props.description}
          tech={props.tech}
        />
      </div>
    </div>
  )
}

export default Modal

import { Heading } from '../'

import figma1 from '../../assets/figma1.png'
import './Modal.css'

const Modal = props => {
  return (
    <div className="modal">
      <div className="backdrop" onClick={props.onClose} />
      <div className="modal__overlay">
        <p className="modal__overlay-close" onClick={props.onClose}>
          X
        </p>
        <Heading sub="Figma Designs" title={props.title} type={props.type} />
        <div className="modal__overlay-img">
          <img src={figma1} />
          {/* <img src={props.url} /> */}
        </div>
      </div>
    </div>
  )
}

export default Modal

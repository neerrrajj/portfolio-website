import { Heading } from '../'
import './Modal.css'
import figma1 from '../../assets/figma1.png'

const Modal = props => {
  return (
    <div className="modal">
      <div className="backdrop" onClick={props.onClose} />
      <div className="modal__overlay">
        <Heading sub="Figma Designs" title={props.title} />
        <div className="modal__overlay-img">
          <img src={figma1} />
          {/* <img src={props.url} /> */}
        </div>
      </div>
    </div>
  )
}

export default Modal

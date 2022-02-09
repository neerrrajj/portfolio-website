import { Heading } from '../../components'
import contactImage from '../../assets/contactimage.png'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'

import './Contact.css'

const Contact = () => {
  return (
    <div className="app__contact">
      <Heading sub="Get in touch" title="Contact Me" />
      <div className="app__contact-content">
        <div className="app__contact-content-text">
          <p>
            I'm <span className="blue-text">looking for new opportunities </span>
            in anything involving UI design, Front-end, React development. If
            you are a recruiter or if you have any leads, please contact me. My
            inbox is always open.
          </p>
          <p>
            If you have a question or just want to say hi, do message me. I'll
            get back to you.
          </p>
          <button className="border__button">Say Hello</button>
          <p className='mail'>neerajprabhuram@gmail.com</p>
          <div>
            <FiGithub className='socials'/>
            <FiInstagram className='socials'/>
            <FiTwitter className='socials'/>
            <FiLinkedin className='socials'/>
          </div>
        </div>
        <div className="app__contact-img">
          <img src={contactImage} />
        </div>
      </div>
    </div>
  )
}

export default Contact

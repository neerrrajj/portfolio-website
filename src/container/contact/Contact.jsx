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
          <a href='mailto:neerajprabhuram@gmail.com'><button className="border__button">Say Hello</button></a>
          <p className='mail'>neerajprabhuram@gmail.com</p>
          <div>
            <a href='https://github.com/nxxwxj/'><FiGithub className='socials'/></a>
            <a href='https://instagram.com/nxxwxj/'><FiInstagram className='socials'/></a>
            <a href='https://twitter.com/nxxwxj/'><FiTwitter className='socials'/></a>
            <a href='https://linkedin.com/in/neerajprabhuram/'><FiLinkedin className='socials'/></a>
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

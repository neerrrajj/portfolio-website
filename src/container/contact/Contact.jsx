import { Heading } from '../../components'
import contactImage from '../../assets/contactimage.png'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'

import './Contact.css'

const openGithub = () => window.open('https://github.com/neerajprabhuram/', '_blank')
const openInstagram = () => window.open('https://instagram.com/nxxwxj/', '_blank')
const openTwitter = () => window.open('https://twitter.com/nxxwxj/', '_blank')
const openLinkedin = () => window.open('https://linkedin.com/in/neerajprabhuram/', '_blank')

const Contact = () => {
  return (
    <div className="app__contact" id="contact">
      <Heading sub="Get in touch" title="Contact Me" />
      <div className="app__contact-content">
        <div className="app__contact-content-text">
          <p>
            I'm
            <span className="blue-text"> looking for new opportunities </span>
            in anything involving UI design, Front-end, React development. If
            you are a recruiter or if you have any leads, please contact me. My
            inbox is always open.
          </p>
          <p>
            If you have a question or just want to say hi, do message me. I'll
            get back to you.
          </p>
          <div>
            <a href="mailto:neerajprabhuram@gmail.com">
              <button className="border__button">Say Hello</button>
            </a>
          </div>
          <div className="mail-group">
            <p
              className="mail"
              onClick={() =>
                navigator.clipboard.writeText('neerajprabhuram@gmail.com')
              }
            >
              neerajprabhuram@gmail.com
            </p>
          </div>
          <div>
            <FiGithub className="socials" onClick={openGithub} />
            <FiInstagram className="socials" onClick={openInstagram} />
            <FiTwitter className="socials" onClick={openTwitter} />
            <FiLinkedin className="socials" onClick={openLinkedin} />
          </div>
        </div>
        <div className="app__contact-img">
          <img src={contactImage} alt=" "/>
        </div>
      </div>
    </div>
  )
}

export default Contact

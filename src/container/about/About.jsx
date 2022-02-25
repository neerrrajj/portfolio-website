import { Heading } from '../../components/'
import AboutImage from '../../assets/aboutimage.png'
import { BsFillCaretRightFill } from 'react-icons/bs'
import './About.css'

const About = () => {
  return (
    <div className="app__about" id='about'>
      <Heading sub="Who am I?" title="About Me" />
      <div className="app__about-content">
        <div className="app__about-content-text">
          <p>
            Hello! My name is Neeraj and I love designing and creating stuff. My
            fascination with websites began many years ago when I imagined how
            wonderful it would be to create helpful websites and publish them on
            the internet for everyone to use.
          </p>
          <p>
            And here I am today, leveraging the power of code to create
            user-centric, aesthetically-pleasing design. My major goal right now
            is to join a startup that aligns with my vision and help them in
            reaching greater heights.
          </p>
          <p>Here are a few technologies I'm familiar with:</p>
          <ul>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Design : </span>
              <span className="tech__name">Figma</span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Languages : </span>
              <span className="tech__name">HTML, CSS, JavaScript </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Frameworks / Libraries : </span>
              <span className="tech__name">React, Tailwind CSS, Next.js</span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Tools : </span>
              <span className="tech__name">Git & Github, VS Code, Netlify, Vercel</span>
            </li>
          </ul>
        </div>
        <div className="app__about-img">
          <img src={AboutImage} alt="About" />
        </div>
      </div>
    </div>
  )
}

export default About

import { Heading } from '../../components/'
import AboutImage from '../../assets/aboutimage.png'
import { BsFillCaretRightFill } from 'react-icons/bs'
import './About.css'

const About = () => {
  return (
    <div className="app__about" id="about">
      <Heading sub="Who am I?" title="About Me" />
      <div className="app__about-content">
        <div className="app__about-content-text">
          <p>
            Hello! My name is Neeraj, and I consider myself to be a creative
            person. My fascination with websites began many years ago when I
            imagined how wonderful it would be to create useful websites and
            make them available to the public on the internet.
          </p>
          <p>
            And now, here I am, leveraging the power of code to build beautiful
            websites. It is a true passion of mine to create state-of-the-art,
            user-friendly websites. My major goal right now is to join a startup
            that aligns with my vision and help them in reaching greater
            heights.
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
              <span className="tech__name">
                REST API, GraphQL, GraphCMS, Git & Github
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Others : </span>
              <span className="tech__name">VS Code, Netlify, Vercel</span>
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

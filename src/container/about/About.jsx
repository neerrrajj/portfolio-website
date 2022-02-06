import {Heading} from '../../components/'

import './About.css'

const About = () => {
  return (
    <div className="app__about">
      <div className="app__about-content">
        <Heading sub="Who am I?" title="About me" />
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
          <li>Languages : HTML, CSS, JavaScript (ES6+)</li>
          <li>Frameworks / Libraries : React, Material UI</li>
          <li>Design : Figma (wireframing, prototyping)</li>
          <li>Tools : Git & Github</li>
        </ul>
      </div>
    </div>
  )
}

export default About

import { Fragment } from 'react'
import { FiDownload, FiGithub, FiExternalLink } from 'react-icons/fi'

import './Heading.css'

const Icons = props => {
  return (
    <Fragment>
      {props.type === 'figma' && (
        <FiDownload className="app__heading-main-icon" />
      )}
      {props.type === 'figmaToReact' && (
        <Fragment>
          <FiGithub className="app__heading-main-icon" />
          <FiExternalLink className="app__heading-main-icon" />
        </Fragment>
      )}
    </Fragment>
  )
}

const Heading = props => {
  return (
    <div className="app__heading">
      <p className="subtext">{props.sub}</p>
      <div className="app__heading-main">
        <div className="app__heading-main-group">
          <p>{props.title}</p>
          <div className="app__heading-main-group-line" />
        </div>
        <div className="app__heading-main-icons">
          <Icons type={props.type} />
        </div>
      </div>
    </div>
  )
}

export default Heading

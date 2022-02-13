import { Fragment } from 'react'
import { FiDownload, FiGithub, FiExternalLink } from 'react-icons/fi'

import './Heading.css'

const Icons = props => {
  const openGithub = () => {
    const url = props.github
    window.open(url, '_blank')
  }

  const openLink = () => {
    const url = props.link
    window.open(url, '_blank')
  }

  const downloadPdf = () => {
    const url = props.download
    window.open(url, '_blank')
  }

  return (
    <Fragment>
      {props.type === 'figmaDesigns' && (
        <FiDownload className="app__heading-main-icon" onClick={downloadPdf} />
      )}
      {props.type === 'designToCode' && (
        <Fragment>
          <FiGithub className="app__heading-main-icon" onClick={openGithub} />
          <FiExternalLink
            className="app__heading-main-icon"
            onClick={openLink}
          />
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
          <Icons
            type={props.type}
            download={props.download}
            github={props.github}
            link={props.link}
          />
        </div>
      </div>
    </div>
  )
}

export default Heading

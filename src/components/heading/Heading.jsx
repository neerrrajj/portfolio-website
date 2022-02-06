import './Heading.css'

const Heading = props => {
  return (
    <div className='app__heading'>
      <p className="subtext">{props.sub}</p>
      <div className="app__heading-main">
        <p>{props.title}</p>
        <div className='app__heading-main-line' />
      </div>
    </div>
  )
}

export default Heading

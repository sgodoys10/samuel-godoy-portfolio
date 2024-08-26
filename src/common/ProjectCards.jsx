import React from 'react'

const ProjectCards = ({src, link, h3, p}) => {
  return (
    <div>
        <a href={link}>
            <img className='hover' src={src} alt= {`${h3} logo`}/>
            <h3>{h3}</h3>
            <p>{p}</p>
        </a>
    </div>
  )
}

export default ProjectCards

import React from 'react'

const SkillsList = ({src, skill}) => {
  return (
    <div>
        <span>
            <img src={src} alt='Checkmark Icon' />
            <p>{skill}</p>
        </span>
    </div>
  )
}

export default SkillsList

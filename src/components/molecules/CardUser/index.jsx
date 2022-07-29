import React from 'react'
import ICONS from '../../../constant/icons'

const CardUser = () => {
  return (
    <div>
      <div>Image</div>
      <div>Hi, My name is</div>
      <div>Jane Cooper</div>
      <div>
        <div>
          <img src={ICONS.userTagAct} alt="icon" />
        </div>
      </div>
    </div>
  )
}

export default CardUser

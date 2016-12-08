import React from 'react'
import FontAwesome from 'react-fontawesome'

import { underlineMarkStrategy } from './UnderlineUtils'


const Underline = ({ state, onChange, changeState }) => (
  <button
    onClick={e => {
      e.preventDefault()
      onChange(underlineMarkStrategy(state))
    }}
  >
    <FontAwesome name="underline" />
  </button>
)

export default Underline

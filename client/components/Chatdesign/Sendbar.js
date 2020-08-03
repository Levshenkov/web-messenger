import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { sendMessage } from '../../redux/reducers/chat'

const Sendbar = () => {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  return (
    <div className="flex m-6 rounded-lg border-2 border-grey-700 overflow-hidden">
      <button
        type="button"
        onClick={() => {
          dispatch(sendMessage(message))
          setMessage('')
        }}
        className="text-3xl text-grey-700 px-3 border-r-2 border-grey-700"
      >
        +
      </button>
      <input
        value={message}
        onKeyDown={({ key }) => {
          if (key === 'Enter') {
            dispatch(sendMessage(message))
            setMessage('')
          }
        }}
        onChange={({ target: { value } }) => setMessage(value)}
        type="text"
        className="w-full px-4"
        placeholder="Message to #general"
      />
      <button
        onClick={() => {
          setMessage('')
        }}
        type="button"
        className="text-3xl text-grey-700 px-3 border-l-2 border-grey-700"
      >
        X
      </button>
    </div>
  )
}

Sendbar.propTypes = {}

export default Sendbar

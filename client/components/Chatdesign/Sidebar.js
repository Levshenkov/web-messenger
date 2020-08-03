/* eslint-disable react/jsx-key */
/* eslint-disable-next-line import/no-unresolved */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewChannel, setCurrentChannel } from '../../redux/reducers/chat'

const Sidebar = () => {
  const [newChannel, setNewChannel] = useState('')
  const dispatch = useDispatch()
  const channels = useSelector((s) => s.chat.channels)
  const userName = useSelector((s) => s.auth.email)
  const currentChannel = useSelector((s) => s.chat.currentChannel)
  const users = useSelector((s) => s.chat.users)
  const email = useSelector((s) => s.auth.user.email)
  return (
    <div className="bg-purple-700 text-purple-lighter w-1/5 pb-6 hidden md:block">
      <h1 className="text-white text-xl mb-2 mt-3 px-4 font-sans flex justify-between">
        <span>Real Chat</span>
      </h1>
      <div className="flex items-center mb-6 px-4">
        <span className="bg-green rounded-full block w-2 h-2 mr-2" />
        <span className="text-purple-lightest">{userName}</span>
      </div>
      <div className="m-2 border-2 border-gray-500 rounded">
        <input
          type="text"
          className=""
          value={newChannel}
          onChange={({ target: { value } }) => {
            setNewChannel(value)
          }}
        />
        <button
          type="button"
          className="pl-4 border-l-2"
          onClick={() => {
            dispatch(addNewChannel(`${newChannel}`))
            setNewChannel('')
          }}
        >
          +
        </button>
      </div>
      <div className="px-4 mb-2 font-sans">Channels:</div>
      <div className="mb-6 py-1 px-4 text-gray-900 font-semi-bold ">
        {channels.map((channelName) => {
          return (
            <button
              className="pr-1 text-grey-light flex"
              type="button"
              key="channelName"
              onClick={() => {
                dispatch(setCurrentChannel(`#${channelName}`))
              }}
            >
              {currentChannel === `#${channelName}` ? <b>#{channelName}</b> : `#${channelName}`}
            </button>
          )
        })}
      </div>

      <div className="px-4 mb-3 font-sans">Direct Messages:</div>

      <div className="flex items-center mb-3 px-4">
        {users
          .filter((it) => it !== email)
          .map((user) => {
            return (
              <button
                type="button"
                key={user}
                className="pr-1 text-grey-light flex"
                onClick={() => {
                  dispatch(setCurrentChannel(`@${user}`))
                }}
              >
                {currentChannel === `@${user}` ? <b>@{user}</b> : `@${user}`}
              </button>
            )
          })}
      </div>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar

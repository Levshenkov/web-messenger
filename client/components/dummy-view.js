import React from 'react'
import Sidebar from './Chatdesign/Sidebar'
import Topbar from './Chatdesign/Topbar'
import Sendbar from './Chatdesign/Sendbar'
import Messages from './Chatdesign/Messages'

const Dummy = () => {
  return (
    <div className="w-full border shadow">
      <div className="flex">
        <Sidebar />
        <div className="w-full flex flex-col">
        <Topbar />
        <Messages />
        <Sendbar />
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)

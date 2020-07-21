import React from 'react'
import { useSelector } from 'react-redux'

const Topbar = () => {
  const currentChannel = useSelector((s) => s.chat.currentChannel)
  return (
    <div className="border-b flex px-6 py-2 items-center">
      <div className="flex flex-col">
        <h3 className="text-grey-darkest text-md mb-1 font-extrabold">{currentChannel}</h3>
        <div className="text-grey font-thin text-sm">Chat info</div>
      </div>
      <div className="ml-auto hidden md:block">
        <input type="search" placeholder="Search" className="border border-grey rounded-lg p-2" />
      </div>
    </div>
  )
}

Topbar.propTypes = {}

export default Topbar

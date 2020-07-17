import React from 'react'

const Sendbar = () => {
  return (
    <div className="flex m-6 rounded-lg border-2 border-grey-700 overflow-hidden">
      <span className="text-3xl text-grey-700 px-3 border-r-2 border-grey-700">+</span>
      <input type="text" className="w-full px-4" placeholder="Message to #general" />
    </div>
  )
}

Sendbar.propTypes = {}

export default Sendbar

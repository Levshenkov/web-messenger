import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Startup = (props) => {
  useEffect(() => {}, [])

  return (
    <div>
      <ToastContainer />
      {props.children}
    </div>
  )
}

Startup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Startup

import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div>
      <main className="overflow-x-hidden">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'


const Navbar = ({title}) => {
    

    return (
         <nav className="navbar bg-danger">
             <h1>
            {title}
             </h1>
        </nav>
        )
    
}

Navbar.defaultProps = {
    title: ' Yalantis List '
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar

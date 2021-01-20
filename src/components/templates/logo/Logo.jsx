import React from 'react'
import './Logo.css'

import logo from '../../../assets/images/LogoCyber.PNG'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="Logo">
        <a href="/" className="logo">
            <img src={logo} alt="Logo"/>
        </a>
    </aside>
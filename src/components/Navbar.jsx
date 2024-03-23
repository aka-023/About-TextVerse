import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
  <nav className={`navbar navbar-expand bg-${props.mode} `}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode === 'light'?'dark':'light'}`} href='/'>{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" href='/'>Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode === 'light'?'dark':'light'}`} href='/about'>About</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode === 'light'?'dark':'light'}`} href='/contact'>Contact</a>
        </li>
      </ul>
      <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

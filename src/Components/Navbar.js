import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`"navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-20 my-sm-0" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick=
  {props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <div class="flex-end">
  <label className="form1-check-label" htmlfor="flexSwitchCheckDefault">Dark Button</label>
</div>
</div>
      
    </div>
  </nav>


  )
}
 Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired,
}

Navbar.defaultProps ={
    title:'Set title here',
    aboutText:'About'
};
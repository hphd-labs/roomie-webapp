import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render(){
    console.log(this.props)
    return (
     <nav className="navbar navbar-light">
       <Link to="/" className="navbar-brand">Roomie</Link>
     </nav>
    )
  }
}

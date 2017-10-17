import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {


  renderAuthenticatedNav(){
    if(this.props.auth.authenticated){
      return(
        <h1>Authd!</h1>
      )
    }
    else{
      return(
        <Link to="/signin" className="nav nav-item">Sign In</Link>
      )
    }
  }
  render(){
    console.log(this.props)
    return (
     <nav className="navbar navbar-light">
       <Link to="/" className="navbar-brand">Roomie</Link>
       <div className="collapse navbar-collapse">
       </div>

       {this.renderAuthenticatedNav()}

     </nav>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth }
}

export default connect(mapStateToProps,null)(Header);

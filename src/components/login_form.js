import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
  //Render the actual fields defined below
  renderField(field){
    return(
      <div>
        <label>{field.label}</label>
        <input
          type={field.type} className="form-control"
          {...field.input}
        />
      </div>
    )
  }

  render(){
    //Return a login Form
    return(
      <form>
        <Field
          label = "Enter your email address"
          name = "email"
          type= "text"
          component={this.renderField}
        />
        <Field
          label = "Enter your password"
          name = "password"
          type = "password"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'LoginForm'
})(LoginForm)

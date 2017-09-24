import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitLogin } from '../actions/index';

class LoginForm extends Component {
  //Render the actual fields defined below
  renderField(field){
    console.log(field);

    //Destructure into meta, meta.touched and meta.error from field.
    const { meta: {touched, error} } = field;

    //If the form element has been touched and has an error, change className
    // to become red and indicate to user of error.
    const className = `form-group ${touched && error ? 'has-danger': ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          type={field.type} className="form-control"
          {...field.input}
        />
        {touched ? error: ''}
      </div>
    )
  }

  onSubmit(values){
    this.props.submitLogin(values).then(console.log)
  }
  render(){
    const { handleSubmit } = this.props;

    //Return a login Form
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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

function validate(values){
  const errors = {};

  if(!values.email){
    errors.email = "Please enter a valid email address";
  }

  if(!values.password){
    errors.password = "Please enter a valid password";
  }

  return errors;
}


export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(null,  {submitLogin})(LoginForm)
)

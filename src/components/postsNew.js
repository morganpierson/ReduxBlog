import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input 
          className='form-control'
          type='text'
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field 
          name='title'
          label='Title'
          component={this.renderField}
        />
        <Field 
          name='categories'
          label='Categories'
          component={this.renderField}
        />
        <Field 
          name='content'
          label='Post Content'
          component={this.renderField}
        />
      </form>

    )
  }
}

function validate(values) {
  const errors = {};

  //Validate inputs from 'values'
  if(!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters long'
  }
  if(!values.categories) {
    errors.categories = 'Enter some categories!'
  }
  if(!values.content) {
    errors.content = 'Enter some content!'
  }
  //If errors is empty, the form is okay to submit
  //If errors has any properties, form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
// Example JS object used for CSS styling
import React from 'react'

const styles = {
  facebookBtn: {
    backgroundColor: 'rgb(51, 89, 157)'
  },
  form: {
    textAlign: 'center'
  }
}

class Login extends React.Component {
  handleOnSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
  };




  render() {
    return (
        <form style={styles.form} onSubmit={this.handleOnSubmit}>
          <h4>Welcome Back!</h4>
          <div className='form-group row'>
            <input className='input' type='text' placeholder='Email'/>
          </div>
          <div className='form-group row'>
            <input className='input' type='password' placeholder='Password'/>
          </div>
          <div className='form-group row'>
            <button className='btn' type='submit'>Log In</button>
          </div>
          <div className='form-group row'>
            <button className='fb' type='submit'>Sign Up</button>
          </div>
        </form>
      
    )
  }
}

class Form extends React.Component {
  render () {
    const {children, title} = this.props
    return (
      <div className='col-md-6 mx-auto'>
        <header>
          <h1>{title}</h1>
        </header>
        {children}
      </div>
    )
  }

  
}


export default Login
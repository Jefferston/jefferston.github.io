import Layout from './components/Layout';

import "../static/styles/style.scss";

import Link from 'next/link';

class Auth extends React.Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: ''
    }
  }

  handleChange = (ev) => {
    let target = ev.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    console.log(this.state)
  }

  render() {
  
    return (
      <div>
        <Layout>
          <div className="auth">
          <form method="post" className="login" onSubmit={this.handleSubmit}>
            <h2>Sign in</h2>

            <div className="form-group">
              <label htmlFor="login-login">Login</label>
              <input type="text" id="login-login" name="login" value={this.state.login} 
                      onChange={this.handleChange}/>
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input type="password" id="login-password" name="password" value={this.state.password} 
                      onChange={this.handleChange}/>
            </div>

            <div className="buttons">
                <button className="login-button">Log in</button>
                <Link href="/registration">
                    <button className="switch-button secondary-inverse">Registration</button>
                </Link>
            </div>

            </form>
          </div>
        </Layout>        
      </div>
    )
  }
}

export default Auth;
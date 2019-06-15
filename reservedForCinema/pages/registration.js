import Layout from './components/Layout';

import "../static/styles/style.scss";

import Link from 'next/link';

class Regitration extends React.Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: '',
      confirm: ''
    }
  }

  handleChange = ev => {
    let target = ev.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleClick = ev => {
    ev.preventDefault();


    let data = JSON.stringify(this.state);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', '/api/auth/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    xhr.send(data);
    xhr.onreadystatechange = ({ currentTarget }) => {
      if (currentTarget.readyState === 4) {
        let newData = JSON.parse(currentTarget.responseText);

        if (!newData.ok) {
          newData.fields.forEach(field => {
            let item = document.querySelector(`input[name=${field}]`);
            item.classList.add('error');
          });

          let text = document.querySelector('.textBlock .errorText');
          text.style.display = 'block';
          text.textContent = newData.error;
          document.querySelector('.textBlock .successText').style.display = 'none';

        } else {
          document.querySelectorAll('input').forEach(field => {
            field.classList.remove('error');
            field.value = '';

            let text = document.querySelector('.textBlock .successText');
            text.style.display = 'block';
            document.querySelector('.textBlock .errorText').style.display = 'none';
          })
        }
        
      }

    }
  }

  render() {
  
    return (
      <div>
        <Layout>
          <div className="auth">
            <form method="post" className="register">

                <div className="textBlock">
                  <h2>Registration</h2>
                  <p className="errorText"></p>
                  <p className="successText">Successfully registrated</p>
                </div>

                <div className="form-group">
                    <label htmlFor="register-login">Login</label>
                    <input type="text" id="register-login" value={this.state.login} name="login"
                      onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="register-password">Password</label>
                    <input type="password" id="register-password" value={this.state.password} name="password"
                      onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="register-password-confirm">Confirm password</label>
                    <input type="password" id="register-password-confirm" value={this.state.confirm} name="confirm"
                      onChange={this.handleChange}/>
                </div>

                <div className="buttons">
                    <button className="register-button" onClick={this.handleClick}>Confirm</button>
                    <Link href="/auth">
                        <button className="switch-button secondary-inverse">Sign in</button>
                    </Link>
                </div>

            </form>
          </div>
        </Layout>        
      </div>
    )
  }
}

export default Regitration;
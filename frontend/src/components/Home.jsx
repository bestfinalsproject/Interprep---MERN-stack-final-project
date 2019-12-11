import React, { Component } from "react";
import "./home.css";
import { Login } from ".";
import { Link } from "react-router-dom";
import { Signup } from ".";

export default class Home extends Component {
  state = {
    isSigningUp: false,
    activeForm: "login"
  };
  notify = () => {
    window.alert(
      "This feature isn't working right now, stay posted for future updates!"
    );
  };
  // toggleSignUp = () => {
  //   this.setState({ activeForm: 'signUp' });
  // };

  // conditionalSignup = () => {
  //   if (this.state.isSigningUp) {
  //     return <Signup />;
  //   } else {
  //     return (
  //     <div>

  //     </div>
  //     );
  //   }
  // };

  render() {
    const { isSigningUp, activeForm } = this.state;
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <Login
                      login={this.props.login}
                      {...this.props}
                      user={this.props.user}
                    />

                    <div className="text-center">
                      New to The Forge ?
                      <button onClick={this.toggleSignUp}>
                        <Link to={"/content/signup"}>Signup</Link>
                        {/* Sign up */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const FormComponent = {
//   signUp: SignUpForm,
//   login: LoginForm,
// }[activeForm]
// return (
//   <div>
//     <FormComponent />
//     <submit></submit>
//   </div>
// )

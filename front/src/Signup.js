import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      lastname: "",
      password: "",
      confirmPassword: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatenameField = this.updatenameField.bind(this);
    this.updatelastnameField = this.updatelastnameField.bind(this);
    this.updatepasswordField = this.updatepasswordField.bind(this);
    this.updateconfirmPasswordField = this.updateconfirmPasswordField.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateEmailField(e) {
    this.setState({ email: e.target.value });
    //console.log(e.target.value);
  }
  updatenameField(e) {
    this.setState({ name: e.target.value });
    // console.log(e.target.value);
  }
  updatelastnameField(e) {
    this.setState({ lastname: e.target.value });
    //console.log(e.target.value);
  }
  updatepasswordField(e) {
    this.setState({ password: e.target.value });
    // console.log(e.target.value);
  }
  updateconfirmPasswordField(e) {
    this.setState({ confirmPassword: e.target.value });
    //console.log(e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="formulaire">
        <form action="" className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            {" "}
            Renseignez votre email :
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.updateEmailField}
              value={this.state.email}
            />
          </label>
          <label htmlFor="name">
            {" "}
            Renseignez votre nom :
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.updatenameField}
              value={this.state.name}
            />
          </label>
          <label htmlFor="lastname">
            {" "}
            Renseignez votre prénom :
            <input
              className="form-control"
              type="text"
              name="lastname"
              onChange={this.updatelastnameField}
              value={this.state.lastname}
            />
          </label>
          <label htmlFor="password">
            {" "}
            Renseignez votre mot de passe :
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.updatepasswordField}
              value={this.state.password}
            />
          </label>
          <label htmlFor="confirmPassword">
            {" "}
            Confimer votre mot de passe :
            <input
              className="form-control"
              type="password"
              name="confirmPassword"
              onChange={this.updateconfirmPasswordField}
              value={this.state.confirmPassword}
            />
          </label>
          <button type="submit" value="Submit">
            Valider
          </button>
        </form>
        <h1>
          Vos données :<pre>{JSON.stringify(this.state, 1, 1)}</pre>
        </h1>
      </div>
    );
  }
}

export default Signup;

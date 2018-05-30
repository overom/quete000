import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.updateEmailField = this.updateEmailField.bind(this);
  }
  updateEmailField(e) {
    this.setState({ email: e.target.value });
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <form action="" className="form-group">
          <label htmlFor="email">
            {" "}
            Renseignez votre email :
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.updateEmailField}
            />
          </label>
        </form>
        <h1>Votre email :{this.state.email}</h1>
      </div>
    );
  }
}

export default Signup;

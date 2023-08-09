import React, { useState } from "react";

import Input from "./inputForm";

const user = {
  firtname: "",
  lastname: "",
  email: "",
  password: "",
  comfirmPassword: "",
};

function LoginAccout(props) {
  const [formValue, setFormValue] = useState(user);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("««««« formValue »»»»»", user);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login Account</h1>

        <div className="row flex-column">
          <div className="col mb-3">
            <Input
              type="email"
              label="Email"
              placeholder="Nhập Email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
          </div>

          <div className="col mb-3">
            <Input
              type="password"
              label="Password"
              placeholder="Nhập password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn-create btn-primary btn-block mb-4"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginAccout;

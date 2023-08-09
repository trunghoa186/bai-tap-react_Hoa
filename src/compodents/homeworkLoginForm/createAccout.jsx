import React, { useState } from "react";
import Input from "./inputForm";

// import "./formCreate.css";

const user = {
  firtname: "",
  lastname: "",
  email: "",
  password: "",
  comfirmPassword: "",
};

export default function CreateAccout(props) {
  const [formValue, setFormValue] = useState(user);

  // const handleChange = (event) => {
  //   const { value, name } = event.target;

  //   setFormValue({
  //     ...formValue,
  //     [name]: value,
  //   });
  // };

  console.log("««««« formValue »»»»»", formValue);

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
        <h1>Create new account</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <Input
              label="FirtName"
              placeholder="Nhập First name"
              name="firtname"
              value={formValue.firtname}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-4">
            <Input
              label="LastName"
              placeholder="Nhập Last name"
              name="lastname"
              value={formValue.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
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
          <div className="col mb-3">
            <Input
              type="confirm password"
              label="Comfirm Password"
              placeholder="Nhập comfirm password"
              name="comfirmpassword"
              value={formValue.comfirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn-create btn-primary btn-block mb-4"
        >
          Create account
        </button>
      </form>
    </div>
  );
}


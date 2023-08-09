import React, { useState } from 'react';

import { axiosClient } from 'helper/axiosClient';

function RegisterPage(){ 
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onRegister = async (e) => {
    e.preventDefault();

    const url = '/admin/employees';
    try {
      await axiosClient.post(url, user);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  const onChange = (e, fieldName) => {
    setUser((prev) => ({
      ...prev,
      [fieldName]: e.target.value,
    }));
  };

  return (
    <>
      <h1>Đăng kí</h1>
      <form className="p-5" onSubmit={onRegister}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={(e) => onChange(e, 'email')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={user.password}
            onChange={(e) => onChange(e, 'password')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Re-Password
          </label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={user.confirmPassword}
            onChange={(e) => onChange(e, 'confirmPassword')}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default RegisterPage;
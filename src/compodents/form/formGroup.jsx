import React, { useState } from 'react';

import InputGroup from 'components/form/inputGroup';

const FormGroup = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  })

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log('««««« user »»»»»', user);

    console.log('««««« user »»»»»', user);
    if (!user.password) {
      console.log('««««« vui lòng điền mk »»»»»');
    }

    if (user.password.length < 2) console.log('««««« mật khẩu quá ngắn »»»»»');

    if (user.password.length > 4) console.log('««««« mật khẩu quá dài »»»»»');

    // gọi API để gửi dữ liệu user lên
  };

  const onChangeInput = (value, name) => {
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Form group</h1>
      <form className="d-flex flex-column" onSubmit={onSubmitForm}>
        <InputGroup
          label="Username"
          name="username"
          value={user.username}
          onChange={onChangeInput}
        />

        <InputGroup
          label="First name"
          name="firstName"
          value={user.firstName}
          onChange={onChangeInput}
        />

        <InputGroup
          label="Last name"
          name="lastName"
          value={user.lastName}
          onChange={onChangeInput}
        />

        <InputGroup
          label="password"
          type="password"
          name="password"
          value={user.password}
          onChange={onChangeInput}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormGroup;
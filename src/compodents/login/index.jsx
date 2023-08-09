import React, { useState, useEffect } from "react";
import { axiosClient } from "helper/axiosClient";
import { useNavigate } from "react-router-dom";

import { DEFAULT, LOCATION } from 'constants/index';

function Login(props) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async (e) => {
    e.preventDefault();

    const url = "/admin/employees/login";

    //  sử dụng fetch
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     // Xử lý kết quả JSON ở đây
    //     console.log(json);
    //   })
    //   .catch((error) => {
    //     // Nếu có lỗi
    //     console.error(error);
    //   });

    // dùng axios thay cho fetch để code ngắn
    // axios
    // .post(url, user)
    // .then((result) => {
    //   console.log(result.data);
    //   console.log('Login thành công');
    // })
    // .catch((err) => {
    //   console.error(err);
    //   console.log('Login thất bại');
    // });

    // sử dụng async await và try catch để  chạy
    try {
      // Promise
      const response = await axiosClient.post(url, user);

      localStorage.setItem(DEFAULT.TOKEN, response.data.token);
      localStorage.setItem(DEFAULT.REFRESH_TOKEN, response.data.refreshToken);

      if (response && response.data.token) {
        navigate(LOCATION.HOME);
      }

    } catch (err) {
      console.error(err);
      console.log("Login thất bại");
    }
  };

  const onChange = (e, fieldName) => {
    setUser((prev) => ({
      ...prev,
      [fieldName]: e.target.value,
    }));
  };

  const token = localStorage.getItem(DEFAULT.TOKEN);

  useEffect(() => {
    if (token) {
      navigate(LOCATION.HOME);
    }
  }, [navigate, token]);

  return (
    <>
      <h1>Đăng nhập</h1>
      <form className="p-5" onSubmit={onLogin}>
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
            onChange={(e) => onChange(e, "email")}
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
            onChange={(e) => onChange(e, "password")}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;

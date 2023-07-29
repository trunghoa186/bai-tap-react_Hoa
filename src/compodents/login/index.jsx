import React, { useState } from "react";
import axios from 'axios';

function Login(props) {

  const [user,setUser] = useState({
    email: '',
    password: '',
  }); 
  
  const onChangeUser = (name) => (e) => {
    setUser((prev) => ({
      ...prev,
      [name]: e.target.value,
    }))
  } 

  const onLogin = async (e) => {

    e.preventDefault();
  

    const url = 'https://batch-293-0-nodejs.onrender.com/admin/employees/login';
    
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
      const response = await axios.post(url, user);
      console.log(response.data);
    } catch (err) {
      console.error(err);
      console.log('Login thất bại');
    }
  };
  return (
    <div>
      <form>
        {/* Email input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input 
            type="email" 
            id="form2Example1" 
            className="form-control" 
            value={user.email}
            onChange={onChangeUser('email')}
            />
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input 
            type="password" 
            id="form2Example2" 
            className="form-control" 
            value={user.password}
            onChange={onChangeUser('password')}
            />
        </div>
            
        {/* Submit button */}
        <button onClick={onLogin} className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;

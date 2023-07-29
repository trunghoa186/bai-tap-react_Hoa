import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import InputGroup from "./inputGroup";

import "./homeworksForm.css";

function HomeworksForm(props) {
  const validation = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      // username: Yup.string()
      //   .min(6, 'Mininum 6 characters')
      //   .max(12, 'Maximum 12 characters')
      //   .required('Eh điền đi mày'),

      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng điền email"),

      firstName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(50, "Maximum 50 characters")
        .required("Nhập tên!"),

      lastName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(50, "Maximum 50 characters")
        .required("Nhập họ!"),

      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .max(12, "Minimum 12 characters")
        .required("Required!"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required nhập lại MK"),
    }),
  });
  return (
    <div>
      <h1>Form group</h1>
      <div className="d-flex flex-column">
        <InputGroup
          placeholder="First Name"
          name="firstName"
          validation={validation}
        />

        <InputGroup
          placeholder="Last Name"
          name="lastName"
          validation={validation}
        />
        <InputGroup
        placeholder="Email"
          name="email"
          validation={validation}
          // classNamees="invalid"
          // classNamees={isValidEmail() ? "valid" : "invalid"}
        />

        {/* {isValidEmail && <p className="text-danger">{validation.errors.email}</p>} */}

        <InputGroup
          placeholder="Password"
          type="password"
          name="password" 
          validation={validation} />

        <InputGroup
          placeholder="Confirm Password"
          type="confirmPassword"
          name="confirmPassword"
          validation={validation}
        />

        <button onClick={validation.handleSubmit}>Click to submit</button>
      </div>
    </div>
  );
}

export default HomeworksForm;

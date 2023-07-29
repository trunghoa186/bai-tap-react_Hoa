import React from "react";

function InputGroup({
  label,
  type = "text",
  name,
  placeholder = "Please type in here",
  validation,
}) {
  const isValid = () => {
    if (validation.errors[name] && validation.touched[name]) {
      return false;
    }

    return true;
  };

  return (
    <label>
      {label}:
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={validation.values[name]} // validation.values.email
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        className={isValid() ? 'valid' : 'invalid'}
        // validation={(e) => validation(e.target.value, name)}
      />
      {!isValid() && <p className="text-danger">{validation.errors[name]}</p>}
    </label>
  );
}

export default InputGroup;

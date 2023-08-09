export default function Input({
    label,
    type = "text",
    name,
    icon,
    placeholder,
    validation,
    onChange,
  }) {
    return (
      <div className="form-outline">
        <label className="form-label">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="form-control"
          onChange={onChange}
        />
      </div>
    );
  }
import React from "react";

const InputField =({ value, label, name, placeholder, type, onChange }) => (
    <div>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );

  export default InputField;
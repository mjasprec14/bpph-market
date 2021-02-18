import React from "react";
import "./form-input.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form__group">
    <input className="form__input" onChange={handleChange} {...otherProps} />

    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form__input--label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

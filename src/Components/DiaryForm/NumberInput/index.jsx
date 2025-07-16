import React from "react";
import './NumberInput.css';

export default function NumberInput({ label, value, onChange, min, max }) {
  return (
    <>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </>
  );
}

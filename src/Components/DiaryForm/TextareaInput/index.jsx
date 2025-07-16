import React from "react";
import './TextareaInput.css';

export default function TextareaInput({ label, value, onChange, rows = 3 }) {
  return (
    <>
      <label>{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </>
  );
}

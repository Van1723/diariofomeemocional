import React from "react";
import './TextareaInput.css';

export default function TextareaInput({  value, onChange, rows = 3 }) {
  return (
    <>
     
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </>
  );
}

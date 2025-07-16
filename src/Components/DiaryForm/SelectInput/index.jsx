import React from "react";
import './SelectInput.css';

export default function SelectInput({ label, value, onChange, options }) {
  return (
    <div className="select-input">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="">Selecione</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}



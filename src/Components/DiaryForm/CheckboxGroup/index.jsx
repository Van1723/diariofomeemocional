import React from "react";
import './CheckboxGroup.css';

export default function CheckboxGroup({ legend, items, selectedItems, onChange }) {
  return (
    <fieldset className="checkbox-group">
      <legend>{legend}</legend>
      <div className="checkbox-list">
        {items.map(item => (
          <label key={item}>
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => onChange(item)}
            />
            {item}
          </label>
        ))}
      </div>
    </fieldset>
  );
}


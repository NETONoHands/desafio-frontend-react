import React from "react";
import CloseIcon from "../assets/X.svg";

export function TextInput({ value, onChange, placeholder, label }) {

  function handleClear() {
    onChange("");
  }

  return (
    <div className="textinput flex flex-col mb-4">
      {label && <label className="textinput__label mb-1 font-medium text-sm">{label}</label>}
      <div className="textinput__wrapper relative flex items-center">
        <input
          type="text"
          className="textinput__input w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:border-purple-700"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
        {value && (
          <button
            type="button"
            className="textinput__clearButton absolute right-2 p-1"
            onClick={handleClear}
          >
            <img src={CloseIcon} alt="limpar" className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

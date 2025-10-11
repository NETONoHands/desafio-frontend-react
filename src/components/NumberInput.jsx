import React from 'react';

export function NumberInput({ label, value, onChange, helpText }) {
  return (
    <div className="flex flex-col gap-1 w-fit">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          className="px-3 py-2 text-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          disabled={value <= 0}
        >
          –
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-12 text-center text-sm"
        />
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="px-3 py-2 text-lg text-gray-600 hover:bg-gray-100"
        >
          +
        </button>
      </div>
      {helpText && <span className="text-xs text-gray-500">{helpText}</span>}
    </div>
  );
}

import { useState } from "react";

export default function MobileStep({ onNext, onUpdate }) {
  const [value, setValue] = useState("");

  const isValid = value.length === 10;

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onUpdate({ mobile: e.target.value });
        }}
        placeholder="Enter mobile number"
      />

      <button disabled={!isValid} onClick={onNext}>
        Continue
      </button>
    </div>
  );
}

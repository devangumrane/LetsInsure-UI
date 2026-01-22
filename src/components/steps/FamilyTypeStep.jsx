import React from "react";

export default function FamilyTypeStep({ onNext, onUpdate }) {
  return (
    <div>
      <button onClick={() => {
        onUpdate({ familyType: "self" });
        onNext();
      }}>
        Self
      </button>

      <button onClick={() => {
        onUpdate({ familyType: "family" });
        onNext();
      }}>
        Family
      </button>
    </div>
  );
}

import { useState } from "react";
import { healthFlowSteps } from "./healthFlowConfig";

// STEP COMPONENTS (only the ones that exist)
import MobileStep from "./steps/MobileStep";
import FamilyTypeStep from "./steps/FamilyTypeStep";

export default function HealthFlow() {
  // Flow control
  const [step, setStep] = useState(1);

  // Shared data store
  const [formData, setFormData] = useState({
    mobile: "",
    familyType: null,
    members: [],
    diseases: [],
    pincode: "",
  });

  // Move forward safely
  function next() {
    setStep((s) => Math.min(s + 1, healthFlowSteps.length));
  }

  // Shared updater
  function update(data) {
    setFormData((prev) => ({ ...prev, ...data }));
  }

  // DEBUG (keep this for now)
  console.log("STEP:", step, "DATA:", formData);

  return (
    <>
      {step === 1 && (
        <MobileStep
          onNext={next}
          onUpdate={update}
        />
      )}

      {step === 2 && (
        <FamilyTypeStep
          onNext={next}
          onUpdate={update}
        />
      )}

      {/* 🚫 DO NOT ADD MORE STEPS YET */}
    </>
  );
}

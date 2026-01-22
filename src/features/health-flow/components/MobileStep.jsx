export default function MobileStep({ onNext, onUpdate }) {
  return (
    <div>
      <input
        placeholder="Enter mobile number"
        onChange={(e) => onUpdate({ mobile: e.target.value })}
      />
      <button onClick={onNext}>Continue</button>
    </div>
  );
}

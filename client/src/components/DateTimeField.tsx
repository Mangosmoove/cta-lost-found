import { fieldClass, labelClass } from "./FormStyles";

type DateTimeFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  max?: string;
  min?: string;
};

const DateTimeField = ({
  id,
  label,
  value,
  onChange,
  required = false,
  max,
  min,
}: DateTimeFieldProps) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    <input
      id={id}
      type="datetime-local"
      required={required}
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={fieldClass}
    />
  </div>
);

export default DateTimeField;

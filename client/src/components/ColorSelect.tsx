import { COLORS } from "../utils/colors";
import { fieldClass, labelClass } from "./FormStyles";

type ColorSelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

const ColorSelect = ({
  id,
  label,
  value,
  onChange,
  required = false,
}: ColorSelectProps) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    <select
      id={id}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={fieldClass}
    >
      <option value="">Choose a color</option>
      {COLORS.map((c) => (
        <option key={c}>{c}</option>
      ))}
    </select>
  </div>
);

export default ColorSelect;

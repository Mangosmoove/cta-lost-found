import { COLORS } from "../utils/colors";
import { fieldClass, labelClass } from "./FormStyles";

type ColorSelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  exclude?: string; // hide a color already chosen in another picker
};

const ColorSelect = ({
  id,
  label,
  value,
  onChange,
  required = false,
  exclude,
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
      <option value="">{required ? "Choose a color" : "None"}</option>
      {COLORS.filter((c) => c !== exclude).map((c) => (
        <option key={c}>{c}</option>
      ))}
    </select>
  </div>
);

export default ColorSelect;

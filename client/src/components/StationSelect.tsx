import { STATIONS } from "../utils/train-info";
import { fieldClass, labelClass } from "./FormStyles";

type StationSelectProps = {
  id: string;
  label: string;
  line: string; // "" until a line is chosen
  value: string; // plain station name
  onChange: (value: string) => void;
  required?: boolean;
};

const StationSelect = ({
  id,
  label,
  line,
  value,
  onChange,
  required = false,
}: StationSelectProps) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    <select
      id={id}
      required={required}
      disabled={!line}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={fieldClass}
    >
      <option value="">
        {!line
          ? "Choose a line first"
          : required
            ? "Choose a station"
            : "Not sure"}
      </option>
      {line && STATIONS[line].map((s) => <option key={s}>{s}</option>)}
    </select>
  </div>
);

export default StationSelect;

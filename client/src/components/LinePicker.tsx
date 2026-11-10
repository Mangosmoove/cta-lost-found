import { LINES } from "../utils/train-info";

type LinePickerProps = {
  name?: string; // must be unique per picker on a page
  multiple?: boolean;
  value: string[];
  onChange: (value: string[]) => void;
};

const LinePicker = ({
  name = "line",
  multiple = false,
  value,
  onChange,
}: LinePickerProps) => {
  const toggle = (lineName: string) => {
    if (!multiple) return onChange([lineName]);
    onChange(
      value.includes(lineName)
        ? value.filter((n) => n !== lineName)
        : [...value, lineName],
    );
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {LINES.map((line) => (
        <label key={line.name} className="cursor-pointer">
          <input
            type={multiple ? "checkbox" : "radio"}
            name={name}
            value={line.name}
            required={!multiple}
            checked={value.includes(line.name)}
            onChange={() => toggle(line.name)}
            className="peer sr-only"
          />
          <span className="flex items-center gap-3 rounded-2xl border-2 border-[#e0dcd0] bg-white px-4 py-3 peer-checked:border-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy">
            <span className={`size-3 rounded-full ${line.color}`} />
            {line.name}
          </span>
        </label>
      ))}
    </div>
  );
};

export default LinePicker;

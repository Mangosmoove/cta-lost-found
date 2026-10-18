import { LINES } from "../data/train-info";

type LinePickerProps = {
  multiple?: boolean;
  value: string[];
  onChange: (value: string[]) => void;
};

const LinePicker = ({ multiple = false, value, onChange }: LinePickerProps) => {
  const toggle = (name: string) => {
    if (!multiple) return onChange([name]);
    onChange(
      value.includes(name) ? value.filter((n) => n !== name) : [...value, name],
    );
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {LINES.map((line) => (
        <label key={line.name} className="cursor-pointer">
          <input
            type={multiple ? "checkbox" : "radio"}
            name="line"
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

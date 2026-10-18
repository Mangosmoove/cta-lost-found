import { fieldClass, labelClass } from "./FormStyles";

type CategorySelectProps = {
  value: string;
  onChange: (value: string) => void;
};

const CATEGORIES = [
  "Wallet/ID",
  "Phone",
  "Keys",
  "Bag",
  "Accessories",
  "Clothing",
  "Umbrella",
  "Other",
];

const CategorySelect = ({ value, onChange }: CategorySelectProps) => (
  <div>
    <label htmlFor="category" className={labelClass}>
      Category
    </label>
    <select
      id="category"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={fieldClass}
    >
      {CATEGORIES.map((c) => (
        <option key={c}>{c}</option>
      ))}
    </select>
  </div>
);

export default CategorySelect;

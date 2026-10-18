import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { STATIONS } from "../data/train-info";
import LineStripe from "../components/LineStripe";
import LinePicker from "../components/LinePicker";
import CategorySelect from "../components/CategorySelect";
import PhotoUpload from "../components/PhotoUpload";
import { fieldClass, hintClass, labelClass } from "../components/FormStyles";

const Found = () => {
  const [category, setCategory] = useState("Wallet/ID");
  const [color, setColor] = useState("");
  const [lineName, setLineName] = useState("");
  const [station, setStation] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const stations = lineName ? STATIONS[lineName] : [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // implement: send to the API, then navigate to my activity
    console.log({ category, color, lineName, station, description, photo });
  };

  return (
    <div>
      <div className="mb-3 flex items-center gap-4">
        <Link to="/" aria-label="Back to home" className="p-1">
          <ArrowLeft size={22} />
        </Link>
        <h1 className="text-xl font-bold">I found something</h1>
      </div>

      <div className="mb-6 flex h-1.5 w-full overflow-hidden rounded-full">
        <LineStripe />
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <CategorySelect value={category} onChange={setCategory} />

        <div>
          <label htmlFor="color" className={labelClass}>
            Item color *
          </label>
          <input
            id="color"
            type="text"
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="e.g. Black"
            className={fieldClass}
          />
        </div>

        {/* train line item was found */}
        <fieldset>
          <legend className={labelClass}>Train Line it was found *</legend>
          <LinePicker
            value={lineName ? [lineName] : []}
            onChange={([name]) => {
              setLineName(name);
              setStation(STATIONS[name][0]); // default to the first station
            }}
          />
        </fieldset>

        {/* return station */}
        <div>
          <label htmlFor="station" className={labelClass}>
            Station where you'll hand it in *
          </label>
          <select
            id="station"
            required
            disabled={!lineName}
            value={station}
            onChange={(e) => setStation(e.target.value)}
            className={fieldClass}
          >
            {!lineName && <option value="">Choose a line above first</option>}
            {stations.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {!lineName && <p className={hintClass}>Pick a line first.</p>}
        </div>

        <div>
          <label htmlFor="description" className={labelClass}>
            Short description
          </label>
          <textarea
            id="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Where you found it, what it looks like"
            className={fieldClass}
          />
        </div>

        <PhotoUpload
          onChange={setPhoto}
          showHelperText={category === "Wallet/ID"}
        />

        <button
          type="submit"
          className="rounded-full bg-navy py-4 text-base font-bold text-white shadow-[0_4px_0_0_#0a1630] active:translate-y-0.5 active:shadow-none"
        >
          Submit and get QR code
        </button>
      </form>
    </div>
  );
};

export default Found;

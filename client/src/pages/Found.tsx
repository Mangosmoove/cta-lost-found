import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import LineStripe from "../components/LineStripe";
import LinePicker from "../components/LinePicker";
import StationSelect from "../components/StationSelect";
import CategorySelect from "../components/CategorySelect";
import ColorSelect from "../components/ColorSelect";
import DateTimeField from "../components/DateTimeField";
import PhotoUpload from "../components/PhotoUpload";
import { toLocalInput } from "../utils/datetime";
import { fieldClass, hintClass, labelClass } from "../components/FormStyles";

const Found = () => {
  const [category, setCategory] = useState("Wallet/ID");
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");
  const [lineName, setLineName] = useState("");
  const [foundStation, setFoundStation] = useState("");
  const [foundAt, setFoundAt] = useState(() => toLocalInput(new Date()));
  const [handInLine, setHandInLine] = useState("");
  const [handInStation, setHandInStation] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // implement: send to the API, then navigate to my activity
    console.log({
      category,
      colors: [color, color2].filter(Boolean),
      line: lineName,
      foundStation,
      foundAt,
      handInLine,
      handInStation,
      description,
      photo,
    });
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

        <ColorSelect
          id="color"
          label="Main color *"
          value={color}
          onChange={(c) => {
            setColor(c);
            if (c === "Multicolor") setColor2("");
          }}
          required
        />

        {color && color !== "Multicolor" && (
          <ColorSelect
            id="color2"
            label="Second color (optional)"
            value={color2}
            onChange={setColor2}
            exclude={color}
          />
        )}

        {/* line it was found on */}
        <fieldset>
          <legend className={labelClass}>Train line it was found on *</legend>
          <LinePicker
            name="foundLine"
            value={lineName ? [lineName] : []}
            onChange={([name]) => {
              setLineName(name);
              setFoundStation("");
            }}
          />
        </fieldset>

        <StationSelect
          id="foundStation"
          label="Stop where you found it (optional)"
          line={lineName}
          value={foundStation}
          onChange={setFoundStation}
        />

        <DateTimeField
          id="foundAt"
          label="When did you find it? *"
          value={foundAt}
          onChange={setFoundAt}
          max={toLocalInput(new Date())}
          required
        />

        {/* hand-in can be any station on any line */}
        <fieldset className="grid gap-4">
          <legend className={labelClass}>Where will you hand it in? *</legend>
          <LinePicker
            name="handInLine"
            value={handInLine ? [handInLine] : []}
            onChange={([name]) => {
              setHandInLine(name);
              setHandInStation("");
            }}
          />
          <StationSelect
            id="handInStation"
            label="Station *"
            line={handInLine}
            value={handInStation}
            onChange={setHandInStation}
            required
          />
          {foundStation &&
            !(handInLine === lineName && handInStation === foundStation) && (
              <button
                type="button"
                onClick={() => {
                  setHandInLine(lineName);
                  setHandInStation(foundStation);
                }}
                className="justify-self-start rounded-full border-2 border-navy px-4 py-1.5 font-bold"
              >
                Same as where I found it
              </button>
            )}
          <p className={hintClass}>You can hand it in at any CTA station.</p>
        </fieldset>

        <div>
          <label htmlFor="description" className={labelClass}>
            Short description
          </label>
          <textarea
            id="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What it looks like, any brand or distinctive features"
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

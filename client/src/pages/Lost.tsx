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
import PageHeader from "../components/PageHeader";

const errorClass = "mt-2 font-bold text-red-line";

const Lost = () => {
  const [category, setCategory] = useState("Wallet/ID");
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  const [lostLine, setLostLine] = useState(""); // line they think they lost it on
  const [lostStation, setLostStation] = useState("");
  const [lostFrom, setLostFrom] = useState("");
  const [lostTo, setLostTo] = useState(() => toLocalInput(new Date()));
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [linesError, setLinesError] = useState("");
  const [timeError, setTimeError] = useState("");

  const now = toLocalInput(new Date());

  const handleLinesChange = (next: string[]) => {
    setLines(next);
    setLinesError("");

    // allow several train lines to be selected
    const nextLostLine =
      next.length === 1 ? next[0] : next.includes(lostLine) ? lostLine : "";
    if (nextLostLine !== lostLine) {
      setLostLine(nextLostLine);
      setLostStation(""); // old station may not be on the new line
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (lines.length === 0) {
      setLinesError("Please pick at least one line.");
      return;
    }
    if (lostFrom >= lostTo) {
      setTimeError("The start time must be before the end time.");
      return;
    }

    // later implement api fun stuff
    console.log({
      category,
      colors: [color, color2].filter(Boolean),
      lines,
      lost_line: lostLine || null,
      lost_station: lostStation || null,
      lost_from: lostFrom,
      lost_to: lostTo,
      description,
      photo,
    });
  };

  return (
    <div>
      <PageHeader title="I lost something" />

      <form onSubmit={handleSubmit} className="grid gap-6">
        {/* item category */}
        <CategorySelect value={category} onChange={setCategory} />

        {/* item color selector */}
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

        {/* every line they rode */}
        <fieldset>
          <legend className={labelClass}>Line(s) you rode *</legend>
          <p className="mb-3 text-gray-500">
            Select every line you rode. If you're not sure, pick all that might
            apply.
          </p>
          <LinePicker
            name="lines"
            multiple
            value={lines}
            onChange={handleLinesChange}
          />
          {linesError && (
            <p className={errorClass} role="alert">
              {linesError}
            </p>
          )}
        </fieldset>

        {/* where they think they lost it */}
        {lines.length > 0 && (
          <fieldset className="grid gap-4">
            <legend className={labelClass}>
              Where do you think you lost it? (optional)
            </legend>

            {lines.length > 1 && (
              <div>
                <label htmlFor="lostLine" className={labelClass}>
                  Which line?
                </label>
                <select
                  id="lostLine"
                  value={lostLine}
                  onChange={(e) => {
                    setLostLine(e.target.value);
                    setLostStation("");
                  }}
                  className={fieldClass}
                >
                  <option value="">Not sure</option>
                  {lines.map((l) => (
                    <option key={l} value={l}>
                      {l} Line
                    </option>
                  ))}
                </select>
              </div>
            )}

            <StationSelect
              id="lostStation"
              label="Station"
              line={lostLine}
              value={lostStation}
              onChange={setLostStation}
            />
            <p className={hintClass}>
              A best guess is fine. We'll still check the rest of the lines.
            </p>
          </fieldset>
        )}

        {/* time window */}
        <fieldset className="grid gap-4">
          <DateTimeField
            id="lostFrom"
            label="Lost between *"
            value={lostFrom}
            onChange={(v) => {
              setLostFrom(v);
              setTimeError("");
            }}
            max={lostTo || now}
            required
          />
          <DateTimeField
            id="lostTo"
            label="and *"
            value={lostTo}
            onChange={(v) => {
              setLostTo(v);
              setTimeError("");
            }}
            min={lostFrom || undefined}
            max={now}
            required
          />
          <p className={hintClass}>
            Best guess is fine. A shorter window gives better matches.
          </p>
          {timeError && (
            <p className={errorClass} role="alert">
              {timeError}
            </p>
          )}
        </fieldset>

        {/* description */}
        <div>
          <label htmlFor="description" className={labelClass}>
            Describe your item *
          </label>
          <textarea
            id="description"
            rows={4}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g. Black iPhone, cracked screen protector, fuzzy purple keychain"
            className={fieldClass}
          />
          <p className={hintClass}>
            Include the brand and anything distinctive or inside it. Staff use
            this to verify it's yours at pickup, so details only you'd know help
            most. Don't enter full card or ID numbers.
          </p>
        </div>

        {/* photo upload */}
        <PhotoUpload
          onChange={setPhoto}
          showHelperText={category === "Wallet/ID"}
        />

        <button
          type="submit"
          className="rounded-full bg-navy py-4 text-base font-bold text-white shadow-[0_4px_0_0_var(--color-dark-navy)] active:translate-y-0.5 active:shadow-none"
        >
          Submit report
        </button>
      </form>
    </div>
  );
};

export default Lost;

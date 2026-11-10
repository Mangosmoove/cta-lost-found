import { useState } from "react";
import { ShieldAlert, X } from "lucide-react";
import { fieldClass } from "./FormStyles";

type PhotoUploadProps = {
  onChange: (file: File | null) => void;
  showHelperText?: boolean;
};

const PhotoUpload = ({
  onChange,
  showHelperText = false,
}: PhotoUploadProps) => {
  const [confirmed, setConfirmed] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const updateFile = (next: File | null) => {
    setFile(next);
    onChange(next);
  };

  return (
    <div className="grid gap-3">
      <label htmlFor="photo" className="block text-base font-bold">
        Photo (optional)
      </label>

      <div className="flex gap-3 rounded-2xl border-2 border-warning-border bg-warning-bg p-4 text-warning-text">
        <ShieldAlert size={20} className="mt-0.5 shrink-0" aria-hidden />
        <p>Don't include IDs, cards, or personal documents in the photo.</p>
      </div>

      {showHelperText && (
        <p className="rounded-2xl bg-info-bg px-4 py-3 text-info-text">
          For wallets and IDs, we suggest skipping the photo entirely.
        </p>
      )}

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => {
            setConfirmed(e.target.checked);
            if (!e.target.checked) updateFile(null);
          }}
          className="mt-1 size-5 shrink-0 accent-navy"
        />
        <span>
          I confirm my photo (if any) shows no IDs, cards, or personal
          documents.
        </span>
      </label>

      {file ? (
        <div className="flex items-center gap-4 rounded-2xl border-2 border-form-border bg-white px-4 py-3">
          <p className="min-w-0 flex-1 truncate">{file.name}</p>
          <button
            type="button"
            onClick={() => updateFile(null)}
            className="flex shrink-0 items-center gap-1 rounded-full border-2 border-navy px-3 py-1.5 font-bold"
          >
            <X size={16} aria-hidden />
            Remove
          </button>
        </div>
      ) : (
        <>
          <input
            id="photo"
            type="file"
            accept="image/*"
            disabled={!confirmed}
            onChange={(e) => updateFile(e.target.files?.[0] ?? null)}
            className={`${fieldClass} file:mr-3 file:rounded-lg file:border-0 file:bg-info file:px-3 file:py-2 file:font-bold`}
          />
          {!confirmed && (
            <p className="text-gray-500">
              Tick the box above to choose a photo.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default PhotoUpload;

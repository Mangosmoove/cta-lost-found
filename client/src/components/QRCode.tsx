import { QRCodeSVG } from "qrcode.react";

type QRCodeProps = {
  value: string;
  label: string; // ARIA description
  caption?: string; // id shown under the code
};

const QRCode = ({ value, label, caption }: QRCodeProps) => (
  <div className="mx-auto w-fit rounded-3xl border-2 border-form-border bg-white p-6">
    <QRCodeSVG
      value={value}
      size={224}
      level="M"
      role="img"
      aria-label={label}
      className="h-auto w-full max-w-56"
    />
    {caption && (
      <p className="mt-3 text-center font-mono text-sm text-gray-500">
        {caption}
      </p>
    )}
  </div>
);

export default QRCode;

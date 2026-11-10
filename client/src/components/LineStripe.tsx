import { LINES } from "../utils/train-info";

const LineStripe = () => (
  <>
    {LINES.map((line) => (
      <div key={line.name} className={`flex-1 ${line.color}`} />
    ))}
  </>
);

export default LineStripe;

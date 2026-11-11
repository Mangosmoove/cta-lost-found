import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import LineStripe from "./LineStripe";

type PageHeaderProps = {
  title: string;
  backTo?: string;
};

const PageHeader = ({ title, backTo = "/" }: PageHeaderProps) => (
  <>
    <div className="mb-3 flex items-center gap-4">
      <Link to={backTo} aria-label="Back to home" className="p-1">
        <ArrowLeft size={22} />
      </Link>
      <h1 className="text-xl font-bold">{title}</h1>
    </div>

    <div className="mb-6 flex h-1.5 w-full overflow-hidden rounded-full">
      <LineStripe />
    </div>
  </>
);

export default PageHeader;

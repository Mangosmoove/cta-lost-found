import type { ReactNode } from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

type CardProps = {
  to: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  cardClass: string;
  iconBoxClass: string;
};

const Card = ({
  to,
  title,
  subtitle,
  icon,
  cardClass,
  iconBoxClass,
}: CardProps) => {
  return (
    <Link
      to={to}
      className={`flex w-full items-center gap-4 rounded-3xl p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12264a] ${cardClass}`}
    >
      <span
        className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${iconBoxClass}`}
      >
        {icon}
      </span>
      <span className="flex-1">
        <span className="block text-xl font-bold">{title}</span>
        <span className="block text-base">{subtitle}</span>
      </span>
      <ChevronRight size={28} aria-hidden />
    </Link>
  );
};

export default Card;

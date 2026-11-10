import { Link } from "react-router";
import { HandHeart, ListChecks, Search } from "lucide-react";
import Card from "../components/Card";
import ChicagoStar from "../components/ChicagoStar";
import LineStripe from "../components/LineStripe";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#3f86b8] via-info-text to-navy p-6 text-white shadow-lg">
        <ChicagoStar className="absolute -right-4 -top-4 h-24 w-24 text-white/10" />
        <ChicagoStar className="absolute -bottom-6 right-16 h-16 w-16 text-white/10" />

        <h2 className="text-sm font-semibold tracking-widest text-white/80 uppercase">
          Chicago Transit Authority
        </h2>
        <h1 className="mt-2 text-5xl font-extrabold">Lost &amp; Found</h1>
        <p className="mt-4 text-lg text-white/90">
          Help a fellow rider, or get your items back.
        </p>

        <div className="mt-6 flex h-2 w-full overflow-hidden rounded-full">
          <LineStripe />
        </div>
      </section>

      {/* two action cards */}
      <Card
        to="/found"
        title="I found something"
        subtitle="Log it, then hand it in at a station"
        icon={<HandHeart size={30} />}
        cardClass="bg-sky text-navy shadow-[0_6px_0_0_var(--color-navy)],0_14px_24px_-6px_rgba(0,0,0,0.25)]"
        iconBoxClass="bg-white/70"
      />
      <Card
        to="/lost"
        title="I lost something"
        subtitle="We'll tell you if it's turned in"
        icon={<Search size={30} />}
        cardClass="bg-navy text-white shadow-[0_6px_0_0_var(--color-dark-navy)],0_14px_24px_-6px_rgba(0,0,0,0.3)]"
        iconBoxClass="bg-white/15"
      />

      {/* Secondary action */}
      <Link
        to="/activity"
        className="flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-white py-3 text-lg font-bold"
      >
        <ListChecks size={22} />
        My activity
      </Link>
    </div>
  );
};

export default Home;

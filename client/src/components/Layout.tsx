import { Link, Outlet } from "react-router";
import ChicagoStar from "./ChicagoStar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-cream text-navy">
      <div className="mx-auto w-full max-w-md px-4 py-6">
        <header className="mb-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <ChicagoStar className="h-4 w-4 text-chicago-star" />
            CTA Riders
          </Link>
          <Link to="/sign-in" className="font-bold">
            Sign in
          </Link>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

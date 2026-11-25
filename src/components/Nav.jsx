import { NavLink } from "react-router";
import { PERFIL, NAV_ITEMS } from "../data";

export function Nav() {
  const iniciales = PERFIL.nombre
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#262B36] bg-[#0F1115]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-mono text-sm font-medium text-[#E8E6E3]">
          {`<${iniciales} />`}
        </NavLink>
        <div className="hidden gap-6 sm:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `font-mono text-sm transition-colors ${
                  isActive ? "text-[#7C9EFF]" : "text-[#8A8F98] hover:text-[#7C9EFF]"
                }`
              }
            >
              {`<${item.label}/>`}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

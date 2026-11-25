import { PERFIL } from "../data";

export function Footer() {
  return (
    <footer className="border-t border-[#262B36] px-6 py-8">
      <p className="mx-auto max-w-5xl font-mono text-xs text-[#4B515C]">
        © {new Date().getFullYear()} {PERFIL.nombre} — hecho con React + Tailwind
      </p>
    </footer>
  );
}

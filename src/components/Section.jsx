import { useReveal } from "./useReveal";

// Envuelve el contenido con una etiqueta de apertura/cierre estilo JSX: <Nombre> ... </Nombre>
export function Section({ id, name, className = "", children }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-3 font-mono text-sm text-[#7C9EFF]">{`<${name}>`}</p>
        {children}
        <p className="mt-10 font-mono text-xs text-[#4B515C]">{`</${name}>`}</p>
      </div>
    </section>
  );
}

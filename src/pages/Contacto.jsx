import { Section } from "../components/Section";
import { SocialLink } from "../components/SocialLink";
import { SOCIAL_LINKS } from "../data";

export default function Contacto() {
  return (
    <div className="pt-24">
      <Section id="contacto" name="Contacto">
        <h1
          className="mb-3 text-2xl font-bold text-[#E8E6E3]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Hablemos de tu proyecto
        </h1>
        <p className="mb-6 max-w-md text-[15px] text-[#8A8F98]">
          Escríbeme por email o encuéntrame en estas redes.  También puedes ver más proyectos que no están subidos en mi perfil de gitlab.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {SOCIAL_LINKS.map((social) => (
            <SocialLink key={social.name} {...social} />
          ))}
        </div>
      </Section>
    </div>
  );
}

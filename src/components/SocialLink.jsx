export function SocialLink({ name, href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-lg border border-[#262B36] bg-[#171A21] px-4 py-3 text-[#E8E6E3] transition-colors hover:border-[#7C9EFF] hover:text-[#7C9EFF]"
    >
      <Icon className="h-5 w-5" />
      <span className="font-mono text-sm">{name}</span>
    </a>
  );
}

export function SkillTag({ name }) {
  return (
    <span className="rounded-md border border-[#262B36] bg-[#171A21] px-3 py-1.5 font-mono text-sm text-[#E8E6E3] transition-colors hover:border-[#7C9EFF] hover:text-[#7C9EFF]">
      {`<${name} />`}
    </span>
  );
}

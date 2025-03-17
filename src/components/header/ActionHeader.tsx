import Link from "next/link";

export const ActionHeader = () => {
  return (
    <div className="flex items-center gap-6">
      <Link
        href="#"
        className="flex items-center gap-2.5 text-[18px] leading-[26px] font-medium"
      >
        Sign In
      </Link>
      <Link
        href="#"
        className="bg-primary w-fit rounded-full px-7 py-[18px] text-[16px] leading-6 font-medium"
      >
        Get This Template
      </Link>
    </div>
  );
};

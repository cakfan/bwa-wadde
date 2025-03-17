import Link from "next/link";

export const ActionHeader = () => {
  return (
    <div className="flex gap-6 items-center">
      <Link
        href="#"
        className="flex items-center gap-2.5 leading-[26px] text-[18px] font-medium"
      >
        Sign In
      </Link>
      <Link
        href="#"
        className="leading-6 w-fit font-medium text-[16px] bg-primary rounded-full py-[18px] px-7"
      >
        Get This Template
      </Link>
    </div>
  );
};

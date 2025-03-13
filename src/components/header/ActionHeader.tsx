import Link from "next/link";

export const ActionHeader = () => {
  return (
    <div className="flex gap-6 items-center">
      <Link href="#" className="header-link">
        Sign In
      </Link>
      <Link href="#" className="btn primary lg">
        Get This Template
      </Link>
    </div>
  );
};

import { cn } from "@/libs/utils";

export const CardServiceContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-foreground/10 flex flex-col gap-3 rounded-xl px-9 pt-[52px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

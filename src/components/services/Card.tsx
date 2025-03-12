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
        "flex flex-col gap-3 rounded-[21px] bg-foreground/10 px-9 pt-[52px]",
        className
      )}
    >
      {children}
    </div>
  );
};

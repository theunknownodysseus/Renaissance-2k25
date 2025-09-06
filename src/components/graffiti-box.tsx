import { cn } from "@/lib/utils";

interface GraffitiBoxProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  'data-testid'?: string;
}

export function GraffitiBox({ children, className, onClick, 'data-testid': dataTestId }: GraffitiBoxProps) {
  return (
    <div 
      className={cn("graffiti-box p-6 rounded-lg", className)}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
}

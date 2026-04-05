import { clsx } from 'clsx';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'blue' | 'purple' | 'none';
}

export function GlassCard({ children, className, hover = false, glow = 'none' }: GlassCardProps) {
  return (
    <div
      className={clsx(
        'glass-card',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]',
        glow === 'blue' && 'hover:shadow-lg hover:shadow-primary/10',
        glow === 'purple' && 'hover:shadow-lg hover:shadow-secondary/10',
        className
      )}
    >
      {children}
    </div>
  );
}

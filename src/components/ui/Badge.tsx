import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'green' | 'gray';
  className?: string;
}

export function Badge({ children, variant = 'blue', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variant === 'blue' && 'bg-primary/10 text-primary border border-primary/20',
        variant === 'purple' && 'bg-secondary/10 text-secondary border border-secondary/20',
        variant === 'green' && 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
        variant === 'gray' && 'bg-white/5 text-gray-400 border border-white/10',
        className
      )}
    >
      {children}
    </span>
  );
}

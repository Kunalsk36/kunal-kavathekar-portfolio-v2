import { cn } from '@/lib/utils';

const variants = {
  default:
    'bg-[var(--surface-elevated)] text-secondary border border-[var(--border-color)]',
  accent:
    'bg-orange/10 text-orange border border-orange/20',
  outline:
    'bg-transparent text-muted border border-[var(--border-color)] hover:border-orange hover:text-orange',
};

/**
 * @param {'default'|'accent'|'outline'} variant
 */
export function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center',
        'px-2.5 py-0.5',
        'text-xs font-medium tracking-wide',
        'rounded-[var(--radius-sm)]',
        'transition-colors duration-[var(--duration-fast)]',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

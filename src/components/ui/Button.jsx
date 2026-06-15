import { cn } from '@/lib/utils';

const variants = {
  primary:
    'bg-orange text-[#111827] font-semibold hover:bg-[#e8930e] active:scale-[0.98]',
  secondary:
    'bg-transparent border border-[var(--border-color)] text-foreground hover:border-[var(--foreground-muted)] hover:text-foreground',
  ghost:
    'bg-transparent text-secondary hover:text-foreground hover:bg-[var(--surface-elevated)]',
};

const sizes = {
  /* Compact — navbar Resume button */
  sm: 'px-3.5 py-1.5 text-[13px] rounded-[6px]',
  /* Default — hero CTAs and general use */
  md: 'px-5 py-2.5 text-[13px] rounded-[var(--radius-sm)]',
  /* Roomy — used sparingly */
  lg: 'px-7 py-3.5 text-sm rounded-[var(--radius-sm)]',
};

/**
 * @param {'primary'|'secondary'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center gap-1.5',
        'font-medium tracking-[0.01em]',
        'transition-all duration-150 ease-out',
        'focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        'cursor-pointer select-none',
        'whitespace-nowrap',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Tag>
  );
}

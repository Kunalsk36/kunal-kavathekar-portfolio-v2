import { cn } from '@/lib/utils';

const variants = {
  default:
    'bg-surface border border-[var(--border-color)]',
  elevated:
    'bg-surface-elevated border border-[var(--border-color)]',
  ghost:
    'bg-transparent border border-transparent',
};

/**
 * Minimal card wrapper — do not use this for every piece of content.
 * Cards should only appear where visual containment is genuinely needed.
 *
 * @param {'default'|'elevated'|'ghost'} variant
 */
export function Card({ children, variant = 'default', className, as: Tag = 'div' }) {
  return (
    <Tag
      className={cn(
        'rounded-[var(--radius-md)]',
        'p-6',
        'transition-colors duration-[var(--duration-normal)]',
        variants[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
}

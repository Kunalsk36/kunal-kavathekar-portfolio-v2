import { cn } from '@/lib/utils';

/**
 * Standardised section heading following the design system's numbered
 * section pattern: "01 — ABOUT" / main title / optional description.
 *
 * @param {string}  index       e.g. "01"
 * @param {string}  label       e.g. "ABOUT"
 * @param {string}  title       Main heading text
 * @param {string}  [description]
 * @param {'left'|'center'} [align]
 */
export function SectionHeading({
  index,
  label,
  title,
  description,
  align = 'left',
  className,
}) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {/* Numbered label row */}
      {(index || label) && (
        <div className="flex items-center lg:gap-2 mb-4">
          {align === 'center' && <div className="flex-1" />}

          {index && (
            <span className="font-mono text-xs text-orange tracking-widest">
              {index}
            </span>
          )}

          {index && label && (
            <span className="text-[var(--border-color)] text-xs select-none">—</span>
          )}

          {label && (
            <span className="font-mono text-xs text-muted dark:text-secondary/80 tracking-[0.15em] uppercase">
              {label}
            </span>
          )}

          {align === 'center' && <div className="flex-1" />}
        </div>
      )}

      {/* Main title */}
      {title && (
        <h2
          className={cn(
            'text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight',
            align === 'center' && 'mx-auto max-w-2xl'
          )}
        >
          {title}
        </h2>
      )}

      {/* Optional description */}
      {description && (
        <p
          className={cn(
            'mt-4 text-secondary leading-relaxed max-w-xl',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

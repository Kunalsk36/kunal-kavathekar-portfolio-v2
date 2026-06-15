import { cn } from '@/lib/utils';

/**
 * Central layout container — constrains content width, provides
 * consistent horizontal padding, and centres on the page.
 *
 * @param {'default'|'narrow'|'wide'|'full'} size
 */
export function Container({ children, size = 'default', className, as: Tag = 'div' }) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'default' && 'max-w-6xl',
        size === 'narrow'  && 'max-w-3xl',
        size === 'wide'    && 'max-w-7xl',
        size === 'full'    && 'max-w-none',
        className
      )}
    >
      {children}
    </Tag>
  );
}

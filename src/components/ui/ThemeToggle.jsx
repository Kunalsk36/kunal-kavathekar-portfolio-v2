'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  /* Avoid hydration mismatch — render nothing until mounted */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          'w-8 h-8 rounded-[6px] border border-[var(--border-color)]',
          className
        )}
        aria-hidden
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'inline-flex items-center justify-center',
        'w-8 h-8 rounded-[6px]',
        'border border-[var(--border-color)]',
        'text-muted hover:text-foreground hover:border-[var(--foreground-muted)]',
        'transition-all duration-150',
        'cursor-pointer',
        className
      )}
    >
      {isDark ? (
        <Sun size={16} strokeWidth={1.75} />
      ) : (
        <Moon size={16} strokeWidth={1.75} />
      )}
    </button>
  );
}

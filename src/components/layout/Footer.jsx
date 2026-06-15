import { Container } from '@/components/ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge py-8 mt-auto select-none">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Brand & Copyright */}
          <div className="flex items-center gap-3">
            <span className="w-[30px] h-[30px] rounded-[8px] bg-brand text-white flex items-center justify-center font-mono font-semibold text-[12px] border border-white/10 dark:border-white/10 border-black/10">
              KSK
            </span>
            <span className="text-[13.5px] text-secondary">
              &copy; {year} Kunal Shrikant Kavathekar
            </span>
          </div>

          {/* Right: Note */}
          <div className="font-mono text-[12.5px] text-muted">
            Designed &amp; built with care.
          </div>
        </div>
      </Container>
    </footer>
  );
}


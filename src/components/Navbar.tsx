import LanguageSelector from '@/components/LanguageSelector';
import Menu from '@/components/Menu';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="grid bg-photo1-bg grid-cols-3 items-center h-16 sm:h-20">
      <Menu />

      <div className="h-full flex items-center justify-center text-center px-1">
        <Link href="/">
          <span className="font-bold text-[11px] leading-tight sm:text-base sm:leading-normal md:text-xl">
            Unai Alcibar-Arechuluaga Blanco
          </span>
        </Link>
      </div>

      <LanguageSelector />
    </nav>
  );
}

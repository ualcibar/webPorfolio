import LanguageSelector from '@/components/LanguageSelector';
import Menu from '@/components/Menu';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="grid bg-photo1-bg grid-cols-3 items-center h-20">
      <Menu />
      
      <div className="h-full flex items-center justify-center text-center">
        <Link href="/">
          <span className="font-bold text-xl">Unai Alcibar-Arechuluaga Blanco</span>
        </Link>
      </div>

      <LanguageSelector />
    </nav>
  );
}

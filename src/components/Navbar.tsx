import LanguageSelector from '@/components/LanguageSelector';
import Menu from '@/components/Menu';

export default function Navbar() {
  return (
    <nav className="grid bg-photo1-bg grid-cols-3 items-center h-20">
      <Menu />
      
      <div className="h-full flex items-center justify-center text-center">
        <span className="font-bold text-xl">Unai Alcibar-Arechuluaga Blanco</span>
      </div>

      <LanguageSelector />
    </nav>
  );
}

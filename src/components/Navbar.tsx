import LanguageSelector from '@/components/LanguageSelector';
import Menu from '@/components/Menu';

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center h-16">
      <Menu />
      
      <div className="h-full flex items-center justify-center text-center">
        <span className="font-bold text-lg">Unai Alcibar-Arechuluaga Blanco</span>
      </div>

      <LanguageSelector />
    </nav>
  );
}

import LanguageSelector from '@/components/LanguageSelector';

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center h-16">
      <div className="bg-red-200 h-full flex items-center">
        {/* espacio izquierdo, vacío por ahora */} 
      </div>

      <div className="bg-yellow-200 h-full flex items-center justify-center">
        <span className="font-bold text-lg">Unai Alcibar-Arechuluaga Blanco</span>
      </div>

      <LanguageSelector />
    </nav>
  );
}

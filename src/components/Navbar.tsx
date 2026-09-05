import LanguageSelector from '@/components/LanguageSelector';

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center h-16">
      <div className="h-full flex items-center pl-12">
        <button type="button" className="flex items-center text-4xl hover:opacity-80 transition-opacity cursor-pointer">
          ≡
        </button>
      </div>

      <div className="h-full flex items-center justify-center text-center">
        <span className="font-bold text-lg">Unai Alcibar-Arechuluaga Blanco</span>
      </div>

      <LanguageSelector />
    </nav>
  );
}

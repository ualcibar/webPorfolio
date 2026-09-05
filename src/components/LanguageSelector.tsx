import Link from 'next/link';

export default function LanguageSelector() {
  const getLanguagePath = (locale: string) => '#';
  return (

  <div className="h-full flex items-center justify-end px-5 text-sm font-medium text-gray-700">
      <Link 
        href={getLanguagePath('es')} 
        className="hover:text-grey-700 transition-colors uppercase"
      >
        ES
      </Link>
      <span className="mx-2 text-gray-400">|</span>
      <Link 
        href={getLanguagePath('eu')} 
        className="hover:text-grey-700 transition-colors uppercase"
      >
        EUS
      </Link>
      <span className="mx-2 text-gray-400">|</span>
      <Link 
        href={getLanguagePath('en')} 
        className="hover:text-orange-700 transition-colors uppercase"
      >
        ENG
      </Link>
    </div>
  );
}
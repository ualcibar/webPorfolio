import { SITE_NAME } from '@/config/site';

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-6 text-sm text-photo1-text border-t border-photo1-surface">
      <p>
        © {anio} Unai Alcibar-Arechuluaga Blanco Porfolio. Diseñado, programado y fotografiado por Unai
        Alcibar-Arechuluaga Blanco. Todos los derechos reservados.
      </p>
    </footer>
  );
}
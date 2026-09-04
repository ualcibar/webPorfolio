export default function Home() {
  return (
    /*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f0f2f5' }}>
      <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1>¡Hola desde Next.js + Nginx + Docker!🚀</h1>
        <p>Todo está funcionando perfectamente en tu entorno local.</p>
        <h1 className="text-4xl font-bold text-blue-600 underline">
          ¡Hola desde Next.js + Nginx + Dodsadasds
        </h1>
      </div>
    </div>
    */
  <div className="bg-photo1-bg h-dvh">
    <nav className="grid grid-cols-3 items-center h-16">
      <div className="bg-red-200 h-full flex items-center">
        {/* espacio izquierdo, vacío por ahora */} 
      </div>

      <div className="bg-yellow-200 h-full flex items-center justify-center">
        <span className="font-bold text-lg">Unai Alcibar-Arechuluaga Blanco</span>
      </div>

      <div className="bg-blue-200 h-full flex items-center justify-end px-5">
        <select className="bg-white border border-gray-300 rounded px-2 py-1">
          <option>ES</option>
          <option>EN</option>
        </select>
      </div>
    </nav>

    {/*Empieza el body*/}
    <div className="h-full">
      <img className="aspect-3/2 object-cover" src="/img/DSCF7911.jpg" />
    </div>
  </div>
  );
}
export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f0f2f5' }}>
      <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1>¡Hola desde Next.js + Nginx + Docker!🚀</h1>
        <p>Todo está funcionando perfectamente en tu entorno local.</p>
      </div>
    </div>
  );
}
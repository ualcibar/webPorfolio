export default function AboutMePage() {

  return (
    <div className="bg-photo1-bg h-full flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-[37rem_1fr] items-center mb-40 gap-9 w-275 h-152">
        <div className="w-full max-w-2xl">
            <img
            className="max-w-full h-aut" //este contenedor en l medio
            src="/img/DSCF7765.jpg"
        /> 
        </div>
        <div className="h-full">
          <div className="p-8 pr-4">
            <h1 className="text-3xl font-bold pb-6">About Me</h1>
            <p className="mb-6">
              Mi nombre es Unai y soy un fotógrafo amateur de cerca de 
              Bilbo. Este va a ser mi espacio, donde enseño al mundo mi 
              visión de la fotografía. Un lugar sin pretensiones, donde 
              podrás ver mi camino de una forma honesta y sincera.
            </p>
            <p className="mb-6">
              Mi objetivo final es que este espacio sirva para inspirar a 
              gente como yo a creer en su importancia y a hacer fotografía.
            </p>

            <p className="mb-12">
              Gracias por darme un ratito de vuestro tiempo para ver las fotos 
              y no tengais dudas en contactar para cualquier cosa.
            </p>

            <p className="font-semibold text-lg text-gray-900">
              Unai Alcibar-Arechuluaga Blanco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
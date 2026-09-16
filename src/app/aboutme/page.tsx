export default function AboutMePage() {

  return (
    <div className="bg-photo1-bg flex-1 flex flex-col items-center justify-center gap-4 py-8 px-4 sm:px-6">
      <div className="flex flex-col lg:grid lg:grid-cols-[37rem_1fr] items-center mb-8 lg:mb-40 gap-6 sm:gap-9 w-full max-w-5xl lg:max-w-6xl">
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl">
            <img
            className="max-w-full h-auto"
            src="/img/DSCF7765.jpg"
        />
        </div>
        <div className="h-full">
          <div className="p-2 sm:p-8 lg:pr-4">
            <h1 className="text-2xl sm:text-3xl font-bold pb-4 sm:pb-6">About Me</h1>
            <p className="mb-4 sm:mb-6">
              Mi nombre es Unai y soy un fotógrafo amateur de cerca de
              Bilbo. Este va a ser mi espacio, donde enseño al mundo mi
              visión de la fotografía. Un lugar sin pretensiones, donde
              podrás ver mi camino de una forma honesta y sincera.
            </p>
            <p className="mb-4 sm:mb-6">
              Mi objetivo final es que este espacio sirva para inspirar a
              gente como yo a creer en su importancia y a hacer fotografía.
            </p>

            <p className="mb-6 sm:mb-12">
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
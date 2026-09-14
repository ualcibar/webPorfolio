'use client';
import { useState } from 'react';

type FormData = {
  nombre: string;
  email: string;
  mensaje: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setEnviado(true);
  };

  if (enviado) {
    return <p className="text-photo1-accent">Gracias por tu mensaje, te responderé pronto.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full">
      <div className="flex flex-col gap-1">
        <label htmlFor="nombre" className="text-sm">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={formData.nombre}
          onChange={handleChange}
          className="border border-photo1-surface bg-white px-3 py-2"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border border-photo1-surface bg-white px-3 py-2"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="mensaje" className="text-sm">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          className="border border-photo1-surface bg-white px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="bg-photo1-accent text-white py-2 hover:opacity-90 transition-opacity cursor-pointer"
      >
        Enviar
      </button>
    </form>
  );
}
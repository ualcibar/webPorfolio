import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-photo1-bg h-full flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Contacto</h1>
      <ContactForm />
    </div>
  );
}
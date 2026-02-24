import Button from '@/components/ui/Button';

interface CTAProps {
  label: string;
  href: string;
}

export default function CTASection({ label, href }: CTAProps) {
  return (
    <section className="w-full py-20 bg-background">
      <div className="mx-auto flex max-w-6xl justify-center px-4">
        <Button href={href}>{label}</Button>
      </div>
    </section>
  );
}

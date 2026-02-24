interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ title, subtitle, label = 'KAOS Media', className = '', align = 'center' }: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-20 ${isCenter ? 'text-center' : ''} ${className}`}>
      <div className={`flex items-center gap-4 mb-6 ${isCenter ? 'justify-center' : ''}`}>
        <div className="w-12 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold uppercase tracking-widest">{label}</span>
        {isCenter && <div className="w-12 h-[3px] bg-accent rounded-full" />}
      </div>
      <h2 className="text-text-primary">{title}</h2>
      {subtitle && (
        <p className={`mt-6 text-text-secondary text-lg leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

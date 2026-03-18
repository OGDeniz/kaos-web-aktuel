import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ children, href, variant = 'primary', className = '', type = 'button', onClick, disabled }: ButtonProps) {
  const base = 'relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-base cursor-pointer overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-accent text-white before:absolute before:inset-0 before:bg-accent-hover before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out',
    outline: 'border-2 border-white/30 text-white transition-colors duration-300 hover:border-accent hover:text-accent',
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const inner = <span className="relative z-10">{children}</span>;

  if (href) {
    return <Link href={href} className={classes}>{inner}</Link>;
  }

  return <button type={type} onClick={onClick} disabled={disabled} className={classes}>{inner}</button>;
}

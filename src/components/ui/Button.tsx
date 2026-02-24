import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'primary', className = '', type = 'button', onClick }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 cursor-pointer';
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover hover:scale-105',
    outline: 'border-2 border-white/20 text-white hover:border-accent hover:text-accent hover:scale-105',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}

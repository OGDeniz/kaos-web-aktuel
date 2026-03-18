import Link from 'next/link';
import styles from './Button.module.css';

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
  const classes = [styles.base, styles[variant], className].filter(Boolean).join(' ');
  const inner = <span className={styles.inner}>{children}</span>;

  if (href) {
    return <Link href={href} className={classes}>{inner}</Link>;
  }

  return <button type={type} onClick={onClick} disabled={disabled} className={classes}>{inner}</button>;
}

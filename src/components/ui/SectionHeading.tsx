import styles from './SectionHeading.module.css';

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
    <div className={[styles.wrapper, isCenter ? styles.center : '', className].filter(Boolean).join(' ')}>
      <div className={[styles.labelRow, isCenter ? styles.center : ''].filter(Boolean).join(' ')}>
        <div className={styles.accentLine} />
        <span className={styles.label}>{label}</span>
        {isCenter && <div className={styles.accentLine} />}
      </div>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && (
        <p className={[styles.subtitle, isCenter ? styles.center : ''].filter(Boolean).join(' ')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

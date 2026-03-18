import Button from '@/components/ui/Button';
import styles from './CTASection.module.css';

interface CTAProps {
  label: string;
  href: string;
}

export default function CTASection({ label, href }: CTAProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Button href={href}>{label}</Button>
      </div>
    </section>
  );
}

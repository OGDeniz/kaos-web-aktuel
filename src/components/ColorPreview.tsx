import styles from './ColorPreview.module.css';

export default function ColorPreview() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>🎨 Tailwind Custom Color Grid</h1>

            <div className={`${styles.swatch} ${styles.primary}`}>bg-primary</div>
            <div className={`${styles.swatch} ${styles.secondary}`}>bg-secondary</div>
            <div className={`${styles.swatch} ${styles.dark}`}>bg-dark</div>
            <div className={`${styles.swatch} ${styles.softred}`}>bg-softred</div>
            <div className={`${styles.swatch} ${styles.neutral}`}>bg-neutral</div>
            <div className={`${styles.swatch} ${styles.metal}`}>bg-metal</div>
            <div className={`${styles.swatch} ${styles.light}`}>bg-light</div>
            <div className={`${styles.swatch} ${styles.beige}`}>bg-beige</div>
        </div>
    );
}

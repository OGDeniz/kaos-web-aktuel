import styles from "./ClaimBar.module.css"

type ClaimBarProps = {
    text: string
}

export default function ClaimBar({ text }: ClaimBarProps) {
    return (
        <div className={styles.bar}>
            {text}
        </div>
    )
}

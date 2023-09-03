import { Histogram } from '@/components/Histogram/Histogram'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Histogram/>
        </main>
    )
}

import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from './Index.module.scss'

export default function Index() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
        </>
    )
}
import Album from "src/components/Album";
import Banner from "src/components/Banner";
import Rodape from "src/components/Footer";
import Header from "src/components/Header";
import Menu from "src/components/Menu";
import Populares from "src/components/Popular";
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
                <div className={styles.galeria}>
                    <Album />
                    <Populares></Populares>
                </div>
            </main>

            <Rodape />
        </>
    )
}
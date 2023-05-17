import Tags from "../Tags";
import styles from "./Album.module.scss"
import fotos from './fotos.json'
import Cards from "./Cards";
import { useState } from "react";

export default function Album() {
    const [itens, setItens] = useState(fotos);

    const tags = [...new Set(fotos.map((valor) => valor.tag))];

    const filterPhotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag;
        })

        setItens(novasFotos);
    }
    return (
        <>
            <section className={styles.album}>
                <h2>Navegue pela galeria</h2>
                <Tags tags={tags} filterPhotos={filterPhotos} setItens={setItens} />
                <Cards itens={itens} styles={styles} />
            </section>
        </>
    )
}

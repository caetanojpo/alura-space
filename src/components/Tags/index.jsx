/* eslint-disable react/prop-types */
import styles from './Tags.module.scss'
import fotos from '../Album/fotos.json'

export default function Tags({ tags, filterPhotos, setItens }) {
    return (
        <div className={styles.tags}>
            <p>Filter por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag) => {
                    return (
                        <li key={tag} onClick={() => filterPhotos(tag)}>{tag}</li>
                    )
                })}
                <li onClick={() => setItens(fotos)}>Todos</li>
            </ul>
        </div >
    )
}

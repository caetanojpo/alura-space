/* eslint-disable react/prop-types */
import open from './open.png'
import favorite from './favorito.png'

export default function Cards({ itens, styles }) {
    return (
        <ul className={styles.album__cards}
        >
            {itens.map((item) => {
                return (
                    <li key={item.id} className={styles.album__card}>
                        <img className={styles.album__imagem} src={item.imagem} alt={item.titulo} />
                        <p className={styles.album__descricao}>{item.titulo}</p>
                        <div>
                            <p>{item.creditos}</p>
                            <span>
                                <img src={open} alt="Ícone de coração para curtir" />
                                <img src={favorite} alt="Ícone para abrir o modal" />
                            </span>
                        </div>
                    </li>
                )

            })}




        </ul>

    )
}

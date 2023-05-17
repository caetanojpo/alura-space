/* eslint-disable react/prop-types */


export default function Icone({ icon, styles }) {
    return (
        <li className={styles.menu__item}>
            <img src={icon.path} alt={icon.alt} />
            <a href="/">{icon.link}</a>
        </li>
    )
}
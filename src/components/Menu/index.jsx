import styles from "./Menu.module.scss"
import icons from "./icons.json"
import Icone from "./Icones"


export default function Menu() {
    return (
        <>
            <nav className={styles.menu}>
                <ul className={styles.menu__lista}>
                    {icons.map((icon) => (
                        <Icone key={icon.id} icon={icon} styles={styles} />
                    ))}

                </ul >
            </nav >
        </>
    )
}

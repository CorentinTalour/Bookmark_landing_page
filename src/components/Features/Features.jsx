import {useState} from "react";
import {Information} from "../../data/data.json";
import styles from "./Features.module.scss";

function Features() {
    const [info] = useState(Information);
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState(0);

    const {name, title, description, image, button} = info[value];

    // const basePrefix = "Bookmark_landing_page";
    // const mySvg = new URL(`/${basePrefix}${image}`, import.meta.url).href;
    // const mySvg = new URL(image, import.meta.url).href;

    // Générer le chemin complet de l'image en tenant compte de la base URL et du préfixe
    const mySvg = `${import.meta.env.BASE_URL}${image}`;

    return (
        <section className={`${styles.featuresSection}`}>
            <div className={`${styles.featuresContainer}`}>
                <h2>Features</h2>
                <p className={`${styles.featuresP}`}>
                    Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks
                    sync between your devices so you can access them on the go.
                </p>
                <div className={`${styles.selector}`}>
                    {info.map((item, index) => (
                        <div key={index} onClick={() => {
                            setValue(index);
                            setSelected(index);
                        }} className={`${styles.oneSelector}`}>
                            <p className={`${selected === index ? styles.active : ""}`}>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className={`${styles.selectorContent}`}>
                    <div className={`${styles.selectorContentLeft}`}>
                        <img src={mySvg} alt={name}/>
                        <div className={styles.featuresSquare}></div>
                    </div>
                    <div className={`${styles.selectorContentRight}`}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div>
                            <button className={"btn-primary"}>{button}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
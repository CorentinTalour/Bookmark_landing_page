import {useState} from "react";
import {Information} from "../../data/data.json";
import styles from "./Features.module.scss";

function Features() {
    const [info] = useState(Information);
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState(0);

    const {name, title, description, image, button} = info[value];

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
                        <img src={image} alt={name}/>
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
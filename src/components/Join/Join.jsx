import styles from "./Join.module.scss"

function Join() {
    return (
        <section className={`${styles.joinSection}`}>
            <p>35,000+ Already joined</p>
            <h2>Stay up-to-date with what we’re doing</h2>
            <div>
                <input className={"input-primary"} type="email" placeholder={"Enter your email address"}/>
                <button className={'btn-primary-red'}>Contact Us</button>
            </div>
        </section>
    )
}

export default Join
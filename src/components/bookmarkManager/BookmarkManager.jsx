import styles from "./BookmarkManager.module.scss"

function BookmarkManager() {
    return (
        <section className={`${styles.bookmarkManagerSection}`}>
            <div className={`${styles.bookmarkManagerContainer}`}>
                <div className={`${styles.bookmarkManagerLeft}`}>
                    <h1>A Simple Bookmark Manager</h1>
                    <p>
                        A clean and simple interface to organize your favourite websites. Open a new
                        browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className={`${styles.bookmarkManagerContainerBtn}`}>
                        <button className="btn-primary">Get it on Chrome</button>
                        <button className="btn-secondary">Get it on Firefox</button>
                    </div>
                </div>
                <div className={`${styles.bookmarkManagerRight}`}>
                    <div className={`${styles.bookmarkManagerSquare}`}>
                        <img src="/images/illustration-hero.svg" alt="Illustration Features Tab"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookmarkManager;
import styles from "./Faq.module.scss"
import {useState} from "react";

function Faq() {

    // eslint-disable-next-line no-unused-vars
    const [faqs, setFaqs] = useState([
        {
            question: "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies" +
                " fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
            open: false
        },
        {
            question: "How can I request a new browser?",
            answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula." +
                "  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa," +
                "  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. " +
                "  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
            open: false
        },
        {
            question: "Is there a mobile app?",
            answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut " +
                "condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. " +
                "Sed sollicitudin ex et ultricies bibendum.",
            open: false
        },
        {
            question: "What about other Chromium browsers?",
            answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam" +
                "vitae neque eget nisl gravida pellentesque non ut velit.",
            open: false
        }
    ]);

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    }
//#5267DF
    return (
        <section className={`${styles.faqSection}`}>
            <h2>Frequently Asked Questions</h2>
            <p>
                Here are some of our FAQs. If you have any other questions you’d like answered please feel free to
                email us.
            </p>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.accordion}`}>
                    {faqs.map((faq, i) => (
                        <div key={i} className={`${styles.item}`}>
                            <div className={`${styles.title}`} onClick={() => toggle(i)}>
                                <h3>{faq.question}</h3>
                                {/*Arrow icon*/}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"
                                     className={`${styles.svgArrow}  ${selected === i ? styles.turn : ""}`}>
                                    <path fill="none" stroke={`${selected === i ? "var(--soft-red)" : "#5267DF"}`}
                                          strokeWidth="3" d="M1 1l8 8 8-8"/>
                                </svg>
                            </div>
                            <div
                                className={`${styles.answer} ${selected === i ? styles.open : ""}`}>{faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className={"btn-primary"}>More Info</button>
        </section>
    )
}

export default Faq;
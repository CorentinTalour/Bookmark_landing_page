import './App.scss'
import useLocalStorage from "use-local-storage";
import Features from "./components/Features/Features.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Extension from "./components/Extension/Extension.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Join from "./components/Join/Join.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BookmarkManager from "./components/bookmarkManager/BookmarkManager.jsx";

function App() {
    const [isDark, setDark] = useLocalStorage("isDark", false);

    return (
        <main data-theme={isDark ? "dark" : "light"}>
            <Navbar
                isDark={isDark}
            />
            <BookmarkManager/>
            <Features/>
            <Extension/>
            <Faq/>
            <div>
                <Join/>
                <Footer/>
            </div>

        </main>
    )
}

export default App

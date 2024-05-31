function ToggleDarkMode({handleChange, isDark}) {
    return (
        <button
            id="check"
            className="btn-primary btn-dark-mode"
            onClick={handleChange}
        >{isDark ? "Light mode" : "Dark mode"}</button>
    )
}

export default ToggleDarkMode;
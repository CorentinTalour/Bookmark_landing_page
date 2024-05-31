function ToggleDarkMode({handleChange, isDark}) {
    return (
        <div className="toggle-container">
            <button
                id="check"
                className="btn-primary btn-dark-mode"
                onClick={handleChange}
            >{isDark ? "Light mode" : "Dark mode"}</button>
        </div>
    )
}

export default ToggleDarkMode;
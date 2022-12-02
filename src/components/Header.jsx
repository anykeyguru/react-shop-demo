import React from "react";

function Header() {
    const url = "https://github.com/anykeyguru/react-movies";
    return (
        <nav className="indigo darken-3">
            <div className="nav-wrapper">
                <a href={url} className="brand-logo">React Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href={url}>GitRepo</a></li>
                </ul>
            </div>
        </nav>

    )
}


export {Header}
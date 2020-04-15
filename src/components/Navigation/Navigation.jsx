import React from 'react';
import "./Navigation.css"


const Navi = () => {
    return (
        <div id="navigate">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#ffffff" }}>
                <a className="navbar-brand" href="#navigate" style={{ color: "#800000" }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" width="30" height="30" alt="" /> agus Mahardhika
  </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex justify-content-end">
                            <a className="nav-link" href="#about" style={{ color: "#800000" }}>About Me</a>
                        </li>
                        <li className="nav-item d-flex justify-content-end">
                            <a className="nav-link" href="#portfolio" style={{ color: "#800000" }}>Portofolio</a>
                        </li>
                        <li className="nav-item d-flex justify-content-end">
                            <a className="nav-link" href="#contact" style={{ color: "#800000" }}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navi;

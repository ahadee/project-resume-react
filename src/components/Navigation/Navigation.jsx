import React from 'react';
import "./Navigation.css"
// import { end } from 'worker-farm';
// import { brown } from 'color-name';

const Navi = () => {
    return (
        // <section id="navigate">
        <div id="navigate">
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#ffffff" }}>
                <a class="navbar-brand" href="#navigate" style={{ color: "#800000" }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" width="30" height="30" alt="" /> agus Mahardhika
  </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        {/* <li class="nav-item d-flex justify-content-end">
                            <a class="nav-link" href="#navigate" style={{ color: "#800000" }}>Home <span class="sr-only"></span></a>
                        </li> */}
                        <li class="nav-item d-flex justify-content-end">
                            <a class="nav-link" href="#about" style={{ color: "#800000" }}>About Me</a>
                        </li>
                        <li class="nav-item d-flex justify-content-end">
                            <a class="nav-link" href="#portfolio" style={{ color: "#800000" }}>Portofolio</a>
                        </li>
                        <li class="nav-item d-flex justify-content-end">
                            <a class="nav-link" href="#contact" style={{ color: "#800000" }}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navi;

import React from 'react';
import "./Footer.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"

const Footer = () => {
    return (
        <footer>
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-12">
                        <p>&copy; Mizuchi 2020 | Built by <a href="https://github.com/ahadee/">Bagus Mahardhika</a></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <a href="https://www.youtube.com/" class="btn btn-danger">Subscribe to Youtube</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-12">
                        <p>&copy; Mizuchi 2020 | Built by <a href="https://github.com/ahadee/">Bagus Mahardhika</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <a href="https://www.youtube.com/" className="btn btn-danger">Subscribe to Youtube</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
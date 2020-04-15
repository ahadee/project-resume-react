import React from 'react';
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container container-portfolio">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2>Portfolio</h2>
                        <hr />
                    </div>
                </div>
                <div className="row" id="img-port">
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRprHY-ZiQjZvzqR3Zj4_n4OfPJDue5Uxh2h9-XRcsogPlay8IS&usqp=CAU" className="img-thumbnail thumbnail" alt="img1" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgGLEy_a05TyIGb_m5MTQsG7meZqDD1-8vGsCjAlQmO3ZjSm1U&usqp=CAU" className="img-thumbnail thumbnail" alt="img2" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="data:image/jpeg;base64,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" className="img-thumbnail thumbnail" alt="img3" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0hiGisv3aD9qP8emY9SoxFZL_qke96u4TpsxQwK93yuk_h3pn&usqp=CAU" className="img-thumbnail thumbnail" alt="img4" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHg0IJIm309DA381hMXrwt16fFccYiq4BbRTm_KEJNDt-VMEoK&usqp=CAU" className="img-thumbnail thumbnail" alt="img5" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3rkjtpwUgCjshL3gu6chFiT_OPEU8LXBOgFAq5bQlg4NKowoZ&usqp=CAU" className="img-thumbnail thumbnail" alt="img6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
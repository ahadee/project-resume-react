import React from 'react';
import "./Profile.css"

const Profile = () => {
    return (
        <section class="about" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="text-center">About</h2>
                        <hr />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-1">
                        <p>
                            Freelancer Front End developer with one-year experience and experienced IT professional with one-year
                            network support, two-year SAP XI/PI and one-year SAP Basis experiences. Currently I am interested to
                            be freelancer Front-End developer to utilize my Full Stack current knowledge and skills to increase
                            the business's performance and grow my IT expertise.
                        </p>
                    </div>
                    <div class="col-sm-6 col-sm-offset-1">
                        <p>
                            My current interest is in Web Development. I am now participating in Full Stack Bootcamp for about 4 months and I hope I can finish the bootcamp in the beginning of June 2020. The technologies that I will be able to offer are HTML, CSS, Figma, SCSS, React and Redux. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;
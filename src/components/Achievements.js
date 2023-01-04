import React from 'react'
import kanpurImage  from '../images/achievements/kanpur.jpg';
import nccImage  from '../images/achievements/nccImage.jpg';
import animalImage  from '../images/achievements/animalImage.JPG';
import nsutImage  from '../images/achievements/nsut.jpg';
import nsut2Image  from '../images/achievements/nsut2.jpg';
import travelImage from '../images/achievements/travel.jpg'



export const Achievements = () => {
    return (
        <section id="achievements" className="animated fadeIn ">
            <div className="container ">
                <div class="row justify-content-center ">
                    <div class="col-lg-8 text-center ">
                    <div className="section-title">
                        <h2>Life and Me</h2>
                        <p>Love to Explore Around</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" id="skillContainer" >
                <div className="hover01 d-flex justify-content-center align-items-center">
                    <div>
                        <figure><img src={kanpurImage} alt='...'/></figure>
                    </div>
                    <div>
                        <figure><img src={nsutImage} alt='...' /></figure>
                    </div>
                    <div>
                        <figure><img src={nccImage} alt='...'/></figure>
                    </div>
                </div>
            </div>
            <div className="row" id="skillContainer">
                <div className="hover01 hover01 d-flex justify-content-center align-items-center">
                    <div>
                        <figure><img src={travelImage} alt='...'/></figure>
                    </div>
                    <div>
                        <figure><img src={animalImage} alt='...' /></figure>
                    </div>
                    <div>
                        <figure><img src={nsut2Image} alt='...'/></figure>
                    </div>
                </div>
            </div>
    </section>
    )
}

import React from 'react'

import img1 from '../images/icon_shape1.png';
import img2 from '../images/icon_shape2.png';
import img3 from '../images/icon_shape3.png';
import img4 from '../images/icon_shape4.png';

export const Skills = () => {
    return (
      <section id="skills" class="animated fadeIn ">
        <div class="container ">
            <div class="row justify-content-center ">
                <div class="col-lg-8 text-center ">
                <div className="section-title">
                    <h2>Skills</h2>
                    </div>
                </div>
            </div>

            
            <div class="row feature_inner">
                <div class="col-lg-3 col-md-6">
                    <div class="feature_item" data-aos="flip-up" data-aos-delay="100">
                        <img src={img1} alt="full stack developer -  "/>
                        <h4>Full-stack developer</h4>
                        <p>An Experienced MERN stack developer having completed numerous industry level projects as Freelancer. </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="feature_item" data-aos="flip-down" data-aos-delay="100">
                        <img src={img2} alt="deveops  "/>
                        <h4>DevOps</h4>
                        <p>Practical know-how of systems development life cycle tools like Git, AWS EC2, AWS S3,
                            Linux, CI/CD &amp; Pipelines.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="feature_item" data-aos="flip-up" data-aos-delay="100">
                        <img src= {img3} alt="Machine Learning -  "/>
                        <h4>Machine Learning</h4>
                        <p>Wokring knowledge and experience of Machine Learning Algorithms,
                            numpy, scikit learn, pandas, nltk, matplotlib and many more.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="feature_item" data-aos="flip-down" data-aos-delay="100">
                        <img src= {img4} alt=" "/>
                        <h4>Competative Programmer</h4>
                        <p>Participated in various Competative Programming contest, having the highest rating of 1737 on CodeChef and 1200+ on codeforces
                        </p>
                    </div>
                </div>
            </div>

            


            <div class="row justify-content-center">
                <div class="col-md-6 p-5 pt-0" data-aos="fade-right" data-aos-delay="500">
                    <h4>C++</h4>
                    <div class="percentage pb-4">
                        <div class="progress ">
                            <div class="progress-bar color-2"  style={{width: "90%"}} aria-valuenow="30 " aria-valuemin="0 " aria-valuemax="100 "></div>
                        </div>
                    </div>
                    <h4>DS &amp; Algorithms</h4>
                    <div class="percentage pb-4 ">
                        <div class="progress ">
                            <div class="progress-bar color-4"  style={{width: "75%" }} aria-valuenow="30 " aria-valuemin="0 " aria-valuemax="100 "></div>
                        </div>
                    </div>
                    <h4>React with Redux</h4>
                    <div class="percentage pb-4 ">
                        <div class="progress ">
                            <div class="progress-bar color-5"  style={{width: "55%"} } aria-valuenow="30 " aria-valuemin="0 " aria-valuemax="100 "></div>
                        </div>
                    </div>
                    <h4>SQL</h4>
                    <div class="percentage pb-4 ">
                        <div class="progress ">
                            <div class="progress-bar color-4"  style={{width: "40%"} } aria-valuenow="30 " aria-valuemin="0 " aria-valuemax="100 "></div>
                        </div>
                    </div>
                    <h4>Machine Learning</h4>
                    <div class="percentage pb-4 ">
                        <div class="progress ">
                            <div class="progress-bar color-4"  style={{width: "45%"} } aria-valuenow="30 " aria-valuemin="0 " aria-valuemax="100 "></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 p-5 pt-0" data-aos="fade-left" data-aos-delay="100">
                    <h4>Python3</h4>
                    <div class="percentage pb-4 ">
                        <div class="progress ">
                            <div class="progress-bar color-4"  style={{width: "75%"} } aria-valuenow="30 " aria-valuemin="0 " aria-valuemax="100 "></div>
                        </div>
                    </div>
                    <h4>NodeJs</h4>
                    <div class="percentage pb-4 ">
                        <div class="progress ">
                            <div class="progress-bar color-4"  style={{width: "85%"}} aria-valuenow="30 " aria-valuemin="0 " aria-valuemax="100 "></div>
                        </div>
                    </div>
                    <h4>MongoDB</h4>
                    <div class="percentage pb-4 ">
                        <div class="progress ">
                            <div class="progress-bar color-4"  style={{width: "68%"} } aria-valuenow="30 " aria-valuemin="0 " aria-valuemax="100 "></div>
                        </div>
                    </div>
                    <h4>DevOps </h4>
                    <div class="percentage pb-4 ">
                        <div class="progress ">
                            <div class="progress-bar color-4"  style={{width: "65%"} } aria-valuenow="30 " aria-valuemin="0 " aria-valuemax="100 "></div>
                        </div>
                    </div>
                    <h4>DBMS &amp; Operating stsyem</h4>
                    <div class="percentage pb-4 ">
                        <div class="progress ">
                            <div class="progress-bar color-4"  style={{width: "85%"} } aria-valuenow="30 " aria-valuemin="0 " aria-valuemax="100 "></div>
                        </div>
                    </div>
                </div>
            </div>
                {/* <div class="project-heading container">
                    <div class="row">
                        <h1>Days I<b class="highlight"> Code</b></h1>
                    </div>
                    <div class="row" style={{marginTop: "20px"}}>
                        <div class="col" style={{justifyContent: "center" }} id="leetCodeProfile">
                            <img src="https://leetcode.card.workers.dev/sahilduhan?theme=light&amp;font=baloo&amp;extension=null" class="leetcodestat" alt="leetcodestat"/>
                        </div>
                    <div class="col" style={{justifycontent: "center" }} id="githubProfile">
                        <a href="https://awesome-github-stats.azurewebsites.net/index.html??cardType=github&Background=F8F8F8&Text=0563BB">    <img  alt="sahilduhan's GitHub Stats" src="https://awesome-github-stats.azurewebsites.net/user-stats/sahilduhan?cardType=github&Background=F8F8F8&Text=0563BB" />  </a>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
    )
}

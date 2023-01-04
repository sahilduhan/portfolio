import React from 'react'
import { Icon } from '@iconify/react';
 
export const MainPage = () => {
    const newPageUrl = "https://drive.google.com/file/d/1fJjYJEUAfSBUKTibt_f-d4PIfT_Yz3SS/view?usp=share_link";
    const handleClick = ()=>{
        window.open(newPageUrl, "_blank")
    }
    return (
        <div>
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>SAHIL DUHAN</h1>
                    <p>I'm an upcoming SDE</p>
                    <div className="social-links">
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/sahildu26064579" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/sahilduhan.exe/" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a rel="noreferrer" target="_blank" href="https://github.com/sahilduhan" className="google-plus"><i className="bx bxl-github"></i></a>
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sahilduhan16/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        <a rel="noreferrer" target="_blank" href="https://www.codechef.com/users/sahilduhan1609" className="linkedin"><Icon icon="simple-icons:codechef" /></a>
                        <a rel="noreferrer" target="_blank" href="https://leetcode.com/sahilduhan/" className="linkedin"><Icon icon="simple-icons:leetcode" /></a>
                    </div>
                    <button type="button" class="btn btn-outline-primary" onClick={()=>{handleClick()}} id="click" style={{margin: "10px"}}>View Resume</button>
                </div>
            </section>
        </div>
    )
}
